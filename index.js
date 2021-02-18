const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

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
