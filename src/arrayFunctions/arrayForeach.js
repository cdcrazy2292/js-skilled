/**
 * The forEach() method executes a provided function 
 * once for each array element.
 * There is no way to stop or break a forEach() loop other 
 * than by throwing an exception. If you need such behavior, 
 * the forEach() method is the wrong tool.

Early termination may be accomplished with:

A simple loop
A for...of loop
Array.prototype.every()
Array.prototype.some()
Array.prototype.find()
Array.prototype.findIndex()
The other Array methods: every(), some(), find(), and findIndex() 
test the array elements with a predicate returning a truthy value 
to determine if further iteration is required.
 */

function Counter() {
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function(arr) {
  arr.forEach(each => {
    this.sum += each;
    ++this.count;
    console.log(this.sum);
  }, this);
};

const arrayForEachFn = arr => {
  let copyArr = [];
  arr.forEach(each => copyArr.push(each));
  return copyArr;
};

const adder = arr => {
  const adder = new Counter();
  adder.add(arr);
  return adder;
};

module.exports = {
  arrayForEachFn: arrayForEachFn,
  adder: adder
};
