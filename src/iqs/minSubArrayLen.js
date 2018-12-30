const minSubArrLen = (arr, num) => {
  /**
   *
   * **/

  console.log(arr, num);
  let subSum = 0;
  let elmCounter = Infinity;
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (arr[i] === num) return 1;
    if (subSum < num && j < arr.length) {
      subSum += arr[j];
      j++;
    } else if (subSum >= num) {
      elmCounter = Math.min(elmCounter, j - i);
      subSum -= arr[i];
      i++;
    } else {
      break;
    }
  }
  return elmCounter === Infinity ? 0 : elmCounter;
};

module.exports = {
  minSubArrLen: minSubArrLen
};
