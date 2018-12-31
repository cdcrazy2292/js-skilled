const someRecursive = (arr, callback) => {
  console.log(arr, callback);
  let condition;
  function helper(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return helper(arr.slice(1), callback);
  }
  condition = helper(arr, callback);
  return condition;

  //==============================
  //  Other implementation
  // if (array.length === 0) return false;
  // if (callback(array[0])) return true;
  // return someRecursive(array.slice(1), callback);
};

module.exports = {
  someRecursive: someRecursive
};
