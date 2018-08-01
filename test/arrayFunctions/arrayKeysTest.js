const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayKeys");

describe("array.keys() functionality", () => {
  it("should test the we get an array Iterator of only the keys of the array", () => {
    let testArr = ["a", "b", "c"];
    expect(array.arrayKeys(testArr)).to.eql([0, 1, 2]);
  });
});
