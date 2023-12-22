const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const count = {};
  for (let i = 0; i < names.length; i++) {
    if (result.includes(names[i])) {
      if (count[names[i]] === undefined) {
        count[names[i]] = 1;
      } else {
        count[names[i]]++;
      }
      const newName = `${names[i]}(${count[names[i]]})`;
      result.push(newName);
      count[newName] = 0;
    } else {
      result.push(names[i]);
      count[names[i]] = 0;
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
