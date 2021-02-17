const Manager = require("../lib/manager");

describe("Manager class", () => {
  describe("Correctly sets the manager variables", () => {
    let employee = new Manager("Ben", 4, "test@email.com", 403);
    it("Displays the given name using getName()", () => {
      expect(employee.getName()).toBe("Ben");
    });
    it("Displays the given id using getId()", () => {
      expect(employee.getId()).toBe(4);
    });
    it("Displays the given email using getEmail()", () => {
      expect(employee.getEmail()).toBe("test@email.com");
    });
    it("Displays the office number using getOfficeNumber()", () => {
      expect(employee.getOfficeNumber()).toBe(403);
    });
    it("Displays the correct role using getRole()", () => {
      expect(employee.getRole()).toBe("Manager");
    });
  });
});
