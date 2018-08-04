const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arraySort");

describe("array.sort() functionality.", () => {
  const testArr = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 }
  ];
  it("should check that the obj is sorted based on the objs values", () => {
    const expectedResult = [
      { name: "The", value: -12 },
      { name: "Magnetic", value: 13 },
      { name: "Edward", value: 21 },
      { name: "Sharpe", value: 37 },
      { name: "Zeros", value: 37 },
      { name: "And", value: 45 }
    ];
    expect(array.sortByValue(testArr)).to.eql(expectedResult);
  });

  it("should check that the obj is sorted based on the objs name", () => {
    const expectedResult = [
      { name: "And", value: 45 },
      { name: "Edward", value: 21 },
      { name: "Magnetic", value: 13 },
      { name: "Sharpe", value: 37 },
      { name: "The", value: -12 },
      { name: "Zeros", value: 37 }
    ];
    expect(array.sortByName(testArr)).to.eql(expectedResult);
  });
});
