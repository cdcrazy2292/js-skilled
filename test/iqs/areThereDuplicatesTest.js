const chai = require("chai");
const testObj = require("../../src/iqs/areThereDuplicates");

describe("Testing that function returns true if there are duplicates", function() {
  it("should return true for 1, 2, 3, 2", function() {
    let result = testObj.areThereDupes(1, 2, 3, 2);
    chai.expect(result).to.be.true;
  });

  it("should return false for no duplicates", function() {
    let result = testObj.areThereDupes(1, 2, 3, 4, 5);
    chai.expect(result).to.be.false;
  });

  it("should return true/false with oneLiner solution", function() {
    let result = testObj.oneLiner(1, 2, 3, 2);
    let result2 = testObj.oneLiner(1, 2, 3, 4, 5);
    chai.expect(result).to.be.true;
    chai.expect(result2).to.be.false;
  });
});
