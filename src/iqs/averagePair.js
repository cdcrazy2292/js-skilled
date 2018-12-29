const averagePair = (arr, num) => {
  /**
   * avg = 8
   * the average is the sum divided by the factors
   * in our case arr[i] + arr[j] / 2 === 8
   *           i
   *  [1,3,3,5,6,7,10,12,19]
   *               j
   * **/
  console.log(arr, num);
  let start = 0;
  let end = arr.length - 1;
  let avg = 0;
  while (start < end) {
    avg = (arr[start] + arr[end]) / 2;

    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }

  return false;
};

module.exports = {
  averagePair: averagePair
};
