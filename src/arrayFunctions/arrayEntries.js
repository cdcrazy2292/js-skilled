/**
 * The entries() method returns a new Array Iterator object
 * that contains the key/value pairs for each index in the array.
 * However we need to watch out because it returns a new obj containing
 * new information that can be accessed through .next()
 */

const arrayEntriesFn = () => {
  let array = ["a", "b", "c"];
  let iterator = array.entries();
  return iterator;
};

module.exports = {
  arrayEntriesFn: arrayEntriesFn
};
