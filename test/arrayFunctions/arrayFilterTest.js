const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayFilter");

describe("array.filter() functionalioty", () => {
  it("should check that we get all words that are grater than 6 characters", () => {
    let expectedResult = ["exuberant", "destruction", "present"];
    let words = [
      "spray",
      "limit",
      "elite",
      "exuberant",
      "destruction",
      "present"
    ];
    ``;
    let result = array.getWordsGreaterThan(words, 6);
    expect(result).to.eql(expectedResult);
  });

  it("shoud check that we get an array with elements smaller than 20", () => {
    const testArr = [14, 22, 56, 4, 7, 19, 20, 90];
    const expectedResult = [14, 4, 7, 19];
    let result = array.getElmsSmallerThan(testArr, 20);
    expect(result).to.eql(expectedResult);
  });

  it("should check that we get invalid entries from JSON.", () => {
    const testArr = [
      { id: 15 },
      { id: -1 },
      { id: 0 },
      { id: 3 },
      { id: 12.2 },
      {},
      { id: null },
      { id: NaN },
      { id: "undefined" }
    ];

    const expectedResult = [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }];
    const expectedInvalidEntries = 5;
    let result = array.getInvalidJSONEntries(testArr);
    expect(result).to.eql(expectedResult);
    expect(array.getInvalidEntries()).to.eql(expectedInvalidEntries);
  });

  it("should check that it returns filtered results.", () => {
    const testArr = ["apple", "banana", "grapes", "mango", "orange"];
    const expectedResult = ["banana", "mango", "orange"];
    const result = array.filterQuery(testArr, "an");
    expect(result).to.eql(expectedResult);
  });
});
