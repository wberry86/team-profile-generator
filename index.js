const fs = require("fs");
const figlet = require("figlet");
const chalk = require("chalk");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const teamMembers = [];
const idArray = [];

let manager;

console.log(
  chalk.green(
    figlet.textSync("Team Profile Generator", { horizontalLayout: "full" })
  )
);

// set up array of questions in order to get input for info
function managerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's Id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
      },
    ])
    .then((answers) => {
      let manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );

      teamMembers.push(manager);
      idArray.push(answers.id);

      console.info("Answer:", answers);
      console.log("continue to questions");

      otherPrompt();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function otherPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeRole",
        message: "Which type of employee would you like to add?",
        choices: ["Intern", "Engineer"],
      },
      {
        type: "input",
        name: "employeeName",
        message: "What is the name of the employee?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the employee's id?",
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's Github?",
        when: (userInput) => userInput.employeeRole === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Intern's school?",
        when: (userInput) => userInput.employeeRole === "Intern",
      },
      {
        type: "confirm",
        name: "newEmployee",
        message: "Would you like to add another team member?",
      },
    ])
    .then((otherAnswers) => {
      if (otherAnswers.employeeRole === "Intern") {
        let employee = new Intern(
          otherAnswers.employeeName,
          otherAnswers.employeeId,
          otherAnswers.employeeEmail,
          otherAnswers.school
        );
        teamMembers.push(employee);
        idArray.push(otherAnswers.id);
      } else if (otherAnswers.employeeRole === "Engineer") {
        let employee = new Engineer(
          otherAnswers.employeeName,
          otherAnswers.employeeId,
          otherAnswers.employeeEmail,
          otherAnswers.school
        );
        teamMembers.push(employee);
        idArray.push(otherAnswers.id);
      }
      if (otherAnswers.newEmployee === true) {
        otherPrompt();
      } else {
        createTeam();
      }
    });
}

function createTeam() {
    
}

managerPrompt();

// generate html
// make template for each profession

// design html first
// use bootstrap
// loop through employees


/*
//generate html page with cards
fs.readFile("readQuestions.html", "utf8", function (err, data) {
    fs.writeFile("writeQuestions.html", data, (err) => {});
  });
  */