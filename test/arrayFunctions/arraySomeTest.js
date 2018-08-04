const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arraySome");

describe("array.some() functionality", () => {
  it("should check that at least one element in the array is even", () => {
    const testArr = [1, 2, 3, 4, 5];
    expect(array.arraySomeFn(testArr)).to.be.true;
  });

  it("should test that given elemeng exists in array", () => {
    const testArr = ["apple", "banana", "mango", "guava"];
    expect(array.elemExists(testArr, "guava")).to.be.true;
  });
});
