const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let index = 0;
  let result = arr;
  let filtered = arr.filter(x)

  function x(i) {
    if (i !== -1)
      return 1;
  }

  let sortfiltered = filtered.sort(compareNumeric);

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = sortfiltered[index]
      index++;
    }
  }
  return result
}

module.exports = {
  sortByHeight
};
