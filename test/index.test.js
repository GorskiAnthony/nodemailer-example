const { expect } = require("chai");
const sendMail = require("../src/sendMail");

describe("MainProject", () => {
  describe("#sendMail", () => {
    it("is a function", () => {
      expect(sendMail.main).to.be.a("function");
    });
  });
});
