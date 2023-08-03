<img src="public/images/boldoMedio.png" align="right" />
 <h1 align= left ><b>Grupal 3 M7 /EquipoBoldo</b> <img src = "https://media.giphy.com/media/gF2m2JOyGReppog8hU/giphy.gif" width = 80px></h1>

<br>

<h2><b>Descripción del Proyecto</b> <img src = " https://media.giphy.com/media/GjhqaB166nKR4BoEnh/giphy.gif" width = 50px></h2>

📝 La escuela de música Always Music solicitó hacer unas pruebas con el avance del desarrollo del sistema de gestión
con base de datos, se dieron cuenta que no se podían hacer varias consultas de forma simultánea y que, al
intentar hacer una consulta errónea, no recibían ningún error, dejando la posibilidad de creer que un estudiante
fue registrado y que esto no sea así.
En este desafío deberás ocupar la clase Pool definiendo sus diferentes propiedades, capturar los posibles errores
en el proceso de conexión con la base de datos y realizar las siguientes consultas, usando textos parametrizados y
Prepared Statement:
 Agregar un nuevo estudiante.
 Consultar los estudiantes registrados.
 Consultar estudiante por rut.
 Actualizar la información de un estudiante.
 Eliminar el registro de un estudiante.


<br>

<h2><b>Instrucciones de Instalación</b> <img src = "https://media.giphy.com/media/3WZJkScSyfYVl7mGLd/giphy.gif" width = 60px></h2> 

⚙️ Para instalar las dependencias necesarias, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   npm install

4. Abrir el archivo html ingresando al https://localhost:3000
5. Para Insertar colocar en la consola: node index.js nuevo 07 'Loreto7' '666666-7' '7' '7'
6. Para Editar colocar en la consola: node index.js editar 6 'LoretoGodoy' '666666-6' '3' '3'
7. Para Consultar colocar en la consola: node index.js consulta


<br>

<details> <img src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFtdWgyMmFrcHd4NjhuZWJ4aDJpcTlkbWlyNGQ4dDJwa2ZwZmptcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/B4AgroOi1LkdPxMllY/giphy.gif" width = 50px> <summary><b>Ver las instrucciones</b></summary> 


1. Instalar las dependencias:

   ```sh
   npm install
   ```

2. En el caso de no poder instalar las dependencias:

   ```sh
   npm install --force
   ```

3. Las librerias que estamos ocupando `package.json`:

    ````sh
    ... 
    "name": "helpers",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    + "type": "module",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
    "express": "^4.18.2",
    "pg": "^8.11.2"
    }
    ````

 
</details>

## Funcionalidades :sparkles:

✨ Con nuestra aplicacion puedes:

1. Realizar la conexión con Base de Datos, utilizando la clase Pool y definiendo un máximo de 20
clientes, 5 segundos como tiempo máximo de inactividad de un cliente y 2 segundos de espera de un
nuevo cliente.
2. Hacer todas las consultas con un JSON como argumento definiendo la propiedad name para el Prepared
Statement.
3. Hacer las consultas con texto parametrizado.
4. Liberar a un cliente al concluir su consulta.
5. Capturar los posibles errores en todas las consultas.
6. Retornar por consola un mensaje de error en caso de haber problemas de conexión.
7. Obtener el registro de los estudiantes registrados en formato de arreglos.


<!-- ![Foto de grupo](public/images/grupoVerde.jpg) -->

## Participantes del Grupo :busts_in_silhouette:

1. Loreto Godoy : https://github.com/loreGodoyUp

2. Daniel Mendez : https://github.com/danimen81

3. Zimram Blanco : https://github.com/Zimram

4. Jose Fuentealba : https://github.com/JoseFelipeGeo

5. Boris Guiñez : https://github.com/boanguibe

6. Felipe Andres Parra : https://github.com/33fparra


### Este proyecto está bajo la licencia ADALID.
<img src="public/images/boldoMedio.png" align="right" />

