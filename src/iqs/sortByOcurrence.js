const lodash = require("lodash");
const sortByOcurrence = arr => {
  /**
   * 1. Create a map that will count the number of occurrences
   * 2.Look at map and place the highest occurrence number first in a new array.
   * **/
  console.log(arr);
  let sortedArr = [];
  let counter = {};
  for (let i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) {
      counter[arr[i]]++;
    } else {
      counter[arr[i]] = 1;
    }
  }
  console.log(counter);
  lodash.forEach(counter, (each, index) => {
    console.log(index, each);
    for (let i = 0; i < Math.max(...Object.values(counter)); i++) {
      sortedArr.push(Number(index));
    }
  });
  console.log(sortedArr);
  return sortedArr;
};

module.exports = {
  sortByOcurrence: sortByOcurrence
};
