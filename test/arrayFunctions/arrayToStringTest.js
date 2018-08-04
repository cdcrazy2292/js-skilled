const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayToString");

describe("array.toString() functionality.", () => {
  it("should check that fn returns a string representation of the array", () => {
    const teastArr = [1, 2, "a", "1a"];
    const expectedResult = "1,2,a,1a";
    expect(array.toStringFn(teastArr)).to.eql(expectedResult);
  });
});
