const chai = require("chai");
const testObj = require("../../src/recursion/fibNthNumber");

describe("Testing that function returns the nth fibonacci number", function() {
  it("should return 3 for nth = 4", function() {
    let result = testObj.fib(4);
    chai.expect(result).to.eql(3);
  });
});
