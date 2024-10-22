'use strict';
import { books } from './module.mjs';

//Working with Strings - Part 2
//https://codingheroes.io/assignments/working-with-strings-part-2.html
// 16.1

// Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

// You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.
/*
Example

Code:
normalizeAuthorName('  JuliE sussMan (Contributor)')

Expected output:
"Julie Sussman"
*/
console.log('=================16.1=================');
/**
 * Function to normalize Names in Pascal case
 * @param {string} name
 */
function normalizeAuthorName(name) {
  const normalWord = name.trim().toLowerCase(); // removes first and last empty spaces ' ' if exist
  console.log('## Remove empty spaces ##');
  console.log(normalWord);
  const indexContributor = normalWord.indexOf('(contributor)'); // returns the index of 'contributor' if exist
  const cleanName = normalWord.slice(0, indexContributor - 1); // to removes 'contributor' at the end of phrases
  console.log('## Removed contributor ##');
  console.log(cleanName);

  // Transform to uppercase each name.
  name = cleanName.replace(cleanName[0], cleanName[0].toLocaleUpperCase());
  console.log('## First name Fixed ##');
  console.log(name); // uppercase 1st character
  const indexSurName = cleanName.indexOf(' ') + 1;
  name = name.replace(name[indexSurName], name[indexSurName].toLocaleUpperCase());
  // uppercase surname
  console.log('## ALL Name fixed ✅ ##');
  console.log(name);
}

normalizeAuthorName('  JuliE sussMan (Contributor)');

// =============================================================================
// 16.2
// Take the title of the second book (books[1]) from the books array,
// and replace the word "Programs" with "Software".
// Assign the new string to the newBookTitle variable.
console.log('=================16.2=================');
console.log(books[1].title);
const newBookTitle = books[1].title.replace('Programs', 'Software');

console.log(newBookTitle);

// =============================================================================
// 16.3
console.log('=================16.3=================');


// Write a function called logBookTheme that takes book's title (string), and logs to the console:
// "This book is about computers" if the title starts with the word "computer",
// "This book is about algorithms and data structures"if the title includes both the "algorithms" and "structures" words, and, 
//"This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".

// tip:
// The title may contain both small and capital letters.
//[X] log all the titles
//[] Put all strings in lower case
/**
 *
 * @param {string} bookTitle
 */
const logBookTheme = function (bookTitle) {
  if (bookTitle.indexOf('computer') == 0) {
    console.log('----FUNCTION----');
    console.log('This book is about computers');
    console.log('----------------');

  }else if(bookTitle.includes('algorithms') && bookTitle.includes('structure')){
    console.log("👆This book is about algorithms and data structures👆")

  }
  if(bookTitle.endsWith('system') && !bookTitle.includes('operating')){
    console.log("👆This book is about some systems, but definitely not about operating systems👆");
  }
};
for (const title of books.values()) {
  console.log(title.title);
  console.log(title.title.endsWith('system'));
  console.log(!title.title.includes('operating'));
  logBookTheme(title.title.toLocaleLowerCase());
}
