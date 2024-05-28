'use strict';

// && and || operant

import { books } from './module';

// 5.1
// Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example

/*
{
  title: 'Algorithms',
  author: ['Robert Sedgewick', 'Kevin Wayne'],
  ...
  programmingLanguage: 'Java',     // <-- HERE
}
*/
// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

// Use short-circuiting
/* 
Code:
hasExamplesInJava(books[0]);

Expected output:
true
*/

function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}
console.log(hasExamplesInJava(books[1]));
console.log('✅=======================⏬');

// EXAMPLE FOR 'OR' OPERATOR
const rest1 = {
  name: 'La pizarra',
  numGuests: 20,
};
const rest2 = {
  name: 'Mama Mia',
  owner: 'Pedro',
};
const rest3 = {
  name: 'Mama Mia',
  owner: 'Pedro',
  numGuests: 0,
};
/**Here you force to create property 'numGuests' if not created
 * and set a default value of 10
 * 'OR' Operator [ ||= ]
 */
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests ||= 10;
rest3.numGuests ??= 10; // WITH || LOGIC OPERATOR '0' WOULD GIVE ME THE SECOND OPTION BUT IN THIS CASE '0' IS TOTALY A TRULY AND POSSIBLE VALUE

console.log('💡=======================💡');
console.log(rest1);
console.log(rest2);
console.log(rest3);
console.log('💡=======================💡');

// 5.2
// Some of the book objects have the onlineContent property, which is either true or false.
// Loop over the books array, and for the books that provide online content,
// log to the console a string in this format: "${title}" provides online content. Use short-circuiting.
/* 
{
    title: 'Operating System Concepts',
    // ... removed for clarity
    onlineContent: false,          // <-- HERE
},
*/
books.forEach(element => {
  element.onlineContent &&
    console.log(`${element.title} provides online content`);
});
console.log('✅=======================⏬');

// NULLISH: NULL AND UNDEFINED (NOT 0 OR "" <- falsy values)
const testting = 0;

const NULLISH = testting ?? 10; // onlyt if testing is NULL/UNDEFINED will return the second evaluation
console.log(NULLISH);

const orOperator = testting || 10;
console.log(orOperator);
