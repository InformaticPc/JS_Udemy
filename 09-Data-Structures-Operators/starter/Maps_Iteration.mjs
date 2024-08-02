'use strict';
// https://codingheroes.io/assignments/maps-iteration.html
import { books } from './module.mjs';

// 14.1
// Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
const firstBookMap = new Map(Object.entries(books[0]));

console.log(firstBookMap);

// 14.2
// Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

for (const [keys, value] of firstBookMap.entries()) {
  'number' === typeof value && console.log(keys);
}
