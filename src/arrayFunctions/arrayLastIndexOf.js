/**
 * The lastIndexOf() method returns the last index at which a
 * given element can be found in the array, or -1 if it is not
 * present. The array is searched backwards, starting at fromIndex.
 */

const lastIndexOfFn = (arr, query) => {
  return arr.lastIndexOf(query);
};

module.exports = {
  lastIdexOfFn: lastIndexOfFn
};
