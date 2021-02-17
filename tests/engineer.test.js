const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
  describe("Correctly sets the engineer variables", () => {
    let employee = new Engineer("Ben", 4, "test@email.com", "btest");
    it("Displays the given name using getName()", () => {
      expect(employee.getName()).toBe("Ben");
    });
    it("Displays the given id using getId()", () => {
      expect(employee.getId()).toBe(4);
    });
    it("Displays the given email using getEmail()", () => {
      expect(employee.getEmail()).toBe("test@email.com");
    });
    it("Displays the given github username using getGithub()", () => {
      expect(employee.getGithub()).toBe("btest");
    });
    it("Displays the correct role using getRole()", () => {
      expect(employee.getRole()).toBe("Engineer");
    });
  });
});
