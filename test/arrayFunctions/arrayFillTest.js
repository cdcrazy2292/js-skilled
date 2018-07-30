const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayFill");

describe("array.fill() functionality", () => {
  it("should test that evey element in the array is 0", () => {
    let expectedResult = [0, 0, 0, 0, 0];
    let result = array.fillEveryElmWith(0, 5);
    expect(result).to.eql(expectedResult);
  });

  it("should check that every  element after the provided one is filled with 4s", () => {
    let expectedResult = [1, 2, 3, 4, 5, 5, 5, 5];
    let testArr = [1, 2, 3, 4, 5, 6, 7, 8];
    let result = array.fillEveryElmAfterIndexWith(5, 4, testArr);
    expect(result).to.eql(expectedResult);
  });

  it("should check that every elm in array is filled with provided one from start to end.", () => {
    let expectedResult = [1, 2, 3, 6, 6, 6, 6, 8];
    let testArr = [1, 2, 3, 4, 5, 6, 7, 8];
    let result = array.fillEveryElmWithArrFromStartToEnd(6, 3, 7, testArr);
    expect(result).to.eql(expectedResult);
  });
});
