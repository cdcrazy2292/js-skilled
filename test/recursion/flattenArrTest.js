const chai = require("chai");
const testObj = require("../../src/recursion/flattenArr");

describe("Testing that function flattens an array", function() {
  it("should flatten [1,[2,3], 4] to [1,2,3,4]", function() {
    let result = testObj.flatten([1, [2, 3], 4]);
    chai.expect(result).to.have.members([1, 2, 3, 4]);
  });

  it("should test [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]", function() {
    let result = testObj.flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
    chai.expect(result).to.have.members([1, 2, 3]);
  });
});
