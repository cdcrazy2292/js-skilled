const chai = require("chai");
const testObj = require("../../src/recursion/productOfArray");

describe("Testing that function returns the product of all the elements in the array", function() {
  it("should return 6 for [1,2,3]", function() {
    let result = testObj.productOfArray([1, 2, 3]);
    chai.expect(result).to.eql(6);
  });

  it("should return 100", function() {
    let result = testObj.productOfArray([5, 2, 5, 2]);
    chai.expect(result).to.eql(100);
  });
});
