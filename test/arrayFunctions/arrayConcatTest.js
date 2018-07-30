const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayConcat");

describe("array.concat() functionality.", () => {
  let expectedResult = [
    ["a", "b", "c", "d", "e", "f", "g", "h"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
  ];
  it("should test that two or more arrays are merged", () => {
    expect(array.arrayConcatFn()).to.eql(expectedResult);
  });

  it("should test the concatenation of nested arrays", () => {
    let expextedResult = [[1], 2, 3, [1, 2]];
    let xptModifiedArray = [[1, 2], 2, 3, [1], 5];
    let nestedCombinedArr = array.arrayConcatNestedFn();
    expect(nestedCombinedArr).to.eql(expextedResult);
    nestedCombinedArr[0].push(2);
    nestedCombinedArr.push(5);
    nestedCombinedArr[3].pop();
    expect(nestedCombinedArr).to.eql(xptModifiedArray);
  });
});
