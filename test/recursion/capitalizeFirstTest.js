const chai = require("chai");
const testObj = require("../../src/recursion/capitalizeFirst");

describe("Testing that function capitalizes the first letter of an array of strings", function() {
  it("should return each word with first letter capitalized", function() {
    let result = testObj.capitalize(["car", "taco", "banana"]);
    chai.expect(result).to.have.members(["CAR", "TACO", "BANANA"]);
  });
});
