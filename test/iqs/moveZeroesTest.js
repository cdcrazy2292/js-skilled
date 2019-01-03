const chai = require("chai");
const testObj = require("../../src/iqs/moveZeroes");

describe("Testing that funtion moves all zeroes to the end of the array", function() {
  it("should put all zeroes at the end", function() {
    let result = testObj.moveZeros([0, 1, 0, 3, 12]);
    chai.expect(result).to.eql([1, 3, 12, 0, 0]);
  });

  it("should ensure elements before zeros are in order", function() {
    let result = testObj.moveZeros([0, 0, 1]);
    chai.expect(result).to.eql([1, 0, 0]);
  });
});
