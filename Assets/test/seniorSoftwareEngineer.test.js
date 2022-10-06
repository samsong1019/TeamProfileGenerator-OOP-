const SeniorSoftwareEngineer = require("../lib/seniorSoftwareEngineer");

describe("SeniorSoftwareEngineer", () => {
    it("Should get the GitHub via constructor arguments", () => {
      const testGitHub = "sam";
      const employee = new SeniorSoftwareEngineer(
        "Sam",
        1234,
        "sam@gmail.com",
        testGitHub
      );
      expect(employee.gitHub).toBe(testGitHub);
    });
    it("Should get the GitHub via getGitHub()", () => {
      const testGitHub = "sam";
      const employee = new SeniorSoftwareEngineer(
        "Sam",
        1234,
        "sam@gmail.com",
        testGitHub
      );
      expect(employee.getGitHub()).toBe(testGitHub);
    });
    it('getRole() should return "SeniorSoftwareEngineer"', () => {
      const testRole = "SeniorSoftwareEngineer";
      const employee = new SeniorSoftwareEngineer(
        "Sam",
        1234,
        "sam@gamil.com",
        "sam"
      );
      expect(employee.getRole()).toBe(testRole);
    });
  });