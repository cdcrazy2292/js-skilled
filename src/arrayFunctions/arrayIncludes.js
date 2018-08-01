/**
 * The includes() method determines whether an array
 * includes a certain element, returning true or
 * false as appropriate.
 */

const arrayIncludesFn = (arr, query) => {
  return arr.includes(query);
};

module.exports = {
  arrayIncludesFn: arrayIncludesFn
};
