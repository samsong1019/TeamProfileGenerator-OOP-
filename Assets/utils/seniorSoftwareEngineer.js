const Employee = require("./employee");

class SeniorSoftwareEngineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    this.role = "SeniorSoftwareEngineer";
  }
  getGitHub() {
    return this.gitHub;
  }
}
module.exports = SeniorSoftwareEngineer