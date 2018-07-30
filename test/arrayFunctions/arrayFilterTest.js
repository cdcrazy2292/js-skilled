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
    let result = array.getWordsGreaterThan(words, 6);
    expect(result).to.eql(expectedResult);
  });

  it("", () => {});
});
