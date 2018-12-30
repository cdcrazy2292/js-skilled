const chai = require("chai");
const testObj = require("../../src/iqs/findLongestSubString");

describe("Test that function returns the longest substring of unique characters", function() {
  it("should should return 7 for rithmschool", function() {
    let result = testObj.findLongestSubString("rithmschool");
    chai.expect(result).to.eql(7);
  });

  it("should return 8 for the word longestsubstring", function() {
    let result = testObj.findLongestSubString("longestsubstring");
    chai.expect(result).to.eql(8);
  });

  it("should return 1 for bbbbb", function() {
    let result = testObj.findLongestSubString("bbbbb");
    chai.expect(result).to.eql(1);
  });
});
