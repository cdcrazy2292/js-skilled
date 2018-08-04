const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arraySplice");

describe("array.splice functionality.", () => {
  const myFish = ["angel", "clown", "trumpet", "sturgeon"];
  it('should check that fn Removes 2 elements from index 0, and insert "parrot", "anemone" and "blue"', () => {
    let itemsToAdd = ["parrot", "anemone", "blue"];
    let removed = array.arraySpliceFn(myFish, 0, 2, itemsToAdd);
    expect(removed).to.eql(["angel", "clown"]);
    expect(myFish).to.eql(["parrot", "anemone", "blue", "trumpet", "sturgeon"]);
  });
});
