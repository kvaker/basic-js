const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrDigits = String(n)
  let arr = [];

  for (let i = 0; i < arrDigits.length; i++) {
    arr.push(+(arrDigits.slice(0, i) + arrDigits.slice(i + 1)));
  }

  return Math.max(...arr)
}


module.exports = {
  deleteDigit
};
