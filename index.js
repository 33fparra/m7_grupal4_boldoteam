import express from 'express';
import pkg from 'pg';
import Cursor from 'pg-cursor';

const { Pool } = pkg;


const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'pipe1234',
  database: 'banco',
  port: 5432,
});

// 1. Crear una función asíncrona que registre una nueva transacción
async function registrarTransaccion(cuenta, monto, descripcion) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const cuentaResult = await client.query('SELECT saldo FROM cuentas WHERE id = $1 FOR UPDATE', [cuenta]);
    if (cuentaResult.rows.length === 0) {
      throw new Error('Cuenta no encontrada');
    }

    const saldoActual = cuentaResult.rows[0].saldo;
    if (saldoActual < monto) {
      throw new Error('Saldo insuficiente');
    }

    const nuevoSaldo = saldoActual - monto;
    await client.query('UPDATE cuentas SET saldo = $1 WHERE id = $2', [nuevoSaldo, cuenta]);

    const fecha = new Date().toISOString().slice(0, 10);
    await client.query('INSERT INTO transacciones (descripcion, fecha, monto, cuenta) VALUES ($1, $2, $3, $4)', [descripcion, fecha, monto, cuenta]);

    const transaccionResult = await client.query('SELECT * FROM transacciones WHERE cuenta = $1 ORDER BY fecha DESC LIMIT 1', [cuenta]);
    console.log('Última transacción:', transaccionResult.rows[0]);

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

// 2. Realizar una función asíncrona que consulte la tabla de transacciones

// async function consultarTransacciones(cuenta) {
//   const client = await pool.connect();

//   try {
//     const cursor = client.query(new Cursor('SELECT * FROM transacciones WHERE cuenta = $1 ORDER BY fecha DESC LIMIT 10', [cuenta]));
//     const rows = [];
//     for await (const row of cursor) {
//       rows.push(row);
//     }
//     console.log('Últimas 10 transacciones:', rows);
//   } finally {
//     client.release();
//   }
// }

async function consultarTransacciones(cuenta) {
  const client = await pool.connect();

  try {
    const cursor = client.query(new Cursor('SELECT * FROM transacciones WHERE cuenta = $1 ORDER BY fecha DESC LIMIT 10', [cuenta]));

    function readRows() {
      cursor.read(10, (err, rows) => {
        if (err) {
          throw err;
        }

        if (rows.length === 0) {
          // No more rows
          return;
        }

        console.log('Transacciones:', rows);

        // Read next batch of rows
        readRows();
      });
    }

    readRows();
  } finally {
    client.release();
  }
}


// 3. Realizar una función asíncrona que consulte el saldo de una cuenta
async function consultarSaldo(cuenta) {
  const client = await pool.connect();

  try {
    const cursor = client.query(new Cursor('SELECT saldo FROM cuentas WHERE id = $1', [cuenta]));
    const rows = [];
    for await (const row of cursor) {
      rows.push(row);
    }
    console.log('Saldo:', rows[0].saldo);
  } finally {
    client.release();
  }
}

async function main() {
  const command = process.argv[2];
  const cuenta = process.argv[3];

  try {
    switch (command) {
      case 'transaccion':
        const monto = parseFloat(process.argv[4]);
        const descripcion = process.argv[5];
        await registrarTransaccion(cuenta, monto, descripcion);
        break;
      case 'consultar-transacciones':
        await consultarTransacciones(cuenta);
        break;
      case 'consultar-saldo':
        await consultarSaldo(cuenta);
        break;
      default:
        console.log('Comando no reconocido');
        break;
    }
  } catch (error) {
    // 4. En caso de haber un error en la transacción, se debe retornar el error por consola
    console.error('Error al realizar la operación:', error);
  }
}

main().catch((error) => console.error('Error en la aplicación', error));