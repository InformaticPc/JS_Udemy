'use strict';
/*
document.querySelector('.message').textContent = 'New content 😁'; // Modify the content of class 'message'
document.querySelector('.guess').value = 18;
console.log(document.querySelector('.guess').value);
*/
/**Create new random number */
const rdmNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
/**Function to refactoring code for textContent property
 * @param classname You need to put the class name without '.' access that you want refer to
 * @param message The message you want to set. Use "" if is an string not refered to a variable
 */
const DISPLAY_TEXCONTENT = function (classname, message) {
  document.querySelector(`.${classname}`).textContent = `${message}`;
};

let guess = false; // true if user guess the number so make new one
let numToGuess = rdmNumber();
let highScore = 0;

/**Reset everything execept 'Higscore' */
function reset() {
  DISPLAY_TEXCONTENT('number', '?');
  DISPLAY_TEXCONTENT('message', 'Start guessing...');
  document.querySelector('.guess').value = '';
  DISPLAY_TEXCONTENT('score', 20);
  document.querySelector('.number').style.backgroundColor =
    'white'; /**change background color / change fontcolor*/
  document.querySelector('.number').style.color = 'black';
  document.querySelector('body').style.backgroundColor = 'black';
}
/**Function to guess again reseting everything except the highest score that you have gotten */
function again() {
  reset();
  // document.querySelector('.highscore').textContent = highScore;
  DISPLAY_TEXCONTENT('highscore', highScore);
  numToGuess = rdmNumber();
}

/**'Check button' starts the program,
 * checks if the number is same as the random
 */
function check() {
  let sc = Number.parseInt(document.querySelector('.score').textContent);

  if (sc <= 0) {
    // document.querySelector('.message').textContent = `💥YOU LOST THE GAME💥`;
    DISPLAY_TEXCONTENT('message', '💥YOU LOST THE GAME💥');
  }
  // console.log(document.querySelector('.guess').value);
  const n = Number.parseInt(document.querySelector('.guess').value);

  if (!n || n > 20 || n < 1) {
    // if they dont type any number (NaN) always show this message
    DISPLAY_TEXCONTENT('message', 'YOU NEED TO CHOOSE BETWEEN 1-20');
  } else if (sc > 0 && n !== numToGuess) {
    document.querySelector('.message').textContent =
      n < numToGuess ? 'Too low' : 'Too hight'; // Ternaty operator
    sc--;

    DISPLAY_TEXCONTENT('score', sc);
  } else if (n === numToGuess) {
    DISPLAY_TEXCONTENT('message', `✅${n} is correct✅`);
    DISPLAY_TEXCONTENT('number', n);
    document.querySelector('.number').style.backgroundColor =
      'green'; /**change background / color change fontcolor*/
    document.querySelector('.number').style.color = 'white';
    document.querySelector('body').style.backgroundColor = 'green';

    if (sc > highScore) highScore = sc;
    DISPLAY_TEXCONTENT('highscore', highScore);
    guess = true;
  }
}

document.querySelector('.check').addEventListener('click', check); // use '.check' cause you have another '.btn' class
document.querySelector('.again').addEventListener('click', again); // use '.again' cause you have another '.btn' class
