'use strict';
// '...'
/* 
    myFunction(a, ...iterableObj, b)
    [1, ...iterableObj, '4', 'five', 6]
    { ...obj, key: 'value' }
*/
// https://codingheroes.io/assignments/the-spread-operator.html

// 3.1
// Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.
// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).
import { books } from './module';

console.log(books);

const bookAuthors = [...books[0].author, ...books[1].author];

console.log(bookAuthors);

// 3.2
// Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.
/*
Example
Code:

spellWord('JavaScript')
Expected output:

"J a v a S c r i p t"
*/

function spellWord(str) {
  console.log(...str);
}

spellWord('what ever');
//  SPREAD PATTERN NEEDS TO BE AFTER/RIGHT SIDE OF ASSIGNMENT OPERATOR '[] = ...spread '
// REST PATTERN ON THE LEFT SIDE ' ...rest = []'
