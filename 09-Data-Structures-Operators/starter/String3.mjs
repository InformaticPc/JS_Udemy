'use strict';
// https://codingheroes.io/assignments/working-with-strings-part-3.html
import { books } from "./module.mjs";
/* 
17.1

Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

### Code:

const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
logBookCategories(bookCategories);

### Expected output:

science
computing
computer science
algorithms
business
operating systems
networking
electronics
*/
console.log('=================17.1=================');
const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
logBookCategories(bookCategories);

/**
 * 
 * @param {string} book 
 */
function logBookCategories(book) {
    const categoryArray = book.split(';');
    console.log(categoryArray.join('\n'));
}

/* 
17.2

Now, the opposite. Each book from the books array has the 'keywords' property.

Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

### Code:

getKeywordsAsString(books);

### Expected output:

computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development
*/
console.log('=================17.2=================');
getKeywordsAsString(books);
/**@param {books} params */
function getKeywordsAsString(params) {
    const noDuplicates = new Set();
    const keyWords =[];
    params.forEach(book => {
        keyWords.push(...book.keywords)
        // console.log(fullArray);

    });
    const uniqueKeywords = [...new Set(keyWords)];
    console.log(uniqueKeywords.join(';'));

}

/* 
17.3﻿

Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).

Use the padEnd method.

### Code:

const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
logBookChapters(bookChapters);

### Expected output:

The Basics__________ 14
Sorting_____________ 254
Searching___________ 372
Graphs______________ 526
Strings_____________ 706
*/

