const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  const field = matrix.map(row => row.map(cell => 0));
  matrix.forEach((row, rowIndex) => row.forEach((ceil, ceilIndex) => {
    if(matrix[rowIndex][ceilIndex]) {
      let startRow = rowIndex - 1 < 0 ? 0 : rowIndex - 1,
          endRow = rowIndex + 1 > matrix.length - 1 ? matrix.length - 1 : rowIndex + 1,
          startCol = ceilIndex - 1 < 0 ? 0 : ceilIndex - 1,
          endCol = ceilIndex + 1 > ceil.length - 1 ? ceil.length - 1 : ceilIndex + 1;
          for(let i = startRow; i <= endRow; i++) {
            for(let j = startCol; j <= endCol; j++) {
              field[i][j]++;
            }
          }
          field[rowIndex][ceilIndex]--;
    }
  }))
  return field;
}

module.exports = {
  minesweeper
};