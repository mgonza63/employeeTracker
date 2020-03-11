DROP DATABASE IF EXISTS companyDB;

create database companyDB;

use companyDB;

create table employee (
  id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT(6) NOT NULL,
  manager_id INT(6),

  primary key(id)
);

use companyDB;

CREATE TABLE role (
   id INTEGER NOT NULL AUTO_INCREMENT,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL(10,2) NOT NULL,
   department_id INT(10) NOT NULL,
   
   primary key(id)
);


use companyDB;

CREATE TABLE department (
	id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    
    primary key(id)
);