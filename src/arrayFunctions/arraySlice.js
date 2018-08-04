/**
 * The slice() method returns a shallow copy of a portion
 * of an array into a new array object selected from begin
 * to end (end not included). The original array will not be modified.
 */

const arraySliceFn = (arr, start, end) => {
  return arr.slice(start, end);
};

module.exports = {
  arraySliceFn: arraySliceFn
};
