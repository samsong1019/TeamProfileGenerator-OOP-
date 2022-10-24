const Employee = require("./employee");

class PrincipalSoftwareEngineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    this.role = "PrincipalSoftwareEngineer";
  }
  getGitHub() {
    return this.gitHub;
  }
}
module.exports = PrincipalSoftwareEngineer