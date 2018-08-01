const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayIncludes");

describe("array.includes() functionality.", () => {
  it("should test that we get true if an element is found in the array", () => {
    let testArr1 = [1, 2, 3];
    let testArr2 = ["cat", "dog", "bat"];
    let query1 = 2;
    let query2 = "dog";
    let query3 = "at";
    expect(array.arrayIncludesFn(testArr1, query1)).to.be.true;
    expect(array.arrayIncludesFn(testArr2, query2)).to.be.true;
    expect(array.arrayIncludesFn(testArr2, query3)).to.be.false;
  });
});
