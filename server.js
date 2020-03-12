const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "glezguerrero",
    database: "companyDB"
  });



function appMenu () {
    inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: ["Add Employee", "Add Role", "Add Department", "View Employees", "View Roles", "View Departments", "Update Employee Role", "Exit?"],
        }
    ]).then(response => {
        switch(response.menu) {
        case "Add Employee":
            addEmployee();
            break;
        case "Add Role":
            addRole();
            break;
        case "Add Department":
            addDeparment();
            break;
        case "View Employees":
            viewEmployees();
            break;
        case "View Roles":
            viewRoles();
            break;
        case "View Departments":
            viewDepartments();
            break;
        case "Update Employee Role":
            updateRole();
            break;
        case "Exit?":
            connection.end();
            break;

        }
    });
}

function addEmployee(){
    // let employees = connection.query("SELECT first_name, last_name FROM employee")
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is your employee's first name?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is your employee's last name?",
        },
        {
            type: "input", //  turn it into a list
            name: "role_id",
            message: "What is your employee's role?",
        },
        {
            type: "input",
            name: "manager_id",
            message: "Who is your employee's manager?",
        }
    ]).then(res => {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.first_name, res.last_name, res.role_id, res.manager_id], function(err, data) {
            if (err) throw err;
            console.table(res);

            appMenu();
  
            
          });
    })
}

function addDeparment(){
    inquirer.prompt([
        {
            type: "input",
            name: "department_name",
            message: "What is the department's name?",
        },
    ]).then(res => {
        connection.query('INSERT INTO department (name) VALUES (?)', [res.department_name], function(err, data) {
            if (err) throw err;
            console.table(res);

            appMenu();
  
            
          });
    })
}
function addRole(){
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the role's title?",
        },
        {
            type: "input",
            name: "salary",
            message: "How much is the salary for this role?",
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the department ID?",
        }
    ]).then(res => {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [res.title, res.salary, res.department_id], function(err, res) {
            if (err) throw err;
            console.table(res);
            appMenu();
        })
    })
}
function viewEmployees() {
    // connection.query("SELECT first_name, last_name FROM employee", function(err, res) {
        connection.query("SELECT first_name, last_name, name, salary FROM employee LEFT JOIN role ON employee.id = role.id LEFT JOIN department on employee.id = department.id", function(err, res) {
        if (err) throw err;
        console.table(res);
        appMenu();
    })
}
function viewRoles() {
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err;
        console.table(res);
        appMenu();
    })
}
function viewDepartments()  {
    connection.query("SELECT name FROM department", function(err, res) {
        if (err) throw err;
        console.table(res);
        appMenu();
    })
}

function updateRole() {
    inquirer.prompt([
        {
            type: "input", // make into a list
            name:"first_name",
            message: "Which employee would you like to update?"

        },
        {
            type: "input",
            name: "role_id",
            message: "What is the new role ID?"
        }
        ]).then(res => {
            connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [res.role_id, res.first_name], function(err, res) {
                if (err) throw err;
                console.table(res);
            })
        })
    }

appMenu();