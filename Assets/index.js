const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const { writeFile } = require("fs/promises");

const questions = [
  {
    type: "input",
    name: "manager",
    message: "What is the managers name?",
    validate: (managerInput) => {
      if (managerInput) {
        return true;
      } else {
        console.log("There needs to be a manager!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "managerId",
    message: "What is your Employee ID?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("You need an employee ID!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your Email address?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("You need an email for updates!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "number",
    message: "What is the office number?",
    validate: (numberInput) => {
      if (numberInput) {
        return true;
      } else {
        console.log("Office number. NOW!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "menu",
    message: "Would you like to add a team member?",
    choices: ["Engineer", "Intern", "Finish Building My Team"],
    validate: (menuInput) => {
      if (menuInput) {
        return true;
      } else {
        console.log("YOU NEED TO PICK ONE!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineers name?",
    validate: (engineerInput) => {
      if (engineerInput) {
        return true;
      } else {
        console.log("We both know he has a name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is the engineers Employee ID?",
    validate: (engineerIdInput) => {
      if (engineerIdInput) {
        return true;
      } else {
        console.log("You need an employee ID!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "engineersEmail",
    message: "What is the engineers Email address?",
    validate: (engineerEmailInput) => {
      if (engineerEmailInput) {
        return true;
      } else {
        console.log("You need an email for updates!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineers GitHub username?",
  },
  {
    type: "input",
    name: "internName",
    message: "What is the interns name?",
    validate: (internInput) => {
      if (internInput) {
        return true;
      } else {
        console.log("We both know he has a name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "internId",
    message: "What is the interns Employee ID?",
    validate: (internIdInput) => {
      if (internIdInput) {
        return true;
      } else {
        console.log("You need an employee ID!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "internsEmail",
    message: "What is the interns Email address?",
    validate: (internEmailInput) => {
      if (internEmailInput) {
        return true;
      } else {
        console.log("You need an email for updates!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
    validate: (ineternSchoolInput) => {
      if (ineternSchoolInput) {
        return true;
      } else {
        console.log(
          "The intern needs to be in school to qualify for the intern role."
        );
        return false;
      }
    },
  },
];

function writetoFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((inquirerAnswers) => {
    console.log("Generating roster... Please wait...");
    writetoFile("./index.html", generateMarkdown({ ...inquirerAnswers }));
  });
}

init();