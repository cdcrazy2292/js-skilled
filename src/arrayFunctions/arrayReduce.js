/**
 * The reduce() method applies a function against an accumulator
 *  and each element in the array (from left to right) to reduce 
 * it to a single value.
 * 
 * Parameters
 * callback
 * Function to execute on each element in the array, taking four arguments:
 
    accumulator
    The accumulator accumulates the callback's return values; it is the accumulated 
    value previously returned in the last invocation of the callback, or initialValue, 
    if supplied (see below).
    
    currentValue
    The current element being processed in the array.
    
    currentIndexOptional
    The index of the current element being processed in the array.
    Starts at index 0, if an initialValue is provided, and at index 1 otherwise.

    arrayOptional
    The array reduce() was called upon.


    initialValueOptional
    Value to use as the first argument to the first call of the callback. 
    If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.
    Link to sectionReturn value


    The value that results from the reduction.
 */

const sumAllElementsInArray = arr => {
  return arr.reduce((acc, curr) => acc + curr);
};

const sumAllElemsTo = arr => {
  return arr.reduce((acc, curr) => acc + curr, 20);
};

const flattenArr = arr => {
  return arr.reduce((acc, curr) => acc.concat(curr));
};

const countElsInArr = arr => {
  return arr.reduce((allNames, name) => {
    if (name in allNames) allNames[name]++;
    else allNames[name] = 1;
    return allNames;
  }, {});
};

const groupBy = (arr, property) => {
  return arr.reduce((acc, obj) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

const getAllBooks = arr => {
  return arr.reduce(
    (acc, curr) => {
      return [...acc, ...curr.books];
    },
    ["Alphabet"]
  );
};

const removeDuplicates = arr => {
  return arr.sort().reduce((acc, curr) => {
    const length = acc.length;
    if (length === 0 || acc[length - 1] !== curr) {
      acc.push(curr);
    }
    return acc;
  }, []);
};

module.exports = {
  sumAllElementsInArray: sumAllElementsInArray,
  sumAllElemsTo: sumAllElemsTo,
  flattenArr: flattenArr,
  countElsInArr: countElsInArr,
  groupBy: groupBy,
  getAllBooks: getAllBooks,
  removeDuplicates: removeDuplicates
};
