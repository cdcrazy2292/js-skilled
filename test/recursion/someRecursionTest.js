const chai = require("chai");
const testObj = require("../../src/recursion/someRecursion");

describe("Should return true after single true result when calling a callback func", function() {
  const isOdd = val => val % 2 !== 0;
  const isGreaterThan = val => val > 10;

  it("should return true for a single odd number", function() {
    let result = testObj.someRecursive([1, 2, 3, 4], isOdd);
    chai.expect(result).to.be.true;
  });

  it("should return true for odd number at the end ", function() {
    let result = testObj.someRecursive([2, 4, 6, 8, 9], isOdd);
    chai.expect(result).to.be.true;
  });

  it("should return false for even numbers array", function() {
    let result = testObj.someRecursive([2, 4], isOdd);
    chai.expect(result).to.be.false;
  });

  it("should work with greater than function and return false for > 10 ", function() {
    let result = testObj.someRecursive([6, 8, 9], isGreaterThan);
    chai.expect(result).to.be.false;
  });

  it("should work with greater than function and return true for > 10 ", function() {
    let result = testObj.someRecursive([6, 8, 11], isGreaterThan);
    chai.expect(result).to.be.true;
  });
});
