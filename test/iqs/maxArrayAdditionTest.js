const chai = require("chai");
const testObj = require("../../src/iqs/maxArrayAddition");

describe("Testing max Array Addition", function() {
  it("should return true or false if an array has a subset that adds to the max elm of the array", function() {
    let result = testObj.maxSum([1, 2, 3, 100]);
    chai.expect(result).to.be.false;
  });

  it("should return ", function() {
    let result = testObj.maxSum([1, 2, 3, 4]);
    chai.expect(result).to.be.false;
  });

  it("should return true ", function() {
    let result = testObj.maxSum([1, 2, 3, 5, 4]);
    chai.expect(result).to.be.true;
  });

  it("should return true also ", function() {
    let result = testObj.maxSum([10, 20, 30, 40, 100]);
    chai.expect(result).to.be.true;
  });
});
