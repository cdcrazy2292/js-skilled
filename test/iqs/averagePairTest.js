const chai = require("chai");
const testObj = require("../../src/iqs/averagePair");

describe("Testing that a pair of elms in an array produce the desired average", function() {
  it("should return true for desired average 8", function() {
    let result = testObj.averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
    chai.expect(result).to.be.true;
  });
});
