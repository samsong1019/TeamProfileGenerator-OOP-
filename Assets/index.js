const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./utils/manager");
const PrincipalSoftwareEngineer = require("./utils/principalSoftwareEngineer");
const SeniorSoftwareEngineer = require("./utils/seniorSoftwareEngineer");
const SoftwareEngineer = require("./utils/softwareEngineer");
const Intern = require("./utils/intern");
const mergeAllRoles = require("./utils/generateMarkup");
const outputDirectory = path.resolve(__dirname, "Team");
const outputPath = path.join(outputDirectory, "index.html");
const fullTeam = [];

const createManager = () => {
  console.log(
    "Hello \n Welcome to the Team Builder! \n  Answer questions regaurding employee type and information! \n After you are finished, a new web application will be made!"
  );
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's ID#?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Office Number?",
      },
    ])
    .then((managerInfo) => {
      managerInfo.role = "Manager";
      const { name, id, email, officeNumber } = managerInfo;
      const newManager = new Manager(name, id, email, officeNumber);
      fullTeam.push(newManager);
    });
};

const addEmployees = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: [
          "PrincipalSoftwareEngineer",
          "SeniorSoftwareEngineer",
          "SoftwareEngineer",
          "Intern",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employees name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Enter the employees name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employees ID#?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter ID#!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the employees email?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Enter the employees email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the SoftwareEngineer's GitHub?",
        validate: (gitHubInput) => {
          if (gitHubInput) {
            return true;
          } else {
            console.log(
              "Please enters the SoftwareEngineer's GitHub so you and other people can see his amazing work!"
            );
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Where does the intern attend school?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log(
              "Intern must attend school to qualify for intern position!"
            );
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "add",
        message: "Would you like to add another team member?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, gitHub, school, add } = employeeData;
      let employee;
      if (role === "PrincipalSoftwareEngineer") {
        employee = new PrincipalSoftwareEngineer(name, id, email, gitHub);
      } else if (role === "SeniorSoftwareEnginner") {
        employee = new SeniorSoftwareEngineer(name, id, email, gitHub);
      } else if (role === "SoftwareEngineer") {
        employee = new SoftwareEngineer(name, id, email, gitHub);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }
      fullTeam.push(employee);
      if (add) {
        return addEmployees(fullTeam);
      } else {
        return fullTeam;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile(outputPath, data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(
        "Team Made Succesfully! \n You can find it in the Team Folder!"
      );
    }
  });
};

createManager()
  .then(addEmployees)
  .then((fullTeam) => {
    return mergeAllRoles(fullTeam);
  })
  .then((html) => {
    return writeFile(html);
  })
  .catch((err) => {
    console.log(err);
  });
