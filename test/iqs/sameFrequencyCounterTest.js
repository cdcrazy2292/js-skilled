const chai = require("chai");
const testObj = require("../../src/iqs/sameFrequencyCounter");

describe("Test that 2 numbers have the same frequency of digits", function() {
  it("should return true for nums 182 and 821", function() {
    let result = testObj.sameFrequencyCounter(182, 821);
    chai.expect(result).to.be.true;
  });

  it("should return true for more complicated numbers", function() {
    let result = testObj.sameFrequencyCounter(3589578, 5879385);
    chai.expect(result).to.be.true;
  });

  it("should return false for non-matching numbers", function() {
    let result = testObj.sameFrequencyCounter(125, 256);
    chai.expect(result).to.be.false;
  });
});
