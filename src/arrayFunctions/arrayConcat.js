/**
 * The concat method is used to
 * merge 2 or more arrays. This method does not change the arrays
 * but instead returns a new one
 */

const arrayConcatFn = () => {
  const arrOne = ["a", "b", "c", "d"];
  const arrTwo = ["e", "f", "g", "h"];
  const arrThree = ["i", "j", "k", "l"];
  const mergedArray = arrOne.concat(arrTwo);
  const moreThanTwoMerge = arrOne.concat(arrTwo, arrThree);

  return [mergedArray, moreThanTwoMerge];
};

const arrayConcatNestedFn = () => {
  const arrOne = [[1]];
  const arrTwo = [2, 3];
  const arrThree = [[1, 2]];
  let mergedArray = arrOne.concat(arrTwo, arrThree);
  return mergedArray;
};

module.exports = {
  arrayConcatFn: arrayConcatFn,
  arrayConcatNestedFn: arrayConcatNestedFn
};
