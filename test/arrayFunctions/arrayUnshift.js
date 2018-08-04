const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayUnshift");

describe("array.unshift() functionality.", () => {
  it("should check that fn adds one or more elements to the beginning of the array", () => {
    const testArr = [1, 2, 3];
    const expectedResult = [4, 5, 6, 1, 2, 3];
    const itemsToAdd = [4, 5, 6];
    expect(array.unshiftFn(testArr, itemsToAdd)).to.eql(6);
    expect(testArr).to.eql(expectedResult);
  });
});
