'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  /**FUNCTION WILL ACCEPT INDEX OF  [starterMenu, mainMenu]*/
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

let [one, two] = restaurant.starterMenu;
let [first, , , four] = restaurant.categories; //creating empty reference in the array it will skip those index

console.log(first, four);
console.log(one, two);

// A way to change/swap the order of values
console.log('-------A WAY TO SWAP value CREATING TEMP VARIABLE-------');
const temp = one;
one = two;
two = temp;
console.log(one, two);
//-----------------------------------
// DESTRUCTURING
console.log('-------AFTER DESTRUCTURING swapping reference value-------');
[first, , , four] = [four, , , first];
console.log(first, four);
//-----------------------------------
// DESTRUCTURING FROM METHOD OBJECT
console.log('-------FROM METHOD OBJECT YOU GET THE ARRAY AS OUTPUT-------');
console.log(restaurant.order(0, 2)); // HERE WE GOT AN ARRAY AS OUTPUT
console.log('-------AFTER DESTRUCTURING FROM METHOD OBJECT-------');
const [STARTED, MAIN] = restaurant.order(0, 2); // HERE YOU CREATE TO CONST AT ONECE [CONST STARTED | CONST MAIN]
console.log(STARTED, MAIN);

//-----------------------------------
console.log('-------NESETD ARRAY-------');
const nestedArr = [2, 4, [5, 6]];
const [i, , j] = nestedArr; //THE 2ND INDEX IN ANOTHER ARRAY
console.log(i, j);
console.log('-------DESTRUCTURING NESETD ARRAY-------');
const [x, , [z, y]] = nestedArr;
console.log(i, z, y);
//-----------------------------------
console.log('-------SHORT SUMMARY(check code)-------');
const [a, b, c, d] = [2, 3, 4];
console.log(a, b, c, d); //OUTPUT: 2 3 4 undefined
console.log(
  '-------We can even PREdefine values before we destructe the array-------'
);
const [e = 1, f = 1, g = 1, h = 1] = [2, 3];
console.log(e, f, g, h); //OUTPUT: 2 3 1 1
