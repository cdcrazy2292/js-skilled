const chai = require("chai");
const testObj = require("../../src/recursion/recursiveRange");

describe("Testing that function returns recursive sum of number passed", function() {
  it("should return 21 for num 6", function() {
    let result = testObj.recursiveRange(6);
    chai.expect(result).to.eql(21);
  });

  it("should return 55 for num 10", function() {
    let result = testObj.recursiveRange(10);
    chai.expect(result).to.eql(55);
  });
});
