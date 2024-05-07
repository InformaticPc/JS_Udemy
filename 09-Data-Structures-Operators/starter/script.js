'use strict';
/**
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

    /**FUNCTION WILL ACCEPT INDEX OF  [starterMenu, mainMenu]/
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
*/

/** Below you can find data used in the assignments;
 *     It's an array of books related to computer science, math and business;
 *     Each book is represented by an object;
 *     Missing properties, different data types for same properties or duplicates are intentional;
 *     Copy this data to your code editor, and give yourself some time to familiarize with it before you start working on assignments.
 *      https://codingheroes.io/assignments/destructuring-arrays#1-4
 *     note: Make sure to comment out the code from previous assignments if you continue in the same file. */
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/**DESTRUCTURING ARRAYS */
//Destructure the books array into two variables called firstBook and secondBook
// 1.1
const [firstBook, secondBook] = books;
console.log(firstBook);
console.log('-----------');
console.log(secondBook);

// Destructure the books array into a variable called thirdBook. You must skip the first two books.
// 1.2
console.log('___________________________');
const [, , thirdBook] = books;
console.log('THIRD BOOK:');
console.log(thirdBook);

// Below is the nested ratings array that contains two other arrays.
// Destructure the nested ratings arrays into two variables called rating and ratingsCount.
// In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
// 1.3
console.log('___________________________');
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log('rating: ' + rating);
console.log('ratingCount: ' + ratingsCount);

// Below is the ratingStars array.
// Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings.
// Assign the threeStarRatings variable with a default value of 0.

const ratingStars = [63405, 1808];