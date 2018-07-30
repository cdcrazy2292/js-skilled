const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayEvery");

describe("array.every() functionality.", () => {
  it("should test that every element in the array passes the same test", () => {
    let result = array.simpleArrayEveryFn();
    expect(result).to.be.true;
  });

  it("should test that it returns false if an element in the array fails the test fn.", () => {
    let result = array.simpleArrayEveryFalseFn();
    expect(result).to.be.false;
  });
});
