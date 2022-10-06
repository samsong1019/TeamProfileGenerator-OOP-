const PrincipalSoftwareEngineer = require("../lib/principalSoftwareEngineer");

describe("PrincipalSoftwareEngineer", () => {
  it("Should get the GitHub via constructor arguments", () => {
    const testGitHub = "sam";
    const employee = new PrincipalSoftwareEngineer(
      "Sam",
      1234,
      "sam@gmail.com",
      testGitHub
    );
    expect(employee.gitHub).toBe(testGitHub);
  });
  it("Should get the GitHub via getGitHub()", () => {
    const testGitHub = "sam";
    const employee = new PrincipalSoftwareEngineer(
      "Sam",
      1234,
      "sam@gmail.com",
      testGitHub
    );
    expect(employee.getGitHub()).toBe(testGitHub);
  });
  it('getRole() should return "PrincipalSoftwareEngineer"', () => {
    const testRole = "PrincipalSoftwareEngineer";
    const employee = new PrincipalSoftwareEngineer(
      "Sam",
      1234,
      "sam@gamil.com",
      "sam"
    );
    expect(employee.getRole()).toBe(testRole);
  });
});
