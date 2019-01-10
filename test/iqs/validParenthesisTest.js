const chai = require("chai");
const testObj = require("../../src/iqs/validParenthesis");

describe("Should test if a string is valid based on the order of PEMDAS", function() {
  it("should test that a string is valid", function() {
    let result = testObj.isValid("{[()]}");
    chai.expect(result).to.be.true;
  });

  it("should return false for an invalid pattern ", function() {
    let result = testObj.isValid("{[()]}}");
    chai.expect(result).to.be.false;
  });

  it("should return false", function() {
    let result = testObj.isValid("(((((((()");
    chai.expect(result).to.be.false;
  });

  xit("should return true", function() {
    let result = testObj.isValid("()[]{}");
    chai.expect(result).to.be.true;
  });
});
