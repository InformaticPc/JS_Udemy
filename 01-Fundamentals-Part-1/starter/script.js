let js = 'amazing';
// if (js === 'amazing') alert('Enjoy JavaScript!');

console.log(typeof true);// print the type 

let saryAge = 1996;
let adayAge = 1997;

let year = 2023;
saryAge = year - saryAge;
adayAge = year - adayAge;
console.log(saryAge > adayAge);

// TYPE COERTION
const age = 18;
if (age === 18)//'===' is for compare exactly the value and type
    console.log('You are an adult (strict)');
// '!==' strict negative
if (age == '18') console.log('This is makin type coertion (loose). covert "string" number to a "integer"')  //'==' this make type coertion so is gona change the string to a number
// '!=' loose negative comparation
// AVOID LOOSE COMPARATION

// ***const favoNumber = Number(prompt('Whats your favourite number?'));//This funtion return a String
/* to convert to number: 
* Number( prompt('Whats your favourite number?'))
*/
// ***console.warn('Your favourite number is: ' + '(' + typeof favoNumber + ') ' + favoNumber);

// ----------------

const BILL = 250;
let tip = 300 > BILL || BILL > 50 ? (BILL*15)/100 : (BILL*20)/100;
console.log("tip: "+typeof(tip) + " / BILL: "+ typeof(BILL));
console.log(BILL+tip);
console.log("The bill was " + BILL + ", the tip was " + tip + ", and the total value " + (BILL+ tip));