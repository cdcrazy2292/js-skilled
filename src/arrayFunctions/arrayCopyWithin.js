/**
 * The copyWithin() method shallow copies part of an array to another
 * location in the same array and returns it, without modifying its
 * size.
 * Caution:  The elements where the copy elements were moved to
 * disappear.
 */
const copyWithinFn = () => {
  const arr = [1, 2, 3, 4, 5];
  arr.copyWithin(0, 3, 4);
  return arr;
};

const copyWithinFnTwo = () => {
  const arr = [1, 2, 3, 4, 5];
  arr.copyWithin(1, 3);
  return arr;
};
module.exports = {
  copyWithinFn: copyWithinFn,
  copyWithinFnTwo: copyWithinFnTwo
};
