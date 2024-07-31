'use strict';

import { books } from './module.mjs';

const mySetString = new Set('hello');
console.log(mySetString);
// OUTPUT: Set(4) { 'h', 'e', 'l', 'o' }

//12.1

// Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

// Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

console.log('1️⃣ -------EXERCISE---------1️⃣ ');
const allKeywords = [];
for (const elementKeyword of books) {
  allKeywords.push(...elementKeyword?.keywords); // CHECKS IF 'keywords' PROPERTY EXIST [OPTIONAL CHAINING]
  console.log(allKeywords);
}

// 12.2
// The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

const uniqueKeywords = new Set(allKeywords);
console.log('2️⃣ -------EXERCISE---------2️⃣ ');
console.log(uniqueKeywords);

// 12.4
// Delete 'business' from the uniqueKeywords set.
console.log('3️⃣ -------EXERCISE---------3️⃣ ');
uniqueKeywords.delete('business');
console.log(uniqueKeywords);

// 12.5
// Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
console.log('4️⃣ -------EXERCISE---------4️⃣ ');
const anotherArray = [2, 3, 5, 532];
uniqueKeywords.add(anotherArray);
console.log(uniqueKeywords);
//12.6
// Delete all items from the uniqueKeywords set.
console.log('5️⃣ -------EXERCISE---------5️⃣ ');
uniqueKeywords.clear();
console.log(uniqueKeywords);
