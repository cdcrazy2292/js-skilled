function numberOfWays(arr, k) {
  // Write your code here
  /**
   * [ 1, 5, 3, 3, 3, 5 ] 6
   * 1 + 1
   * check current index and move forward
   * if a pair is found save it to my counter
   *  --- Right now I'm going to do two loops maybe with an iterative solution
   *
   */

  // FIRST ATTEMPT USING BRUTE FORCE
  // let totalCount = 0;
  // arr.forEach((each, index, arr) => {
  //   for (let i = index + 1; i <= arr.length; i++) {
  //     if (each + arr[i] == k) {
  //       totalCount = totalCount + 1;
  //     }
  //   }
  // });

  // SECOND ATTEMPT USING FANCIER METHODS
  // const totalCount = arr.reduce((accumulator, currentValue, index, arr) => {
  //   for (let i = index + 1; i <= arr.length; i++) {
  //     if (currentValue + arr[i] == k) {
  //       accumulator = accumulator + 1;
  //     }
  //   }
  //   return accumulator;
  // }, 0);

  // SOLUTION USING A HASH TABLE

  let totalCount = 0;
  const counterHash = {};
  arr.forEach(each => {
    counterHash[each] = counterHash[each] ? counterHash[each] + 1 : 0 + 1;
  });
  console.log(arr);
  console.log(counterHash);

  arr.forEach(eachArrVal => {
    if (counterHash[k - eachArrVal] == k / 2) {
      totalCount =
        totalCount +
        (counterHash[k - eachArrVal] * (counterHash[k - eachArrVal] - 1)) / 2;
    } else {
      totalCount = totalCount + counterHash[k - eachArrVal];
    }
  });
  console.log("totalCount ==> ", totalCount);
  return totalCount;
}

module.exports = {
  numberOfWays: numberOfWays
};
