/**
 * The shift() method removes the first element from an
 *  array and returns that removed element. This method
 * changes the length of the array.
 */

const arrayShiftFn = arr => {
  let firstName = arr.shift();
  return firstName;
};

module.exports = {
  arrayShiftFn: arrayShiftFn
};
