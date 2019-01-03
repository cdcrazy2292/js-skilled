const maxSum = arr => {
  console.log(arr);
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  console.log(arr);
  let sum = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum < max) {
      sum += arr[i];
    }
    if (sum > max) {
      sum = sum - arr[j];
      j++;
    }
    // console.log(sum);
    if (sum === max) return true;
  }
  return false;
};

module.exports = {
  maxSum: maxSum
};
