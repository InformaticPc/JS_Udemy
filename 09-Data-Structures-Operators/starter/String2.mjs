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

function normalizeAuthorName(name) {
  const normalWord = name.trim().toLowerCase(); // removes first and last empty spaces ' ' if exist
  console.log(normalWord);
  const indexContributor = normalWord.indexOf('(contributor)'); // returns the index of 'contributor' if exist
  const cleanName = normalWord.slice(0, indexContributor - 1); // to removes 'contributor' at the end of phrases
  console.log(cleanName);

  // Transform to uppercase each name.
  name = cleanName.replace(cleanName[0], cleanName[0].toLocaleUpperCase());
  console.log(name); // uppercase 1st character
  const indexSurName = cleanName.indexOf(' ') + 1;
  name = name.replace(name[indexSurName], name[indexSurName].toLocaleUpperCase());
  // uppercase 2nd character
  console.log(name);
}

normalizeAuthorName('  JuliE sussMan (Contributor)');
