const chai = require("chai");
const testObj = require("../../src/iqs/sumToZero");

describe("Testing function that finds first 2 elements that add up to 0", function() {
  it("should return the 2 numbers that add up to zero", function() {
    let result = testObj.sumToZero([-3, -2, -1, 0, 3, 4, 1, 2]);
    chai.expect(result).to.have.members([-2, 2]);
  });

  it("should return null when it's not found", function() {
    let result = testObj.sumToZero([1, 2, -4, 5]);
    chai.expect(result).to.be.null;
  });

  xit("should test a corner case", function() {
    let result = testObj.sumToZero([-2, 2, -8, 0, 8, 3, 9]);
    chai.expect(result).to.have.members([-8, 8]);
  });
});
