const isPalindrome = str => {
  function helper(str) {
    if (str.length < 1) return str;
    return helper(str.substring(1)) + str.charAt(0);
  }
  return str === helper(str);
};

module.exports = {
  isPalindrome: isPalindrome
};
