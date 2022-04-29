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
function getSumOfDigits( number ) {
  return String(number).length === 1 ? String(number).split('').reduce( (acc, item) => acc+= +item, 0) : getSumOfDigits(String(number).split('').reduce( (acc, item) => acc+= +item, 0));
}

module.exports = {
  getSumOfDigits
};
