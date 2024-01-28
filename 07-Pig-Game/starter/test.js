switch (PLAYER_1.classList.contains('player--active')) {
  case true:
    const number = ROLL_DICE();
    if (number > 1) CURRENT_1.textContent = CALC_SCORE(CURRENT_1, number);
    else {
      CURRENT_1.textContent = 0;
      //AND SWICH PLAYER
      PLAYER_1.classList.remove('player--active');
      PLAYER_2.classList.add('player--active');
    }
    break;

  case false:
    if (number > 1) CURRENT_2.textContent = CALC_SCORE(CURRENT_2, number);
    else {
      CURRENT_2.textContent = 0;
      //AND SWICH PLAYER
      PLAYER_2.classList.remove('player--active');
      PLAYER_1.classList.add('player--active');
    }
    break;
}
/**
 * //this code repeats make refactor######## ↓
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
  //What happen if theres no active player class
  //this code repeats make refactor######## ↑
 */
