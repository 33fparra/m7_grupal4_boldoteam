-- Generated by the database client, not guaranteed complete.
CREATE TABLE transacciones(
    "id" SERIAL NOT NULL,
    "descripcion" character varying(50),
    "fecha" character varying(10),
    "monto" numeric,
    "cuenta" integer,
    PRIMARY KEY(id)
);