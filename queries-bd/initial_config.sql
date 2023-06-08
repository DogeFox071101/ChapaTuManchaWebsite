-- Comando para armar bd Postgres via Docker
-- docker run --name postgresql -e POSTGRES_USER=dogefox -e POSTGRES_PASSWORD=ctmctmctm -p 5432:5432 -d postgres

-- Dropeo de Configuración AS postgres
DROP DATABASE chapatumancha_db;

-- Dropeo de Usuario de backend AS postgres
DROP ROLE user_ctm_backend;

-- Creación de usuario para el backend AS postgres
CREATE ROLE user_ctm_backend WITH
	LOGIN
	NOSUPERUSER
	NOCREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'ctmctmctm2023';

-- Creación de Base de Datos AS postgres
CREATE DATABASE chapatumancha_db WITH
    OWNER = user_ctm_backend
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Drop previo a creación de tablas AS user_ctm_backend
DROP TABLE IF EXISTS booking;
DROP TABLE IF EXISTS sportfield;
DROP TABLE IF EXISTS lessor;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS addresses;
DROP TABLE IF EXISTS admins;
DROP TABLE IF EXISTS person;

-- Creación de tablas AS user_ctm_backend
CREATE TABLE IF NOT EXISTS person (
	id_person UUID NOT NULL,
	first_name VARCHAR (32) NOT NULL,
	last_name VARCHAR (32) NOT NULL,
	email VARCHAR (32) NOT NULL,
	passwd VARCHAR (128) NOT NULL,
	token_session VARCHAR (128),
	PRIMARY KEY (id_person)
);
CREATE TABLE IF NOT EXISTS admins (
	id_admin UUID NOT NULL,
	id_person UUID NOT NULL,
	last_login DATE NOT NULL,
	access_level SMALLINT NOT NULL,
	PRIMARY KEY (id_admin),
	CONSTRAINT fk_person FOREIGN KEY (id_person) REFERENCES person (id_person)
);
CREATE TABLE IF NOT EXISTS addresses (
	id_address UUID NOT NULL,
	address_name VARCHAR (64) NOT NULL,
	city VARCHAR (32) NOT NULL,
	county VARCHAR (32) NOT NULL,
	state_name VARCHAR (32) NOT NULL,
	country VARCHAR (32) NOT NULL,
	PRIMARY KEY (id_address)
);
CREATE TABLE IF NOT EXISTS customer (
	id_customer UUID NOT NULL,
	id_person UUID NOT NULL,
	id_address UUID NOT NULL,
	phone VARCHAR (16) NOT NULL,
	date_birth DATE NOT NULL,
	document_type VARCHAR (16) NOT NULL,
	document_num VARCHAR (16) NOT NULL,
	is_allowed BOOLEAN,
	PRIMARY KEY (id_customer),
	CONSTRAINT fk_person FOREIGN KEY (id_person) REFERENCES person (id_person),
	CONSTRAINT fk_address FOREIGN KEY (id_address) REFERENCES addresses (id_address)
);
CREATE TABLE IF NOT EXISTS lessor (
	id_lessor UUID NOT NULL,
	id_customer UUID NOT NULL,
	registration_date DATE NOT NULL,
	PRIMARY KEY (id_lessor),
	CONSTRAINT fk_customer FOREIGN KEY (id_customer) REFERENCES customer (id_customer)
);
CREATE TABLE IF NOT EXISTS sportfield (
	id_sportfield UUID NOT NULL,
	id_address UUID NOT NULL,
	name_txt VARCHAR (32) NOT NULL,
	capacity SMALLINT NOT NULL,
	PRIMARY KEY (id_sportfield),
	CONSTRAINT fk_address FOREIGN KEY (id_address) REFERENCES addresses (id_address)
);
CREATE TABLE IF NOT EXISTS booking (
	id_booking UUID NOT NULL,
	id_sportfield UUID NOT NULL,
	id_customer UUID NOT NULL,
	booking_date DATE NOT NULL,
	start_time TIME NOT NULL,
	end_time TIME NOT NULL,
	PRIMARY KEY (id_booking),
	CONSTRAINT fk_sportfield FOREIGN KEY (id_sportfield) REFERENCES sportfield (id_sportfield),
	CONSTRAINT fk_customer FOREIGN KEY (id_customer) REFERENCES customer (id_customer)
);

-- Datos de Validación en tablas
INSERT INTO person VALUES (
	'54fbfe52-e4ab-4d4a-862a-d6b77ca81047',
	'Paco',
	'Paco Paco',
	'paco@paco.pa',
	'xd',
	'token'
);
INSERT INTO admins VALUES (
	'd5a9007a-062e-4c00-ae03-418050ec2bdf',
	'54fbfe52-e4ab-4d4a-862a-d6b77ca81047',
	'2023-06-07',
	1
);
INSERT INTO addresses VALUES (
	'9ce2f3e2-4377-4797-92fc-2c86d5d18f9e',
	'La casa de Paco',
	'Paco City',
	'Provincia de Paco',
	'Departamento de Paco',
	'República de Paco'
);
INSERT INTO customer VALUES (
	'f5cdd8a8-45d8-4171-b8af-dd88c28f4b14',
	'54fbfe52-e4ab-4d4a-862a-d6b77ca81047',
	'9ce2f3e2-4377-4797-92fc-2c86d5d18f9e',
	'999999999',
	'2023-06-25',
	'DNI',
	'11111111',
	true
);
INSERT INTO lessor VALUES (
	'acc5923e-01bd-4359-aa95-3bfab0a664f7',
	'f5cdd8a8-45d8-4171-b8af-dd88c28f4b14',
	'2023-04-30'
);
INSERT INTO sportfield VALUES (
	'2d037678-ec65-41f1-a261-7d8085908607',
	'9ce2f3e2-4377-4797-92fc-2c86d5d18f9e',
	'Cancha de Paco',
	20
);
INSERT INTO booking VALUES (
	'6e387d88-1fd6-4309-8490-c87cf7efb81a',
	'2d037678-ec65-41f1-a261-7d8085908607',
	'f5cdd8a8-45d8-4171-b8af-dd88c28f4b14',
	'2023-11-20',
	'09:00',
	'12:00'
);

-- Querys de obtención de datos

-- Iniciar Sesión:
select email, passwd from person
	where email = 'paco@paco.pa' and passwd = 'xd';
-- Retornar Información de Cliente
select person.id_person, person.first_name, person.last_name, person.email, person.passwd,
	person.token_session, customer.id_customer, customer.phone, customer.date_birth, customer.document_type,
	customer.document_num, customer.is_allowed, addresses.id_address, addresses.address_name, addresses.city,
	addresses.county, addresses.state_name, addresses.country from customer
	join person on customer.id_person = person.id_person
	join addresses on customer.id_address = addresses.id_address
	where email = 'paco@paco.pa' and passwd = 'xd';