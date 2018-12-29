const chai = require("chai");
const testObj = require("../../src/iqs/isSubSequence");

describe("Test that a string is a subsequence of another with order mattering", function() {
  it("should return true for hello and hello world", function() {
    let result = testObj.isSubSeq("hello", "helloWorld");
    chai.expect(result).to.be.true;
  });

  it("should return true for word sing and sting", function() {
    let result = testObj.isSubSeq("sing", "sting");
    chai.expect(result).to.be.true;
  });

  it("should return false for abc and acb", function() {
    let result = testObj.isSubSeq("abc", "acb");
    chai.expect(result).to.be.false;
  });

  it("should return true for abc and abracadabra", function() {
    let result = testObj.isSubSeq("abc", "abracadabra");
    chai.expect(result).to.be.true;
  });
});
