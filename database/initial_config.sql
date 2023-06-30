-- Comando para armar bd Postgres via Docker
-- docker run --name postgresql -e POSTGRES_USER=dogefox -e POSTGRES_PASSWORD=ctmctmctm -p 5432:5432 -d postgres

-- Comandos desde el Usuario "postgres"
-- Dropeo de Base de Batos
DROP DATABASE chapatumancha_db;

-- Dropeo de Usuario de Backend
DROP ROLE user_ctm_backend;

-- Creación de Usuario para el Backend
CREATE ROLE user_ctm_backend WITH
	LOGIN
	NOSUPERUSER
	NOCREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'ctmctmctm2023';

-- Creación de Base de Datos
CREATE DATABASE chapatumancha_db WITH
    OWNER = user_ctm_backend
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;