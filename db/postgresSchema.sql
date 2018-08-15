-- Run this from inside database named david
DROP DATABASE IF EXISTS menu;
CREATE DATABASE menu;
\c menu;

-- Use \COPY to make paths relative when dockerizing

-- Make the menus table and insert data (add primary key afterwards for greater load speed)
CREATE TABLE menus (id INT UNIQUE, name VARCHAR(150) UNIQUE);
COPY menus(id, name) FROM '/Users/david/hackreactor/menu/db/csv/menus.csv' DELIMITER ',';
ALTER TABLE menus ADD PRIMARY KEY (id);

-- Make the submenus table and insert data (add PK and FK afterwards for greater load speed)
CREATE TABLE submenus (id INT UNIQUE, name VARCHAR(150) NOT NULL, resid INT NOT NULL);
COPY submenus(id, name, resid) FROM '/Users/david/hackreactor/menu/db/csv/submenus.csv' DELIMITER ',';
ALTER TABLE submenus ADD PRIMARY KEY (id);
ALTER TABLE submenus ADD FOREIGN KEY (resid) REFERENCES menus (id);

-- Make the items table and insert data with multiple copies (add PK and FK afterwards for greater load speed)
CREATE TABLE items (id INT NOT NULL, name VARCHAR(50) NOT NULL, description VARCHAR(175) NOT NULL, price INT NOT NULL, subid INT NOT NULL);
COPY items(id, name, description, price, subid) FROM '/Users/david/hackreactor/menu/db/csv/items1.csv' DELIMITER ',';
COPY items(id, name, description, price, subid) FROM '/Users/david/hackreactor/menu/db/csv/items2.csv' DELIMITER ',';
COPY items(id, name, description, price, subid) FROM '/Users/david/hackreactor/menu/db/csv/items3.csv' DELIMITER ',';
COPY items(id, name, description, price, subid) FROM '/Users/david/hackreactor/menu/db/csv/items4.csv' DELIMITER ',';
COPY items(id, name, description, price, subid) FROM '/Users/david/hackreactor/menu/db/csv/items5.csv' DELIMITER ',';
ALTER TABLE items ADD PRIMARY KEY (id);
ALTER TABLE items ADD FOREIGN KEY (subid) REFERENCES submenus (id);

-- Add indices to dramatically increase speed of joins
CREATE INDEX res_id on submenus (resid);
CREATE INDEX sub_id on items (subid);

-- createdb david
-- psql david < ./db/postgresSchema.sql
-- \di to see indices