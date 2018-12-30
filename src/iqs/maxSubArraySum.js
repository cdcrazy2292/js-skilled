const maxSubSum = (arr, num) => {
  console.log(arr, num);
  let maxSum = 0;
  let tempSum;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

module.exports = {
  maxSubSum: maxSubSum
};
