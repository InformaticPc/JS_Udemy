'use strict';

import { books } from './module';

//Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.

// In the end, the entries array should be filled with arrays containing keys:
/*
[
  ['rating'],
  ['ratingsCount'],
  ['reviewsCount'],
  ['fiveStartRatingCount'],
  ['oneStartRatingCount'],
];
*/

const entries = [];

for (const keys of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([keys]); // understand why putting 'key' as an array '[]' creates subarrays...
}
console.log(entries);

// ... keep learning
