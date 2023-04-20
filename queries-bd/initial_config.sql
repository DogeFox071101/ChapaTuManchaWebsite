-- Comando para armar bd Postgres via Docker
-- docker run --name postgresql -e POSTGRES_USER=dogefox -e POSTGRES_PASSWORD=ctmctmctm -p 5432:5432 -d postgres

CREATE ROLE user_ctm_backend WITH
	LOGIN
	NOSUPERUSER
	NOCREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'ctmctmctm2023';

CREATE DATABASE chapatumancha_db
    WITH
    OWNER = user_ctm_backend
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Control por Sequelize CLI
-- Aplicar:
-- npx sequelize-cli db:migrate
-- Rollback:
-- npx sequelize-cli db:migrate:undo:all