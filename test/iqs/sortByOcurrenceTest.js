const chai = require("chai");
const testObj = require("../../src/iqs/sortByOcurrence");

describe("Testing sorting by ocurrence", function() {
  it("should test array [1, 2, 3, 1, 1, 4, 2]", function() {
    let result = testObj.sortByOcurrence([1, 2, 3, 1, 1, 4, 2]);
    chai.expect(result).to.have.members([1, 1, 1, 2, 2, 3, 4]);
  });

  it("should test array ", function() {
    let result = testObj.sortByOcurrence([1, 2, 3, 1, 4, 4, 4, 4, 2]);
    chai.expect(result).to.equal([4, 4, 4, 4, 1, 1, 2, 2, 3]);
  });
});
