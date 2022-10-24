const Manager = require("../lib/manager");

describe("Manager", () => {
  it("Should get the get the office number via constructor arguments", () => {
    const testNumber = 1234;
    const employee = new Manager("Sam", 1234, "sam@gmail.com", testNumber);
    expect(employee.officeNumber).toBe(testNumber);
  });
  it("should get the office number via getOfficeNumber()", () => {
    const testNumber = 1234;
    const employee = new Manager("Sam", 1234, "sam@gmail.com", testNumber);
    expect(employee.getOfficeNumber()).toBe(testNumber);
  });
  it('getRole() should return "Manager"', () => {
    const testRole = "Manager";
    const employee = new Manager("Sam", 1234, "sam@gmail.com", "1234");
    expect(employee.getRole()).toBe(testRole);
  });
});
