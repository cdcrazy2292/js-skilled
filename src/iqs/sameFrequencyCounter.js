const sameFrequencyCounter = (num1, num2) => {
  console.log(num1, num2);
  //  1. convert num,ber to a string or an array since we need to loop[ through it
  let num1Arr = num1.toString().split("");
  let num2Arr = num2.toString().split("");
  let frequency = {};
  let frequency2 = {};
  //  2. capture the number of times a number shows up in the string/arr
  for (let value of num1Arr) {
    value = Number(value);
    frequency[value] = (frequency[value] || 0) + 1;
  }
  for (let value of num2Arr) {
    value = Number(value);
    frequency2[value] = (frequency2[value] || 0) + 1;
  }
  // console.log(frequency, freqency2);
  //  3. compare it the second number
  //  Note: We can sort the numbers and compare if they are equal.
  // console.log(typeof str1, typeof str2);
  // str1 = str1.split("").sort();
  // str2 = str2.split("").sort();

  return Object.keys(frequency).every(value => {
    return frequency[value] === frequency2[value];
  });
  // return str1 === str2;
};

module.exports = {
  sameFrequencyCounter: sameFrequencyCounter
};
