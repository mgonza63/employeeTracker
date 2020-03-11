-- Employee Table

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mauricio", "Gonzalez", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 14, 3);

-- Role Table

INSERT INTO role (title, salary, department_id)
VALUES ("Software Developer", 90000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Product Manager", 75000, 2);

-- Department Table

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Sales");