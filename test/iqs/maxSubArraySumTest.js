const chai = require("chai");
const testObj = require("../../src/iqs/maxSubArraySum");

describe("Test that function returns the max subarray sum", function() {
  it("should return the sum as 700", function() {
    let result = testObj.maxSubSum([100, 200, 300, 400], 2);
    chai.expect(result).to.eql(700);
  });

  it("should return 39 as the max sum", function() {
    let result = testObj.maxSubSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
    chai.expect(result).to.eql(39);
  });
});
