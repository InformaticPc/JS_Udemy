'use strict';
import { books } from './module';
// // 8.1
// Use the for-of loop to loop over the books array and sum the pages of all books.
// Use the pageSum variable below, and the pages property of the book objects.

let pageSum = 0;

for (const book of books) {
  pageSum += book.pages;
  console.log(`+${book.pages}`);
  console.log(`Pages in total summing: ${pageSum}...`);
}

// 8.2
// Below is the allAuthors variable which stores an empty array.
// Use the for-of loop to fill allAuthors with the authors of each book from the books array.

// Remember that each book object has the author property,
// which can be a string (if there is only a single author)
// or an array (if there are multiple authors).
// You may need to use the typeof operator.
// You can also use multiple loops if needed.
// The allAuthors array should have just one level (no nested arrays).
console.log('###############');
const allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string')
    allAuthors.push(book.author); //if there's only and string (no array)
  //    just push that string
  else allAuthors.push(...book.author); //if is an array/object then use spreadOperator

  console.log(allAuthors);
}

// 8.3
// Use the for-of loop together with Array's entries() method
// to log each author from allAuthors to the console together with its index.
// Make the index start from 1, instead of 0.
for (const [index, author] of Object.entries(allAuthors)) {
  // It can be also as: # allAuthors.entries() #
  //The KEY/VALUE in this object/array
  // is the INDEX/ELEMENT
  console.log(`${parseInt(index) + 1}. ${author}`);
}
