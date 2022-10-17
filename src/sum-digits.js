const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const str = String(n);
  let sum1 = 0;
  let sumTotal = 0;

  for (let i = 0; i < str.length; i++) {
    const element = Number(str[i]);
    sum1 = sum1 + element;
  }

  let sum1Str = String(sum1);

  for (let i = 0; i < sum1Str.length; i++) {
    const element = Number(sum1Str[i]);
    sumTotal = sumTotal + element;
  }
  return sumTotal
}

module.exports = {
  getSumOfDigits
};
