const chai = require("chai");
const testObj = require("../../src/recursion/isPalindrome");

describe("Testing that a string reads the same forward and backwards", function() {
  it("should read tacocat the same front and backwards", function() {
    let result = testObj.isPalindrome("tacocat");
    chai.expect(result).to.be.true;
  });
  it("should return false for foobar", function() {
    let result = testObj.isPalindrome("foobar");
    chai.expect(result).to.be.false;
  });
});
