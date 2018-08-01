/**
 * The indexOf() method returns the first index at
 * which a given element can be found in the array,
 *  or -1 if it is not present.
 */

const arrayIndexOfFn = (arr, query, start) => {
  if (!start) start = 0;
  return arr.indexOf(query, start);
};

module.exports = {
  arrayIndexOfFn: arrayIndexOfFn
};
