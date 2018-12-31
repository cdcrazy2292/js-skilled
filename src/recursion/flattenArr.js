const flatten = arr => {
  /**
   * 1. create a new array
   * 2. Check each element in the array
   *    if arr[curr] is an element push to new arr
   *    else pass new array to flatten function
   * 3. return the result
   * **/
  console.log(arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;

  //=============================================
  //=====ALMOST Working Solution ================
  // let flatArr = [];
  //
  // function helper(arr) {
  //   console.log(arr, flatArr);
  //   if (arr.length === 0) return arr;
  //   if (typeof arr[0] === "object") {
  //     helper(arr[0]);
  //   }
  //   // if (typeof arr[0] === "number") {
  //   flatArr.push(arr[0]);
  //   helper(arr.slice(1));
  //   // }
  // }
  // helper(arr);
  // return flatArr;
  //============================================
};

module.exports = {
  flatten: flatten
};
