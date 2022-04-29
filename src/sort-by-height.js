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
function sortByHeight(heights) {
  let positions = []
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === -1) positions.push(i);
  }
  let array = heights.filter( item =>  item !== -1).sort ( (a, b) => a - b  );
  positions.forEach( position => array.splice(position, 0, -1));
  return array;
}

module.exports = {
  sortByHeight
};
