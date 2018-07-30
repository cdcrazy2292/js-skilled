const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayEntries");

describe("array.entries functionality", () => {
  it("should check that the return value is a n Array iterator containing the key value pairs of thje array", () => {
    let firstIt = [0, "a"];
    let secondIt = [1, "b"];
    let thirdIt = [2, "c"];
    let result = array.arrayEntriesFn();
    expect(result.next().value).to.eqls(firstIt);
    expect(result.next().value).to.eqls(secondIt);
    expect(result.next().value).to.eqls(thirdIt);
  });
});
