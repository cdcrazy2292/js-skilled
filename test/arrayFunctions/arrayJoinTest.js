const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayJoin");

describe("array.join() functionality.", () => {
  const testArr = ["Fire", "Wind", "Rain"];

  it("should test that it joins elements of an array into a string", () => {
    expect(array.arrayJoinFn(testArr)).to.eql("Fire,Wind,Rain");
  });

  it("should test that elements of array are joined without spaces", () => {
    expect(array.joinTogether(testArr)).to.eql("FireWindRain");
  });

  it("should test that elements of Fire-Wind-Rainarray are joined with dashes", () => {
    expect(array.joinWithDash(testArr)).to.eql("Fire-Wind-Rain");
  });
});
