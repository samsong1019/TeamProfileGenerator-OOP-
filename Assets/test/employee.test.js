const Employee = require("../lib/employee");

//passed
describe("Employee", () => {
  it("Should initiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
//passed
  it("Should set the name of the employee via constructor arugments", () => {
    const testName = "Sam";
    const employee = new Employee(testName);
    expect(employee.name).toBe(testName);
  });
//passed
  it("Should set the ID of the employee via constructor arugments", () => {
    const testId = 1234;
    const employee = new Employee("Sam", testId);
    expect(employee.id).toBe(testId);
  });
//passed
  it("Should set the email of the employee via constructor arugments", () => {
    const testEmail = "sam@gmail.com";
    const employee = new Employee("Sam", 1234, testEmail);
    expect(employee.email).toBe(testEmail);
  });
//passed
  describe("getName", () => {
    it("Should get the name via getName()", () => {
      const testName = "Sam";
      const employee = new Employee(testName);
      expect(employee.getName()).toBe(testName);
    });
  });
//passed
  describe("getId", () => {
    it("Should get the Id via getId()", () => {
      const testId = 1234;
      const employee = new Employee("Sam", testId, "sam@gmail.com");
      expect(employee.getId()).toBe(testId);
    });
  });
//passed
  describe("getEmail", () => {
    it("Should get the email via getEmail()", () => {
      const testEmail = "sam@gmail.com";
      const employee = new Employee("Sam", testEmail, 1234);
      expect(employee.getEmail()).toBe(testEmail);
    });
  });
//passed
  describe("getRole", () => {
    it("Should get the role via getRole()", () => {
      const testRole = "Employee";
      const employee = new Employee("Sam", 1234, "sam@gamil.com");
      expect(employee.getRole()).toBe(testRole);
    });
  });
});
