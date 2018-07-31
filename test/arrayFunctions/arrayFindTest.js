const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayFind");

describe("array.find() functionality.", () => {
  it("should check that find returns the first element that meets the condition.", () => {
    const expectedResult = 12;
    const testArray = [5, 12, 8, 130, 44];
    const elmToFind = 12;
    let result = array.arrayFindFn(testArray, 10);
    expect(result).to.eql(expectedResult);
  });

  it("Find an object in an array by one of its properties", () => {
    const expectedResult = { name: "cherries", quantity: 5 };
    const testArr = [
      { name: "apples", quantity: 2 },
      { name: "bananas", quantity: 0 },
      { name: "cherries", quantity: 5 }
    ];
    let result = array.findInObj(testArr);
  });

  it("should test that find returns a prime number.", () => {
    const testArr = [4, 5, 8, 12];
    const expectedResult = 5;
    let result = array.findPrime(testArr);
    expect(result).to.eql(expectedResult);
  });
});
