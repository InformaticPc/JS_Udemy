'use string';
import { books } from './module.mjs';

const string = 'air lanes damn';

console.log(string.slice(-2));
console.log(string.slice(string.indexOf(' '))); // start from 1st space
console.log(string.slice(string.lastIndexOf(' ') + 1)); // start from last space

// https://codingheroes.io/assignments/working-with-strings-part-1.html
// 15.1
// Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

console.log('1️⃣ ---EXERCISE---1️⃣');
console.log(
  books[0].ISBN[4],
  books[0].ISBN[6],
  books[0].ISBN[8],
  books[0].ISBN[9]
);

// 15.2
// Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
console.log('2️⃣ ---EXERCISE---2️⃣');
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

console.log(quote.indexOf('chess')); // 27
console.log(quote[27]); // c

// 15.3
// Extract the word "boxing" from the same quote string, and log it to the console.

console.log('3️⃣ ---EXERCISE---3️⃣');
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// 15.4
// Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

/* 
Code:
isContributor('Julie Sussman (Contributor)');

Expected output:
true
*/

/* 
Code:
isContributor('Robert Sedgewick');

Expected output:
false
*/
console.log('4️⃣ ---EXERCISE---4️⃣');
const isContributor = function (name) {
  let nameExist = false;
  for (const values of books.values()) {
    if (typeof values.author == 'object') {
      // console.log('AN array ☝️');
      values.author.forEach(names => {
        if (names.indexOf(name) >= 0) {
          nameExist = true;
          names.slice(names.lastIndexOf(' ') + 1) == '(Contributor)'
            ? console.log(
                `In the book: ${values.title}📕 ${names.slice(
                  0,
                  names.lastIndexOf(' ')
                )}, is a Contributor`
              )
            : console.log(
                `In the book: ${values.title}📕 ${names} is NOT a Contributor`
              );
        }
      });
    }
    // values.author.indexOf(name) >= 0 ? (nameExist = true) : null;
    if (values.author.indexOf(name) >= 0) {
      nameExist = true;
      values.author.slice(values.author.lastIndexOf(' ') + 1) == '(Contributor)'
        ? console.log(
            `In the book: ${values.title}📕 ${values.author.slice(
              0,
              values.author.lastIndexOf(' ')
            )}, is a Contributor`
          )
        : console.log(
            `In the book: ${values.title}📕 ${values.author} is NOT a Contributor`
          );
    }
  }
  nameExist
    ? console.log('All books checked succesfully')
    : console.log('⚠️ That name is not registered ⚠️');
};

isContributor('Julie');
