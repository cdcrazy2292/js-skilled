const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayLastIndexOf");

describe("array.lastIndexOf() functionality", () => {
  it("should check that we get the last index of element in array", () => {
    const testArr = ["Dodo", "Tiger", "Penguin", "Dodo"];
    expect(array.lastIdexOfFn(testArr, "Dodo")).to.eql(3);
    expect(array.lastIdexOfFn(testArr, "Tiger")).to.eql(1);
  });
});
