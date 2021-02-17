const Employee = require("../lib/employee");

describe("Employee class", () => {
  describe("Correctly sets the employee variables", () => {
    let employee = new Employee("Ben", 4, "test@email.com");
    it("Displays the given name using getName()", () => {
      expect(employee.getName()).toBe("Ben");
    });
    it("Displays the given id using getId()", () => {
      expect(employee.getId()).toBe(4);
    });
    it("Displays the given email using getEmail()", () => {
      expect(employee.getEmail()).toBe("test@email.com");
    });
    it("Displays the correct role using getRole()", () => {
      expect(employee.getRole()).toBe("Employee");
    });
  });
});
