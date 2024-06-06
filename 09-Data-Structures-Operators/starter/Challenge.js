'use strict';

// Coding Challenge #1

/* 
GOOD LUCK 😀
*/
// ###DATA###
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// ########################
/**We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. ✅Create one player array for each team (variables 'players1' and 'players2')
2. ✅The first player in any player array is the goalkeeper and the others are field players. 
      For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. ✅Create an array 'allPlayers' containing all players of both teams (22 players)
4. ✅During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. ✅Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
 */
// 1. ✅Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log('####################');
console.log(`1️⃣ first team: ${players1}`);
console.log(`2️⃣ second team: ${players2}`);
console.log('####################');

// first player in any player array is the goalkeeper and the others are field players (10)
// one array ('fieldPlayers') with all the remaining 10 field players (exept 1st one the GoalKeeper)
const [gk, ...fieldPlayers] = players1; // REST Pattern 1st indeX empty 'goalkeeper'
console.log(`🥅 GOALKEEPER: ${gk}`);
console.log(fieldPlayers);

// Create an array 'allPlayers' containing all players of both teams (22 players)
console.log('####all PLAYERS####');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
console.log('####PLAYERS 1 FINAL (+ 3 PLAYERS)####');
const [...players1Final] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
console.log('####TEAMS STATS####');
const { team1, x: draw, team2 } = game.odds; //REMEMBER: in obj you need to call their property name. (in this case 'x:draw') we are changing 'x' name property to -> 'draw'
console.log(team1);
console.log(draw);
console.log(team2);
/* another way to choose teams from odds
  const {odds: {team1, x: draw, team2}} = game;<-- just refer to the parent obj and with curly brakets select subObjects
*/

// Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
console.log('####PRINT PLAYERS ALONG WITH THEIR NUMBER OF GOALS####');
function printGoals(...players) {
  // prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
  players.forEach(player => {
    console.log(player);
  });
  console.log('☝️ Scored👆 in total by them was: ' + players.length);
}
printGoals('caca', 'etoh', 'Ronaldinho');
printGoals(...game.scored);

// team with the lower odd is more likely to win. Print to the console which team is more likely to win
// WITHOUT using an if/else statement or the ternary operator.
// team1 < team2
/**CHECK NOTES */
console.log('####lower odd is more likely to win####');
const check = team1 < team2;
console.log(`team2 greater than team2: ${check}`);
console.log(team1 < team2 && 'Team 2T is the winner');
