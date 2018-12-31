const productOfArray = arr => {
  console.log(arr);
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

module.exports = {
  productOfArray: productOfArray
};
