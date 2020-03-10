const inquirer = require("inquirer");
const mysql = require("sql");

function addEmployee(){
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
        },
    ])
}

function addDeparment(){
    inquirer.prompt([
        {
            type: "input",
            name: "department_name",
            message: "What is the department's name?",
        },
    ])
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
    ])
}