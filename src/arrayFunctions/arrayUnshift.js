/**
 * The unshift() method adds one or more elements to the
 * beginning of an array and returns the new length of the array.
 *
 * Return value:
 * The new length property of the object upon which the method was called.
 */

const unshiftFn = (arr, items) => {
  return arr.unshift(...items);
};

module.exports = {
  unshiftFn: unshiftFn
};
