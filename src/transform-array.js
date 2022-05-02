const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  let copyArr = arr.slice();
  for(let i = 0; i < copyArr.length; i++) {
    switch (copyArr[i]) {
      case '--discard-next':
          if (copyArr[i + 2] === '--double-prev' || copyArr[i + 2] === '--discard-prev') {
            copyArr.splice(i, 3);
            i--;
            break;
          } else {
            copyArr[i+1] ? copyArr.splice(i, 2) : copyArr.splice(i, 1);
            i--;
            break;
          }
      case '--discard-prev':
        copyArr[i-1] ? copyArr.splice(i-1, 2) : copyArr.splice(i, 1);
        i < 1 ? i-- : i -= 2;
        break;
      case '--double-next':
          copyArr[i+1] ? copyArr[i] = copyArr[i+1] : copyArr.splice(i, 1);
          break;
      case '--double-prev':
        copyArr[i-1] ? copyArr[i] = copyArr[i-1] : copyArr.splice(i, 1);
        break;
      default: ;
    }
  }
  return copyArr;
}

module.exports = {
  transform
};