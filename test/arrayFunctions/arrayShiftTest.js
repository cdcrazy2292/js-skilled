const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayShift");

describe("array.shift() functionality.", () => {
  it("should test that the first element of the array is removed and returned", () => {
    const testArr = ["Andrew", "Edward", "Paul", "Chris", "John"];
    const afterArr = ["Edward", "Paul", "Chris", "John"];
    const returnedElm = "Andrew";
    expect(array.arrayShiftFn(testArr)).to.eql(returnedElm);
    expect(testArr).to.eql(afterArr);
  });
});
