// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
console.log(x);

/** ======= Small project: CALCULATE PORCETAGE OF TAXES ====== */

// const PERCENTAGE = function (INCOME, TAXES) {
//   const PERCENTAGE = (TAXES / INCOME) * 100;
//   return PERCENTAGE;
// };
// let again = false;
// do {
//   const INCOME = prompt('Tell me your Income salary');
//   const TAXES = prompt('Tell me how much salary taxes takes from you');
//   console.log(`${Math.round(PERCENTAGE(INCOME, TAXES))}%`);
//   const ANSWER = prompt('Do you want to check another percentage? | "yes/no"');
//   if (ANSWER === 'yes') again = true;
//   else again = false;
// } while (again);
/** ============================================================*/

/** ======= Challenge to use the problem solving ====== */
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
// - Create a function which take an array as parameter
// - It will take the array and each element will be a day temperature
// - how to separate elementes by days? ↓
// ► the the amount of element with .lenght
// ► each iteration is a day
// ► check if theres a next elemnt with a condition and + 'string'

function printForecast(arr) {
  let message = '';
  for (let i = 0; i < arr.length; i++) {
    message += `... ${arr[i]}°C in days ${i + 1}... `;
  }
  return message;
}
console.log(printForecast([12, 5, -5, 0, 4]));
/** ============================================================*/
