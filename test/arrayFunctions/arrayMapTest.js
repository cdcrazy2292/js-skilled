const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayMap");

describe("array.map() functionality.", () => {
  it("should return an array with the double of each element in the array", () => {
    let testArr = [1, 4, 9];
    expect(array.doubleFn(testArr)).to.eql([2, 8, 18]);
  });

  it("it should return a reformatted obj", () => {
    let testArr = [
      { key: 1, value: 10 },
      { key: 2, value: 20 },
      { key: 3, value: 30 }
    ];
    let expectedResult = [{ 1: 10 }, { 2: 20 }, { 3: 30 }];
    expect(array.refomat(testArr)).to.eql(expectedResult);
  });
});
