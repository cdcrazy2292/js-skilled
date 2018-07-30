/**
 * The filter() method creates a new array with
 * all elements that pass the test implemented
 * by the provided function.
 */

const getWordsGreaterThan = (words, conditional) => {
  return words.filter(word => word.length > conditional);
};

module.exports = {
  getWordsGreaterThan: getWordsGreaterThan
};
