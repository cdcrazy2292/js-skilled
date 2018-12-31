const chai = require("chai");
const testObj = require("../../src/recursion/factorial");

describe("Testing Factorial recursively", function() {
  it("should return the factorial of 4 as 24", function() {
    let result = testObj.factorial(4);
    chai.expect(result).to.eql(24);
  });

  it("should return 5040 for 7!", function() {
    let result = testObj.factorial(7);
    chai.expect(result).to.eql(5040);
  });
});
