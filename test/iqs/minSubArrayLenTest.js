const chai = require("chai");
const testObj = require("../../src/iqs/minSubArrayLen");

describe("Testing that function returns the minimun number of subArr Elms that add up to a given number", () => {
  it("should resturn 2", function() {
    let result = testObj.minSubArrLen([2, 3, 1, 2, 4, 3], 7);
    chai.expect(result).to.eql(2);
  });
});
