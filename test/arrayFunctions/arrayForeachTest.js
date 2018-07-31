const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayForeach");

describe("array.forEach() functionality,", () => {
  it("should visit every element in the array and copy it to a new one", () => {
    const expectedResult = ["item1", "item2", "item3"];
    const testArr = expectedResult;
    let result = array.arrayForEachFn(testArr);
    expect(result).to.eql(expectedResult);
  });

  it("should test that forEach modifies the traversed object when given the this arg", () => {
    let expectedSum = 16;
    let expectedCount = 3;
    const testArr = [2, 5, 9];
    let result = array.adder(testArr);
    expect(result.sum).to.eql(expectedSum);
    expect(result.count).to.eql(expectedCount);
  });
});
