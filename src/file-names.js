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
function renameFiles( names ) {
  let amount = 1;
  names.forEach((name, index) => {
    if(index !== names.lastIndexOf(name)) {
      let curIndex = index;
      while (names.indexOf(name, curIndex + 1) !== names.lastIndexOf(name)) {
        curIndex = names.indexOf(name, curIndex + 1);
        names[curIndex] = `${name}(${amount})`;
        amount++;
      }
      names[names.lastIndexOf(name)] = `${name}(${amount})`
    }
    amount = 1;
  })
  return names;
}

module.exports = {
  renameFiles
};