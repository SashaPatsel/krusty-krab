CREATE DATABASE patties_db;
-- DROP DATABASE IF EXISTS patties_db;
USE patties_db;

CREATE TABLE krabby
(
  id INT NOT NULL AUTO_INCREMENT,
  patty_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);





