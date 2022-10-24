const Intern = require("../lib/intern");
describe("Intern", () => {
  it("Should get the school via constructor arguments", () => {
    const testSchool = "GT";
    const employee = new Intern("Sam", 1234, "sam@gmail.com", testSchool);
    expect(employee.school).toBe(testSchool);
  });

  it('getRole() should return "Intern"', () => {
    const testRole = "Intern";
    const employee = new Intern("Sam", 1234, "sam@gmail.com", "GT");
    expect(employee.getRole()).toBe(testRole);
  });

  it("Should get the school via getSchool()", () => {
    const testSchool = "GT";
    const employee = new Intern("Sam", 1234, "sam@gmail.com", testSchool);
    expect(employee.getSchool()).toBe(testSchool);
  });
});
