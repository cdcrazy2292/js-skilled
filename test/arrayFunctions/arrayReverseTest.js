const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayReverse");

describe("array.reverse() functionality.", () => {
  it("should check that fn returns a reversed array", () => {
    const testArr = ["one", "two", "three"];
    const expectedResult = ["three", "two", "one"];
    expect(array.arrayReverseFn(testArr)).to.eql(expectedResult);
  });
});
