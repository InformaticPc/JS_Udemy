'use strict';
// Coding Challenge #4 Modififying value in textarea element - IN PROCESS

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea

THIS TEST DATA (pasted to textarea)
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

SRC:
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

*/
// [x] Mind the spaces.
// [x] Could be more than one underScore '_'.
// [x] Create textArea.
// [x] Create a buttom.
// [x] Take the text and conver to array if there is more than one line inserted '\n'.
// [x] Make the function of that button to use a function 'toCamelCase' and modify the values inside textarea with the value returned (REMEMBER IS AN ARRAY). 
// [x] Need to check how to submit the the text typed by user to the textarea. (which one is the property or atrivute to retrieve the value from textarea).
// [x] SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅ etc...


const button = document.getElementById('fixNames-BTN');
console.log(button);


/**
 * Funtion that takes an array of strings of underscore_case
 * convert them to camelCase and
 * return an Array with the correction.
 * @param {Array} array 
 * @returns Array with the new good strings in camelCase.
 * @author InformaticPC
 */

function toCamelCase(array) {
    const goodArray = [];
    array.forEach((name, index) => {
    // place them to lower case and separate words by '_'.
        let nameArray = name.toLowerCase().split('_');

        console.log(nameArray+ ' Array name');

    // Capitalize the first character from the second element in each array
        for (let i = 1; i < nameArray.length; i++) {
            console.log(nameArray[i] + '====== to change');
            nameArray[i] = nameArray[i].replace(nameArray[i][0], nameArray[i][0].toUpperCase());
        }
        // join all the array as each string and fix the spaces.
        // add the end pad to stylus as wanted.
        // push it to the new array.
        goodArray.push(nameArray.join('').trim().padEnd(20, ' ').padEnd(20+1+index, '✅'));
        console.log(index + ' ' + goodArray[index].padEnd(20, ' ').padEnd(20+1+index, '✅'));
        

    });
    return goodArray;
}

// Button EVENT
// take the text and conver to array if there is more than one line inserted '\n'.
// Need to create the variables of the text area here, otherwise it will not
// take the value from textarea after the button is clicked.
button.addEventListener('click', () => {
    console.log('Button clicked!');
    const textArea = document.getElementById("namesScored");
    
    const textAreaValue = textArea.value;
    if (textAreaValue === '') {
        return alert('Please insert some text');        
    }
    
    const textAreaArray = textAreaValue.split('\n');
    console.log(textAreaArray);
    textArea.value = toCamelCase(textAreaArray).join('\n');

});
