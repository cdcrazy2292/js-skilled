/**
 * The find() method returns the value of the first element
 * in the array that satisfies the provided testing
 * function. Otherwise undefined is returned.
 */

const arrayFindFn = (array, elmToFind) => {
  return array.find(elm => elm > elmToFind);
};

const findInObj = arr => {
  arr.find(elm => elm.name === "cherries");
};

const isPrime = elm => {
  let start = 2;
  while (start <= Math.sqrt(elm)) {
    if (elm % start++ < 1) {
      return false;
    }
  }
  return elm > 1;
};

const findPrime = arr => {
  return arr.find(isPrime);
};
module.exports = {
  arrayFindFn: arrayFindFn,
  findInObj: findInObj,
  findPrime: findPrime
};
