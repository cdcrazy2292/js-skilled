const chai = require("chai");
const testObj = require("../../src/iqs/maxSumInArray");

describe("Testing subarray that returns the max sum when given an array and a random sum number", function() {
  it("should return 19", function() {
    let result = testObj.maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
    chai.expect(result).to.eql(19);
  });
});
