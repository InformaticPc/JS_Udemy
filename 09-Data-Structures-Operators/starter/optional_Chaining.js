'use strict';

import { books } from './module';

// Optional Chaining (?.)
// 10.1

// Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.
// Example 1
// Example 2

// Code:

// getFirstKeyword(book[0]);

// Expected output:

// "computer science"

function getFirstKeyword(bookObj) {
  const getFirstKeyword = bookObj.keywords?.[0]; // (?.) checks if keywords property exist
  return getFirstKeyword; // is useful to use it beside nullishCoalescing operator (??)
}

console.log(getFirstKeyword(books[0]));
