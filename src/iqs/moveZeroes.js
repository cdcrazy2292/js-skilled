const moveZeros = arr => {
  /**
   * 1. We loop through the array and look for zeros
   * 2. When we find a zero, we keep track of its index and shift every elm left
   * 3. Keep looking for zeros and repeat step 2
   * **/
  console.log(arr);
  let zeroIndex = 0;
  let initialLength = arr.length;
  for (let i = 0; i < initialLength; i++) {
    if (arr[i] === 0) {
      zeroIndex++;
      arr.splice(i, 1);
      i--;
    }
    console.log(zeroIndex);
  }

  for (let i = 0; i < zeroIndex; i++) {
    arr.push(0);
  }
  console.log("final arr", arr);
  return arr;
};
module.exports = {
  moveZeros: moveZeros
};
