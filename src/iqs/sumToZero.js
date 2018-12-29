/**
 * We need to find the first pair of numbers that add up to zero
 * We should use the pointers method
 * **/

//This solution is not really working.
const sumToZero = arr => {
  console.log(arr);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return null;
};

module.exports = {
  sumToZero: sumToZero
};
