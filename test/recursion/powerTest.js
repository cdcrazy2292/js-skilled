const chai = require("chai");
const testObj = require("../../src/recursion/power");

describe("Testing power recursively", function() {
  it("should test that function performs power recursively of 2 ^ 3 and returns 8", function() {
    let result = testObj.power(2, 3);
    chai.expect(result).to.eql(8);
  });

  it("should return 3 ^ 10 as 59049", function() {
    let result = testObj.power(3, 10);
    chai.expect(result).to.eql(59049);
  });
});
