/**
 * The every() method tests whether all elements in
 * the array pass the test implemented by the provided function.
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */

const isBelowThreshold = currentValue => {
  return currentValue < 40;
};

const isAboveThreshold = currentValue => {
  return currentValue < 38;
};

const array1 = [1, 30, 39, 29, 10, 13];

const simpleArrayEveryFn = () => {
  return array1.every(isBelowThreshold);
};

const simpleArrayEveryFalseFn = () => {
  return array1.every(isAboveThreshold);
};

module.exports = {
  simpleArrayEveryFn: simpleArrayEveryFn,
  simpleArrayEveryFalseFn: simpleArrayEveryFalseFn
};
