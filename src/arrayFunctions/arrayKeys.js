/**
 * The keys() method returns a new Array Iterator object
 *  that contains the keys for each index in the array.
 */

const arrayKeys = arr => {
  let keysArr = [];
  let iterator = arr.keys();
  //   The below for loop can be done with the spread operator
  //   for (let key of iterator) {
  //     keysArr.push(key);
  //   }
  keysArr = [...iterator];
  return keysArr;
};

module.exports = {
  arrayKeys: arrayKeys
};
