let readlineSync = require("readline-sync")
/**
 * Takes in an optional length argument and
 * returns a matrix grid of that length filled with null.
 * It should default to length of 3 if no argument is provided.
 * @param {number} length
 * @returns {Array[]}
 */

let makeBoard = () => {};

/**
 * Takes in a row, column, and board and determines whether or not
 * that space is available to be chosen. If the spaces value is null,
 * it is available.
 *
 * @param {number} row
 * @param {number} col
 * @param {Array[]} board
 * @returns {boolean} Is the position valid.
 */
let isValidPosition = () => {};

/**
 * Takes in a row, column, symbol, and board and updates the board to
 * have the symbol at the row / col.
 * Returns the updated board.
 * @param {number} row
 * @param {number} col
 * @param {string} sym
 * @param {Array[]} board
 * @returns {Array[]} Updated board.
 */

let placeMark = () => {};

/**
 * Takes in a board and returns whether or not the board
 * is completely full.
 *
 * @param {Array[]} board
 * @returns {boolean} isBoardFull ?
 */

let isBoardFull = () => {};

/**
 * Takes in a board and determines if there is a
 * horizontal winner. If there is, it should return that winner.
 * Otherwise it should return null.
 *
 * @param {Array[]} board
 * @returns {string|null} Returns either the winner or null.
 */

let horizontalWinnerOrNull = () => {};

/**
 * Takes in a board and determines if there is a
 * vertical winner. If there is, it should return that winner.
 * Otherwise it should return null.
 *
 * @param {Array[]} board
 * @returns {string|null} Returns either the winner or null.
 */

let verticalWinnerOrNull = () => {};

/**
 * Takes in a board and determines if there is a
 * top left down diagonal winner. If there is, it should return that winner.
 * Otherwise it should return null.
 *
 * @param {Array[]} board
 * @returns {string|null} Returns either the winner or null.
 */

let leftDiagonalWinnerOrNull = () => {};
/**
 * Takes in a board and determines if there is a
 * top right down diagonal winner. If there is, it should return that winner.
 * Otherwise it should return null.
 *
 * @param {Array[]} board
 * @returns {string|null} Returns either the winner or null.
 */

let rightDiagonalWinnerOrNull = () => {};

/**
 * Takes in a board and determines wether or not a game
 * is over. If there is a winner return that winner
 * *Hint* Use your winnerOrNull (previous functions) and isBoardFull helper functions
 * to either return the winner, true, or false.
 *
 * @param {Array[]} board
 * @returns {string|boolean} Returns either the winner (truthy),
 * true (which implies a tie), or false (game is NOT over)
 */
let isGameOver = () => {};

/**
 * Takes in a string symbol (either x or o) and returns
 * the opposite.
 * @param {string} sym
 * @returns {string} The opposite symbol
 */
let switchSymbol = () => {};

/**
 * Takes in a row of the board and returns the elements
 * separated by " | ". If the element is null is should be replaced with " "
 * @param {Array} row
 * @returns {string}
 */

let formatRow = () => {};

/**
 * Takes in a board and logs it to the console.
 * It should call your formatRow helper function.
 * Each row should be separated by a line of "-". The
 * length of which should be three times the board length.
 *
 * @param {Array[]} board
 * @returns {undefined} displayBoard is only in charge of logging the board to the console.
 */
let displayBoard = () => {};


/**
 * Asks user for row input and returns row. Use questionInt
 * @returns {number} row (should be 1 lower than user because people count from 1)
 */

 let getRow = () => {};

/**
 * Asks user for col input and returns col.
 * @returns {number} col (should be 1 lower than user because people count from 1)
 */

 let getCol = () => {};

/**
 * Takes in a symbol and a board.
 * Uses the symbol to tell the user it's their turn.
 * calls getRow and getCol.
 * checks to see if that position is valid.
 * If the position is not valid, it should tell the user
 * "Invalid Position" and call itself to retake the turn.
 *
 * If the position is valid, it should mark the board
 * appropriately.
 *
 * @param {string} sym Current users symbol
 * @param {Array[]} board
 * @returns {undefined} Should place mark or call itself again.
 */

let takeTurn = () => {};

/**
 * Uses readline-sync's questionInt to find out how many rows / cols it will have. 
 * Because it's a square only one call should be made. 
 * Should create a symbol variable that starts at value "x"
 * Should create a board variable and call makeBoard. 
 * Should create a gameOver variable and initialize it to false. 
 * 
 * while the game is not over it should:
 * display the board 
 * call takeTurn and switchSymbol
 * 
 * if the game is over is should say the symbol that won like: "x is the winner!"
 * If the game is a tie it should say "Tie Game!"
 * update game over to the result of isGameOver 
 * 
 * When the game is over use readline-sync keyInYN method to ask the user 
 * to play gain. 
 * 
 * If they answer "y" play should call itself, otherwise it 
 * should log "Goodnight!"
 * 
 */
let play = () => {};


module.exports = {
  makeBoard,
  isValidPosition,
  placeMark,
  isBoardFull,
  horizontalWinnerOrNull,
  verticalWinnerOrNull,
  leftDiagonalWinnerOrNull,
  rightDiagonalWinnerOrNull,
  isGameOver,
  switchSymbol,
  formatRow,
  displayBoard,
  getRow,
  getCol,
  takeTurn,
  play,
};
