/**
 * The reduceRight() method applies a function against an accumulator
 *  and each value of the array (from right-to-left) to reduce it to
 *  single value.
 */

const flattenRight = arr => {
  return arr.reduceRight((previous, current) => previous.concat(current));
};

module.exports = {
  flattenRight: flattenRight
};
