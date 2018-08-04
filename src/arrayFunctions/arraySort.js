/**
 * The sort() method sorts the elements of an array in place
 * and returns the array. The sort is not necessarily stable.
 * The default sort order is according to string Unicode code points.
 *
 * The time and space complexity of the sort cannot be guaranteed as
 * it is implementation dependent.
 */

const sortByValue = arr => {
  return arr.sort((a, b) => a.value - b.value);
};

const sortByName = arr => {
  return arr.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};
module.exports = {
  sortByValue: sortByValue,
  sortByName: sortByName
};
