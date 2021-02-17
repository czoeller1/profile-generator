const Intern = require("../lib/intern");

describe("Intern class", () => {
  describe("Correctly sets the intern variables", () => {
    let employee = new Intern("Ben", 4, "test@email.com", "DU");
    it("Displays the given name using getName()", () => {
      expect(employee.getName()).toBe("Ben");
    });
    it("Displays the given id using getId()", () => {
      expect(employee.getId()).toBe(4);
    });
    it("Displays the given email using getEmail()", () => {
      expect(employee.getEmail()).toBe("test@email.com");
    });
    it("Displays the intern's school using getSchool()", () => {
      expect(employee.getSchool()).toBe("DU");
    });
    it("Displays the correct role using getRole()", () => {
      expect(employee.getRole()).toBe("Intern");
    });
  });
});
