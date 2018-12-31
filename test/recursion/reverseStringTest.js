const chai = require("chai");
const testObj = require("../../src/recursion/reverseString");

describe("Testing that a string is reversed recursively", function() {
  it("should return the reversed string for awesome", function() {
    let result = testObj.reverse("awesome");
    chai.expect(result).to.eql("emosewa");
  });
});
