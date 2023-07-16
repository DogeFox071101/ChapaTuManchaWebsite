-- Comandos desde el Usuario "user_ctm_backend"
-- Dropeo de Tablas
DROP TABLE IF EXISTS sanctions;
DROP TABLE IF EXISTS reports;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS sportfields;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS admins;
DROP TABLE IF EXISTS phone_numbers;
DROP TABLE IF EXISTS addresses;

-- Creación de Tablas
CREATE TABLE IF NOT EXISTS addresses (
	address_id UUID NOT NULL,
	address_line TEXT NOT NULL,
	door_number INT NOT NULL,
	zip_code INT NOT NULL,
	district TEXT NOT NULL,
	city TEXT NOT NULL,
	state TEXT NOT NULL,
	country TEXT NOT NULL,
	coord_x NUMERIC,
	coord_y NUMERIC,
	PRIMARY KEY (address_id)
);
CREATE TABLE IF NOT EXISTS phone_numbers (
	phone_id UUID NOT NULL,
	prefix TEXT NOT NULL,
	number INT NOT NULL,
	country TEXT NOT NULL,
	is_fixed BOOLEAN NOT NULL,
	PRIMARY KEY (phone_id)
);
CREATE TABLE IF NOT EXISTS admins (
	admin_id UUID NOT NULL,
	full_name TEXT NOT NULL,
	username TEXT NOT NULL,
	password TEXT NOT NULL,
	access_level INT NOT NULL,
	document_type TEXT NOT NULL,
	document_num INT NOT NULL,
	PRIMARY KEY (admin_id)
);
CREATE TABLE IF NOT EXISTS users (
	user_id UUID NOT NULL,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	email TEXT NOT NULL,
	password TEXT NOT NULL,
	token_session TEXT NOT NULL,
	date_birth DATE,
	document_type TEXT,
	document_num INT,
	date_register_lessor DATE,
	payment_methods TEXT[],
	address_id UUID,
	phone_id UUID,
	PRIMARY KEY (user_id),
	CONSTRAINT address_id FOREIGN KEY (address_id) REFERENCES addresses (address_id),
	CONSTRAINT phone_id FOREIGN KEY (phone_id) REFERENCES phone_numbers (phone_id)
);
CREATE TABLE IF NOT EXISTS sportfields (
	sportfield_id UUID NOT NULL,
	name TEXT NOT NULL,
	description TEXT NOT NULL,
	capacity INT NOT NULL,
	price NUMERIC NOT NULL,
	image_uuid UUID NOT NULL,
	date_post DATE NOT NULL,
	time_start TEXT NOT NULL,
	time_end TEXT NOT NULL,
	user_id UUID NOT NULL,
	address_id UUID NOT NULL,
	PRIMARY KEY (sportfield_id),
	CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES users (user_id),
	CONSTRAINT address_id FOREIGN KEY (address_id) REFERENCES addresses (address_id)
);
CREATE TABLE IF NOT EXISTS favorites (
	sportfield_id UUID NOT NULL,
	user_id UUID NOT NULL,
	date_added DATE NOT NULL,
	CONSTRAINT sportfield_id FOREIGN KEY (sportfield_id) REFERENCES sportfields (sportfield_id),
	CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES users (user_id)
);
CREATE TABLE IF NOT EXISTS bookings (
	booking_id UUID NOT NULL,
	date_booking DATE NOT NULL,
	time_start TEXT NOT NULL,
	time_end TEXT NOT NULL,
	sportfield_id UUID NOT NULL,
	user_id UUID NOT NULL,
	PRIMARY KEY (booking_id),
	CONSTRAINT sportfield_id FOREIGN KEY (sportfield_id) REFERENCES sportfields (sportfield_id)
);
CREATE TABLE IF NOT EXISTS reports (
	report_id UUID NOT NULL,
	report_text TEXT NOT NULL,
	evidence UUID NOT NULL,
    status TEXT NOT NULL,
	user_id UUID NOT NULL,
	sportfield_id UUID NOT NULL,
	PRIMARY KEY (report_id),
	CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES users (user_id),
	CONSTRAINT sportfield_id FOREIGN KEY (sportfield_id) REFERENCES sportfields (sportfield_id)
);
CREATE TABLE IF NOT EXISTS sanctions (
	sanction_id UUID NOT NULL,
	judgment TEXT NOT NULL,
	sanction_starts DATE NOT NULL,
	sanction_ends DATE NOT NULL,
	report_id UUID NOT NULL,
	admin_id UUID NOT NULL,
	PRIMARY KEY (sanction_id),
	CONSTRAINT report_id FOREIGN KEY (report_id) REFERENCES reports (report_id),
	CONSTRAINT admin_id FOREIGN KEY (admin_id) REFERENCES admins (admin_id)
);