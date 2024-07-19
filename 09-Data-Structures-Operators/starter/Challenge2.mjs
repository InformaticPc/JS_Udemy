'use strict';
///////////////////////////////////////
// Coding Challenge #2

/**
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
import { game } from './Challenge.mjs';
console.log('### 2️⃣  CHANLLENGE 2 2️⃣  ###');

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const index in game.scored) {
  const goalNumber = +index; // Here I convert string into number: (+string)
  console.log(`Goal ${goalNumber + 1}: ${game.scored[index]}`);
}
// ----------------------------------------------
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// 👇this code to understand the operation
/*let sum = 0;
for (const [index, values] of Object.values(game.odds).entries()) {
  console.log(values);
  console.log(index);
  sum += values;
  const div = sum / (index + 1);
  console.log('index: ' + (index + 1));
  console.log('values after sum: ' + sum);
  console.log('div: ' + div);
}
*/
// better code
function calculateAverageOdd(obj) {
  console.log('CALCULATE AVERAGE FUNCTION');
  let summ;
  const objLength = Object.keys(obj).length;
  for (const [index, value] of Object.values(obj).entries()) {
    summ += value;
    if (index + 1 == objLength) return sum / objLength;
  }
}
console.log(`Odd average: ${calculateAverageOdd(game.odds)}`);
// ----------------------------------------------
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// 'Chagenlle #2 IN PROCESS...'
