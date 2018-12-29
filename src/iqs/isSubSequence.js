const isSubSeq = (str1, str2) => {
  /**
   *     i
   *  [h,e,l,l,o]
   *
   *     j
   *  [h,e,l,l,o,W,o,r,l,d ]
   *
   *  if i === j => i++; j++
   *
   *
   * **/

  console.log(str1, str2);
  //  1. loop over the first string and save a copy of its elements
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");
  console.log(str1Arr, str2Arr);
  //  2. loop over the second string and check if the previous obj has the keys in the same order
  let i = 0;
  let j = 0;
  let isSubSeq = false;
  while (i < str1Arr.length && j <= str2Arr.length) {
    if (str1Arr[i] === str2Arr[j]) {
      i++;
      j++;
      isSubSeq = true;
    } else {
      if (j === str2Arr.length - 1) {
        isSubSeq = false;
        break;
      }
      isSubSeq = false;
      j++;
    }
  }
  return isSubSeq;
};

module.exports = {
  isSubSeq: isSubSeq
};
