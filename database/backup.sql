-- Creacion de la base de datos con el nombre 'universidad'
CREATE DATABASE universidad;

-- Creacion de la tabla 'personas'
CREATE TABLE personas ( 
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL);