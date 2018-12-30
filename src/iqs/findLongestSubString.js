const findLongestSubString = str => {
  /**
   *
   * create a map that contains the character, if it repeats then that's it.
   ***/

  console.log(str);

  let seen = {};
  let j = 0;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      j = Math.max(j, seen[str[i]]);
    }
    longest = Math.max(longest, i - j + 1);
    seen[str[i]] = i + 1;
  }

  console.log(longest);
  console.log(seen);

  return longest;
};

module.exports = {
  findLongestSubString: findLongestSubString
};
