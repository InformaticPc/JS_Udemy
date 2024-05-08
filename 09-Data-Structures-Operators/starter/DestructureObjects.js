'use strict';

/**
 
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
    year: '2011',
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
// 2.1 BASIC DESTRUCTURE OBJECT
// Destructure the first book object from the books array into variables called title, author and ISBN.

const { title, author, ISBN } = books[0]; //to take the desired properties only need to call by his property name
console.log(`Title: ${title} Author: ${author} ISBN: ${ISBN}`);

// 2.2 GIVE DIFF PROPERTY NAME
// Each book object has the keywords property.
// Destructure the first book object from the books array into a variable called tags.
// The tags variable should be assigned with the value of the keywords property.
console.log('__________________________');
const { keywords: tags } = books[0]; //to copy the property value and give a diff variable name
console.log(tags);

// 2.3 Default value
// The seventh book from the books array is missing the programmingLanguage property.
// Destructure the seventh book object (books[6]) into variables called language and programmingLanguage.
// Assign the programmingLanguage variable with a default value of 'unknown'.
console.log('__________________________');
const { title: CAPTION, language, programmingLanguage = 'unknow' } = books[6];
console.log(
  `Title: ${CAPTION} language: ${language} programmingLanguage: ${programmingLanguage}`
);

// 2.4 Reassign Objects ' ({})= x '
// Below are two variables called bookTitle and bookAuthor.
// Reassign them with the values of the title and author properties of the first book object from the books array.

console.log('__________________________');
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle } = books[0]); // ⚠️need to envolved by parentesis cause '{}' means a code block and code block can't be assign to anything so: '({})'⚠️
({ author: bookAuthor } = books[0]);
console.log(`Reassign title: ${bookTitle} and Author: ${bookAuthor}`);

// 2.5 NESTED OBJECTS
// Each book object has a deeply nested rating property as illustrated below:
/*
{
  title: 'Algorithms',
  ...
  thirdParty: {
    goodreads: {
      rating: 4.41,              // <-- HERE
      ratingsCount: 1733,
      reviewsCount: 63,
      fiveStarRatingCount: 976,
      oneStarRatingCount: 13
    }
  }
},
*/
// Destructure the first book object from the books array into a variable called bookRating.
// In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

// Please do most of the work on the left side of the assignment operator: const ... = books[0];
console.log('__________________________');
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

// 2.6
// Write a function called printBookInfo that has three parameters called title, author and year.
// This function should work for a single object passed as an argument,
// and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

console.log('__________________________');
/*
Code:
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

Expected output:
"Algorithms by Robert Sedgewick, 2011" 
*/

/*
Code (missing year):
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

Expected output:
"Algorithms by Robert Sedgewick, year unknown"
*/
function printBookInfo(OBJ) {
  const { title, author, year = 'year unknown' } = OBJ;
  console.log(`${title} by ${author}, ${year} `);
}

printBookInfo(books[books.length - 1]);
