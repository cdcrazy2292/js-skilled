const capitalize = arr => {
  /**
   * 1. create a new array
   * 2. loop through array and capitalize each string
   * **/
  // console.log(arr);
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalize(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
};

module.exports = {
  capitalize: capitalize
};
