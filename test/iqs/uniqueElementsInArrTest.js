const chai = require("chai");
const testObj = require("../../src/iqs/uniqueElementsInArr");

describe("Test that function returns the number of unique elements in a give array", function() {
  it("should return 6", function() {
    let result = testObj.uniqueElements([1, 3, 1, 5, 3, 5, 2]);
    //Result should be 4
    chai.expect(result).to.eql(4);
  });

  it("should return 6 with another input", function() {
    let result = testObj.uniqueElements([
      0,
      4,
      1,
      0,
      5,
      2,
      2,
      4,
      1,
      1,
      3,
      3,
      5
    ]);
    chai.expect(result).to.eql(6);
  });

  it("should return null for an empty or array less than lenghth of 1", function() {
    let result = testObj.uniqueElements([]);
    chai.expect(result).to.be.null;
  });
});
