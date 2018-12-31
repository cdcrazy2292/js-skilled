const reverse = str => {
  /**
   * Need to reverse the string.
   * **/
  if (str.length < 1) return str;
  return reverse(str.substring(1)) + str.charAt(0);
};

module.exports = {
  reverse: reverse
};
