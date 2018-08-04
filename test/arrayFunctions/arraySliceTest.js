const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arraySlice");

describe("array.slice() functionality.", () => {
  it("should check that fn returns a subarray as indicated by the start and end bounds", () => {
    const testArr = ["ant", "bison", "camel", "duck", "elephant"];
    const expectedResult = ["camel", "duck", "elephant"];
    expect(array.arraySliceFn(testArr, 2, testArr.length)).to.eql(
      expectedResult
    );
  });
});
