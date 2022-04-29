const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [];
  [...str].forEach( item => ( !res.length || res[res.length - 1][1] !== item ) ? res.push([1, item]) : res[res.length - 1][0]++)
  return res.reduce( (acc, item) => (item[0] > 1) ? acc += `${item[0]+item[1]}` : acc+=`${item[1]}`, '');
}

module.exports = {
  encodeLine
};
