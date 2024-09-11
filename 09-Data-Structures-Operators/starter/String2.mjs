'use string';
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

/**
const dfjh = ' slKjF dfS ';

console.log(typeof dfjh);
console.log(dfjh.toLowerCase() + 'hello'); // to removes all uppercases
console.log(dfjh.trim() + 'hello'); // to removes white spaces from beginning and end
*/

function normalizeAuthorName(name) {
  const normalWord = name.trim().toLowerCase();
  console.log(normalWord);
  const indexContributor = normalWord.indexOf('(contributor)'); // returns the index of 'contributor' if exist
  const cleanName = normalWord.slice(0, indexContributor - 1); // to removes 'contributor' at the end of phrases
  console.log(cleanName);

  //   const upperIndexes =
  const str = 'aloha';
 y5 console.log(str.replace(str[0], str[0].toLocaleUpperCase()));
  
}

normalizeAuthorName('  JuliE sussMan (Contributor)');
