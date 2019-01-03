const isValid = str => {
  // console.log(str);
  if (str.length === 0) return true;
  let counterArr = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (let i = 0; i < str.length; i++) {
    counterArr.push(str[i]);
    if (i > 0) {
      if (map[str[i]] === counterArr[counterArr.length - 2]) {
        console.info(counterArr);
        counterArr.pop();
        counterArr.pop();
        console.log("popping");
        console.log(str[i], counterArr);
      }
    } else {
      if (map[str[i]] === counterArr[counterArr.length - 1]) {
        console.info(counterArr);
        counterArr.pop();
        counterArr.pop();
        console.log("popping");
        console.log(str[i], counterArr);
      }
    }
    console.log(str[i], counterArr.length);
  }

  return counterArr.length === 0;
};

module.exports = {
  isValid: isValid
};
