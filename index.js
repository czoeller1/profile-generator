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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
</head>
<body>
<header>
      <h4 class="text-center py-5 mb-5 bg-danger">My Team</h4>
    </header>
<div class="container">`;

let content = "";

const end = `</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</body>
</html>`;

const employees = [];

function createFile() {
  content += begin;
  for (let i = 0; i < employees.length; i++) {
    if (i % 3 == 0) {
      content += `<div class = "row my-5 d-flex justify-content-evenly">`;
    }
    let emp = employees[i];
    let card = `<div class = "col-4">
        <div class = "card">
        <div class = "card-header bg-info">
        <h4 class = "card-title">
        ${emp.getName()}
        </h4>
        <h5 class = "card-title">
        ${emp.getRole()}
        </h5>
        </div>

        <div class = "card-body">
        <p class = "card-text">ID: ${emp.getId()}</p>
        <p class = "card-text">Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></p>`;
    if (emp instanceof Manager) {
      card += `<p class = "card-text">Office number: ${emp.getOfficeNumber()}</p>`;
    } else if (emp instanceof Engineer) {
      card += `<p class = "card-text">GitHub: <a target = "blank" href="https://github.com/${emp.getGithub()}">${emp.getGithub()}</a></p>`;
    } else {
      card += `<p class = "card-text">School: ${emp.getSchool()}</p>`;
    }
    card += `</div>
    </div>
    </div>`;
    content += card;
    if (i % 3 == 2 || i == employees.length - 1) {
      content += `</div>`;
    }
  }
  content += end;
  fs.writeFile("./dist/index.html", content, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
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
          break;
        case "Intern":
          intPrompt();
          break;
        case "Finish":
          createFile();
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
