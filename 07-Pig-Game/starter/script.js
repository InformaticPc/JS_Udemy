'use strict';
//Selecting elements
const DICE = document.querySelector('.dice');
const BODY = document.querySelector('body');
//BUTTONS
const ROLL_DICE_BT = document.querySelector('.btn--roll');
const HOLD_BT = document.querySelector('.btn--hold');
//Active player
const PLAYER_ACTIVE = document.querySelector('.player--active');

//Player 1 attrivutes
const PLAYER_1 = document.querySelector('.player--0');
const SCORE_PLAYER_1 = document.querySelector('#score--0'); // '#' for ID
const CURRENT_1 = document.querySelector('#current--0');

//Player 2 attrivutes
const PLAYER_2 = document.querySelector('.player--1');
const SCORE_PLAYER_2 = document.getElementById('score--1'); // element by ID
const CURRENT_2 = document.querySelector('#current--1');

//Score of players variables
let player_1_Score;
let player_2_Score;

//Begin state
SCORE_PLAYER_1.textContent = 0;
SCORE_PLAYER_2.textContent = 0;
DICE.classList.add('hidden'); // This class isn't in html file by default
player_1_Score = 0;
player_2_Score = 0;

/**CREATE RANDOM NUMBER */
const CREATE_RANDOM_NUMBER = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

/**ROLL EVENT
 * call CREATE_RANDOM_NUMBER() to get a random number
 * call DICE_NUMBER = function (rndNumber) to place the right img of dice number
 * remove .hidden class to show the img
 * @returns random number given by the function 'CREATE_RANDOM_NUMBER()'
 */
const ROLL_DICE = function () {
  const RDM_NUMBER = CREATE_RANDOM_NUMBER();
  console.log(RDM_NUMBER);
  DICE_NUMBER(RDM_NUMBER);
  DICE.classList.remove('hidden'); //Make dice img visible
  return RDM_NUMBER;
};

/**Function to calc current score */
const CALC_SCORE = function (playeScore, sum) {
  let score = parseInt(playeScore.textContent);
  return (score += sum);
};

/**SPACE KEY PRESSED*/
BODY.addEventListener('keydown', function (event) {
  console.log('SHOW KEY PRESSED : ' + event.code);
  if (event.code === 'KeyR') {
    //this code repeats make refactor######## ↓
    if (PLAYER_1.classList.contains('player--active')) {
      const number = ROLL_DICE();
      if (number > 1) CURRENT_1.textContent = CALC_SCORE(CURRENT_1, number);
      else {
        CURRENT_1.textContent = 0;
        //AND SWICH PLAYER
        PLAYER_1.classList.remove('player--active');
        PLAYER_2.classList.add('player--active');
      }
    }
    //OTHER PLAYER
    else if (PLAYER_2.classList.contains('player--active')) {
      const number = ROLL_DICE();
      if (number > 1) CURRENT_2.textContent = CALC_SCORE(CURRENT_2, number);
      else {
        CURRENT_2.textContent = 0;
        //AND SWICH PLAYER
        PLAYER_2.classList.remove('player--active');
        PLAYER_1.classList.add('player--active');
      }
    }
    //this code repeats make refactor######## ↑
  }
});
/**ROLL DICE BUTTON PRESSED*/
ROLL_DICE_BT.addEventListener('click', function (event) {
  console.log(event.type);
  const number = ROLL_DICE();

  switch (PLAYER_1.classList.contains('player--active')) {
    case true:
      if (number > 1) CURRENT_1.textContent = CALC_SCORE(CURRENT_1, number);
      else {
        CURRENT_1.textContent = 0;
        //AND SWICH PLAYER
        PLAYER_1.classList.remove('player--active');
        PLAYER_2.classList.add('player--active');
      }
      break;

    default:
      if (number > 1) CURRENT_2.textContent = CALC_SCORE(CURRENT_2, number);
      else {
        CURRENT_2.textContent = 0;
        //AND SWICH PLAYER
        PLAYER_2.classList.remove('player--active');
        PLAYER_1.classList.add('player--active');
      }
      break;
  }
});

/**HOLD BUTTON EVENT */
HOLD_BT.addEventListener('click', function (event) {
  if (PLAYER_1.classList.contains('player--active')) {
    player_1_Score += Math.trunc(CURRENT_1.textContent);
    SCORE_PLAYER_1.textContent = player_1_Score;
    PLAYER_1.classList.toggle('player--active');
    PLAYER_2.classList.toggle('player--active');
    CURRENT_1.textContent = 0;
  }
  //OTHER PLAYER
  else if (PLAYER_2.classList.contains('player--active')) {
    player_2_Score += Math.trunc(CURRENT_2.textContent);
    SCORE_PLAYER_2.textContent = player_2_Score;
    PLAYER_2.classList.toggle('player--active');
    PLAYER_1.classList.toggle('player--active');
    CURRENT_2.textContent = 0;
  }
});

/**Take the apropiate picture for the random number given */
const DICE_NUMBER = function (rndNumber) {
  switch (rndNumber) {
    case 1:
      DICE.src = 'dice-1.png';

      break;
    case 2:
      DICE.src = 'dice-2.png';

      break;
    case 3:
      DICE.src = 'dice-3.png';

      break;
    case 4:
      DICE.src = 'dice-4.png';

      break;
    case 5:
      DICE.src = 'dice-5.png';

      break;
    case 6:
      DICE.src = 'dice-6.png';

      break;

    default:
      console.log('ERROR: RANDOM NUMBER LESS THAN 1 OR HIGHER THAN 6');
      break;
  }
};

/**
 * [x] SUM POINTS TO CURRENT SCORE
 * [x] RESTART ON 0 IF DICE=1 & SWITCH ACTIVE PLAYER
 * [ ] NEW GAME BUTTON
 * [ ] ADD A COUNTER OF HOW MANY ROUNDS YOU CHOOSE TO PLAY
 * [ ] ADD A WINNER MESSAGE
 * [ ] ADD SECTION INSTRUCTIONS OF GAMEPLAY
 * [ ] REFACTOR CODE
 */
