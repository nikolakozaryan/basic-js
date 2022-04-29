const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;
    for (let item of arr) {
      let counter = 1;
      (Array.isArray(item)) ? counter += this.calculateDepth(item) : 1;
      if (counter > max) max = counter;
    }
    return max;
  }
}

module.exports = {
  DepthCalculator
};
