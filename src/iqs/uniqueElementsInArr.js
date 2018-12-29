const uniqueElements = arr => {
  //Assuming It's sorted
  arr.sort();
  console.log(arr);
  if (arr.length < 1) {
    return null;
  }
  let i = 0;
  let j = 1;
  while (j + 1 <= arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      arr[i + 1] = arr[j];
      i++;
    }
    // console.log(arr);
  }
  return i + 1;
};

module.exports = {
  uniqueElements: uniqueElements
};
