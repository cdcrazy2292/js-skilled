const power = (num, exp) => {
  /**
   * we need to mimic the following
   * 2^4 = 2 * 2 * 2 * 2;
   * base case: exp === 0;
   *
   **/
  if (exp === 0) {
    return 1;
  }
  return num * power(num, exp - 1);
};

module.exports = {
  power: power
};
