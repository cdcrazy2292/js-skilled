/**
 * The map() method creates a new array with the results
 * of calling a provided function on every element in the
 * calling array.
 */

const doubleFn = arr => {
  let dblArr = arr.map(each => each * 2);
  return dblArr;
};

const reformat = arr => {
  let formattedArr = arr.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
  });
  return formattedArr;
};

module.exports = {
  doubleFn: doubleFn,
  refomat: reformat
};
