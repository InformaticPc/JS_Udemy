'use strict';
/* const [first, second, ...rest] = array; 

-> must be the last element
function incorrect(a, ...b, c) {} // SyntaxError
const [a, ...b, c] = [1, 2, 3]; // SyntaxError
-> only one rest parameter
function incorrect(...a, ...b) {} // SyntaxError
const [...a, ...b] = [1, 2, 3]; // SyntaxError
*/
import { books } from './module';

// 4.1
// Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest.
// The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

const [mainKeyword, ...rest] = books[0].keywords;
console.log(`The main keywork: ${mainKeyword} and the rest: ${rest}`);
