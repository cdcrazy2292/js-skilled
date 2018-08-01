const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayIndexOf");

describe("array.indexOf() functionality", () => {
  it("should return the index of an element in the array if it is found", () => {
    let testArr = ["ant", "bison", "camel", "duck", "bison"];
    expect(array.arrayIndexOfFn(testArr, "bison")).to.eql(1);
    expect(array.arrayIndexOfFn(testArr, "bison", 2)).to.eql(4);
    expect(array.arrayIndexOfFn(testArr, "bird")).to.eql(-1);
  });
});
