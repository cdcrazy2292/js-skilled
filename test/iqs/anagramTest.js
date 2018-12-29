const _c = require("chai");
const testObj = require("../../src/iqs/anagram");

describe("Testing Anagram function", () => {
  let result;
  beforeEach(() => {
    result = null;
  });
  it("should test that word is an anagram", () => {
    result = testObj.isAnagram("anagram", "margana");
    _c.expect(result).to.be.true;
  });
  it("should return false for a word that is not an anagram", function() {
    result = testObj.isAnagram("hello", "hola");
    _c.expect(result).to.be.false;
  });
});
