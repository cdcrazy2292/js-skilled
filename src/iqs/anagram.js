const isAnagram = (str1, str2) => {
  console.log(str1, str2);
  //I can sort the string and make sure it's the same thing
  //1. convert to an array
  let word1 = str1.split("").sort();
  let word2 = str2.split("").sort();
  console.log(word1, word2);

  if (word1.every((value, index) => word2[index] === value)) {
    return true;
  }
  return false;
};

module.exports = {
  isAnagram: isAnagram
};
