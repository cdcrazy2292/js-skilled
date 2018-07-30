/**
 * The fill() method fills all the elements of an array
 * from a start index to an end index with a static value.
 * The end index is not included.
 */

const fillEveryElmWith = (fillElm, arrLength) => {
  let arr = new Array(arrLength);
  arr.fill(fillElm);
  return arr;
};

const fillEveryElmAfterIndexWith = (fillElm, index, arr) => {
  return arr.fill(fillElm, index);
};

const fillEveryElmWithArrFromStartToEnd = (fillElm, start, end, arr) => {
  return arr.fill(fillElm, start, end);
};

module.exports = {
  fillEveryElmWith: fillEveryElmWith,
  fillEveryElmAfterIndexWith: fillEveryElmAfterIndexWith,
  fillEveryElmWithArrFromStartToEnd: fillEveryElmWithArrFromStartToEnd
};
