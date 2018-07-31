/**
 * The filter() method creates a new array with
 * all elements that pass the test implemented
 * by the provided function.
 */

let invalidEntries = 0;

//  private methods and helpers
const isNumber = obj => {
  return obj !== "undefined" && typeof obj === "number" && !isNaN(obj);
};

const filterById = item => {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
};

// Exported Methods

const getWordsGreaterThan = (words, conditional) => {
  return words.filter(word => word.length > conditional);
};

const getElmsSmallerThan = (arr, condition) => {
  return arr.filter(each => {
    if (each < condition) return true;
    return false;
  });
};

const getInvalidEntries = () => invalidEntries;

const getInvalidJSONEntries = arr => {
  return arr.filter(filterById);
};

const filterQuery = (arr, query) => {
  return arr.filter(
    each => each.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
};

module.exports = {
  getWordsGreaterThan: getWordsGreaterThan,
  getElmsSmallerThan: getElmsSmallerThan,
  getInvalidJSONEntries: getInvalidJSONEntries,
  getInvalidEntries: getInvalidEntries,
  filterQuery: filterQuery
};
