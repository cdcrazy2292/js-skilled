const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayCopyWithin");

describe("array.copyWithin() functionality", () => {
  it("place at position 0 the element between position 3 and 4", () => {
    let result = array.copyWithinFn();
    expect(result).to.eql([4, 2, 3, 4, 5]);
  });

  it("place at position 1 the elements after position 3", () => {
    let result = array.copyWithinFnTwo();
    expect(result).to.eql([1, 4, 5, 4, 5]);
  });
});
