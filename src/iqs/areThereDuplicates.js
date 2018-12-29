const areThereDupes = (...args) => {
  // console.log(args.length);
  let dupes = {};
  //  1. sort the array and check if there are repeated elemets
  //  break as soon as we find one.
  args.sort(); //O(N)
  for (let i = 0; i < args.length; i++) {
    if (dupes[args[i]]) {
      return true;
    } else {
      dupes[args[i]] = 1;
    }
  }
  return false;
};

//Just for the record, there is a one liner solution

const oneLiner = (...args) => {
  return !(new Set(args).size === args.length);
};

module.exports = {
  areThereDupes: areThereDupes,
  oneLiner: oneLiner
};
