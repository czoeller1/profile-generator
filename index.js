const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const inquirer = require("inquirer");
const fs = require("fs");

const begin = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Proflie</title>
    <link
      type="text/css"
      rel="stylesheet"
      href="./dist/style.css"
    />
</head>
<body>`;

const end = `</body>
</html>`;

const employees = [];

function writeFile() {
  console.log("WIP");
}

function engPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your new engineer?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the id of your new engineer?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the email of your new engineer?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the github username of your new engineer?",
        name: "github",
      },
    ])
    .then((response) => {
      employees.push(
        new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        )
      );
      empPrompt();
    });
}

function intPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your new intern?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the id of your new intern?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the email of your new intern?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the name of the school of your new intern?",
        name: "school",
      },
    ])
    .then((response) => {
      employees.push(
        new Intern(response.name, response.id, response.email, response.school)
      );
      empPrompt();
    });
}

function empPrompt() {
  console.log(employees);
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select an employee type to add:",
        name: "type",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((response) => {
      switch (response.type) {
        case "Engineer":
          engPrompt();
          console.log(response.type);
          break;
        case "Intern":
          intPrompt();
          console.log(response.type);
          break;
        case "Finish":
          return;
      }
    });
}

function manager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your Project manager?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the id of your Project manager?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the email of your Project manager?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the office number of your Project manager?",
        name: "office",
      },
    ])
    .then((response) => {
      employees.push(
        new Manager(response.name, response.id, response.email, response.office)
      );
      empPrompt();
    });
}

manager();
