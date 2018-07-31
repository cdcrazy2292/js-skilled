const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayFindIndex");

describe("array.findIndex() functionality.", () => {
  it("should check that we get the index of the first found elm in the array.", () => {
    const expectedResult = 3;
    let testArr = [5, 12, 8, 130, 44];
    let result = array.findFirstLargeNumber(testArr, 13);
    expect(result).to.eql(expectedResult);
  });
});
