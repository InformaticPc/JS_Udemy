'use strict';

import { books } from './module';

// 7.1
// Some of the book objects from the books array are missing the edition property.
// Loop over the books array, and assign this property with a number 1
// (if it doesn't already exist). Use logical assignment operators.
let index = 0;
books.forEach(book => {
  book.edition ||= 1;
  index++;
  console.log(book.title + ' - edition: ' + book.edition);
});

// 7.2
// Some of the book objects from the books array have the highlighted property,
// which by default is set to true.
// Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2,
// reassign it with false.

// Use the &&= operator (tip: you may also need the ! operator)
console.log('##########');
books.forEach(book => {
  //   book.highlighted &&= console.log(`Title: ${book.title}`);
  book.highlighted ?? console.log(`❌Title: ${book.title}❌`); //this checks if 'highlighted property' doesn't exist
  book.highlighted && console.log(`✅Title: ${book.title}✅`); //this checks if CONTAINS (highlighted property)
  //   later it will change the value to false.
  book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);

  console.log(book);
});
