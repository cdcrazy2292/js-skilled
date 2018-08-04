/**
 * The some() method tests whether at least one element
 * in the array passes the test implemented by the
 * provided function.
 */

const arraySomeFn = arr => {
  return arr.some(each => each % 2 === 0);
};

const elemExists = (arr, query) => arr.some(each => each === query);

module.exports = {
  arraySomeFn: arraySomeFn,
  elemExists: elemExists
};
