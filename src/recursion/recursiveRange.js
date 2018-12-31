const recursiveRange = num => {
  console.log(num);
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};

module.exports = {
  recursiveRange: recursiveRange
};
