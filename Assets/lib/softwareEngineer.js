const Employee = require("./employee");

class SoftwareEngineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    this.role = "SoftwareEngineer";
  }
  getGitHub() {
    return this.gitHub;
  }
}
module.exports = SoftwareEngineer
