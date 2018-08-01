/**
 * The join() method joins all elements of an array
 * (or an array-like object) into a string and returns
 * this string.
 */

const arrayJoinFn = arr => {
  return arr.join();
};

const joinTogether = arr => {
  return arr.join("");
};

const joinWithDash = arr => {
  return arr.join("-");
};

module.exports = {
  arrayJoinFn: arrayJoinFn,
  joinTogether: joinTogether,
  joinWithDash: joinWithDash
};
