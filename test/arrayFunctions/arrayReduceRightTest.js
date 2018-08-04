const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayReduceRight");

describe("array.reduceRight() functionality", () => {
  it("should check that fn returns a flattened array from right to left", () => {
    const testArr = [[0, 1], [2, 3], [4, 5]];
    const expectedResult = [4, 5, 2, 3, 0, 1];
    expect(array.flattenRight(testArr)).to.eql(expectedResult);
  });
});
