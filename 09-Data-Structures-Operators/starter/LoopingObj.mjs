'use strict';

import { books } from './module.mjs';

// https://codingheroes.io/assignments/looping-objects-object-keys-values-and-entries.html
// 11.1
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
  console.log('what is "keys"?: ' + keys);
  entries.push([keys]); // understand why putting 'key' as an array '[]' creates subarrays...x`
}
console.log(`Object.keys(array/obj)`);
console.log(entries);

for (const arrEntries of entries.entries()) {
  console.log(
    `SHOW ME NOW HOW .entries() METHOD LOOKS LIEK IN entries[] array \n ${arrEntries}`
  );
}
for (let index = 0; index < entries.length; index++) {
  const element = entries[index];
}

// 11.2

// The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.

// Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

// Push each value to the appropriate inner array in the entries array (use index from entries()).

console.log('#######################');

for (const [property, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  console.log(`what is property it self?:  ${property}`);
  console.log(`proper= ${entries[property]} value= ${value}`);
  entries[property].push(value);
  console.log(entries[property]);
}

console.log('TEST#######################');
// TO UNDERSTAND BETTER...  STUDY THIS ⚠️⚠️
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// crate const just to store the value of porperty

function explanatoryCode_1() {
  const arryToReturn = [];
  console.log('----------EXPLANATORY CODE 1----------');
  for (const [index, prop, val] of Object.entries(
    books[0].thirdParty.goodreads
  ).entries()) {
    console.log('Entries:');
    console.log('index: ');
    console.log(index);
    console.log('prop: ');
    console.log([prop]);
    console.log('value: ');
    console.log(val);

    arryToReturn.push([prop]);
    console.log(`ARRAY TO RETURN: ${arryToReturn}`);
  }
  console.log('loop FINISHED ------------');
}
function explanatoryCode_2() {
  const arryToReturn = [];
  console.log('----------EXPLANATORY CODE 2----------');
  for (const [prop, value] of Object.entries(books[0].thirdParty.goodreads)) {
    console.log('prop: \n' + prop + '\n value: \n' + value);

    // console.log('value: ' + val);
    // arryToReturn[prop].push(val);
    // console.log(`ARRAY TO RETURN: ${arryToReturn}`);
  }
  console.log('loop FINISHED ------------');
}
explanatoryCode_1();
explanatoryCode_2();
/* OUTPUT:
what is "keys"?: rating
what is "keys"?: ratingsCount
what is "keys"?: reviewsCount
what is "keys"?: fiveStarRatingCount
what is "keys"?: oneStarRatingCount
Object.keys(array/obj)
[
  [ 'rating' ],
  [ 'ratingsCount' ],
  [ 'reviewsCount' ],
  [ 'fiveStarRatingCount' ],
  [ 'oneStarRatingCount' ]
]
SHOW ME NOW HOW .entries() METHOD LOOKS LIEK IN entries[] array
 0,rating
SHOW ME NOW HOW .entries() METHOD LOOKS LIEK IN entries[] array
 1,ratingsCount
SHOW ME NOW HOW .entries() METHOD LOOKS LIEK IN entries[] array
 2,reviewsCount
SHOW ME NOW HOW .entries() METHOD LOOKS LIEK IN entries[] array
 3,fiveStarRatingCount
SHOW ME NOW HOW .entries() METHOD LOOKS LIEK IN entries[] array
 4,oneStarRatingCount
#######################
what is property it self?:  0
proper= rating value= 4.41,545
[ 'rating', [ 4.41, 545 ] ]
what is property it self?:  1
proper= ratingsCount value= 1733
[ 'ratingsCount', 1733 ]
what is property it self?:  2
proper= reviewsCount value= 63
[ 'reviewsCount', 63 ]
what is property it self?:  3
proper= fiveStarRatingCount value= 976
[ 'fiveStarRatingCount', 976 ]
what is property it self?:  4
proper= oneStarRatingCount value= 13
[ 'oneStarRatingCount', 13 ]
TEST#######################
----------EXPLANATORY CODE 1----------
Entries:
index:
0
prop:
[ [ 'rating', [ 4.41, 545 ] ] ]
value:
undefined
ARRAY TO RETURN: rating,4.41,545
Entries:
index:
1
prop:
[ [ 'ratingsCount', 1733 ] ]
value:
undefined
ARRAY TO RETURN: rating,4.41,545,ratingsCount,1733
Entries:
index:
2
prop:
[ [ 'reviewsCount', 63 ] ]
value:
undefined
ARRAY TO RETURN: rating,4.41,545,ratingsCount,1733,reviewsCount,63
Entries:
index:
3
prop:
[ [ 'fiveStarRatingCount', 976 ] ]
value:
undefined
ARRAY TO RETURN: rating,4.41,545,ratingsCount,1733,reviewsCount,63,fiveStarRatingCount,976
Entries:
index:
4
prop:
[ [ 'oneStarRatingCount', 13 ] ]
value:
undefined
ARRAY TO RETURN: rating,4.41,545,ratingsCount,1733,reviewsCount,63,fiveStarRatingCount,976,oneStarRatingCount,13
loop FINISHED ------------
----------EXPLANATORY CODE 2----------
prop:
rating
 value:
4.41,545
prop:
ratingsCount
 value:
1733
prop:
reviewsCount
 value:
63
prop:
fiveStarRatingCount
 value:
976
prop:
oneStarRatingCount
 value:
13
loop FINISHED ------------
*/
/**
 * UNDERSTOOD: SO 'entries[property]'  IS ALREADY AN ARRAY CRATED IN THE 1ST EXERCISE*/
/**
 * 'entries.push([keys])' ADD THE KEYS/PROPERTYNAME AS NEW ARRAYS []
 * TO THE 'entries[]'ARRAY
 */
/**
 * YOU PUSH THEM LIKE NEW EACH ARRAY '[keys]' BECAUSE ON THIS WAY YOU CAN USE '[].PUSH()'
 * METHOD TO ADD NEW ELEMENTS
 * OTHERWISE IT WILL TREAT THE VALUES LIKE STRINGS OR NUMBER AND
 * YOU WON'T BE ABLE TO USE '.PUSH()' METHOD
 */

// 11.3
// Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.
// ...
console.log('### 11.3 ###');
const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);
//
// 11.4
// Log the entries and entries2 variables to the console, and compare them. They should look the same.
// ...
console.log('### 11.4 ###');
console.log(`Entries2: ${entries2} \n ENTRIES: ${entries}`);
j;
