/**The splice() method changes the contents of an array
 * by removing existing elements and/or adding new elements.
 *
 * array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 *
 * Return value:
 * An array containing the deleted elements. If only one element
 * is removed, an array of one element is returned. If no elements
 * are removed, an empty array is returned.
 * */

const arraySpliceFn = (arr, start, end, items) => {
  return arr.splice(start, end, ...items);
};

module.exports = {
  arraySpliceFn: arraySpliceFn
};
