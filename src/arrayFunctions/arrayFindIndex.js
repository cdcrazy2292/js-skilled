/**
 * The findIndex() method returns the index of the first element
 * in the array that satisfies the provided testing function.
 * Otherwise -1 is returned.
 */

const findFirstLargeNumber = (arr, num) => {
  return arr.findIndex(each => each > num);
};

module.exports = {
  findFirstLargeNumber: findFirstLargeNumber
};
