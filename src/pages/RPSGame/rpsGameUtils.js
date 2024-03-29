// Set number of lives based on form input
export function handleInputLives(
  e,
  maxLives,
  setLives,
  setPlayerScore,
  setOpponentScore,
  setGameStatus,
  setPlayerRoll,
  setOpponentRoll,
  setRollAnimation
) {
  const parsedNumber = parseInt(e.target.value, 10);

  if (!isNaN(parsedNumber) && parsedNumber > 0 && parsedNumber < maxLives + 1) {
    setLives(parsedNumber);
    setPlayerScore(parsedNumber);
    setOpponentScore(parsedNumber);
    setGameStatus("Choose to start");
    setPlayerRoll("question mark");
    setOpponentRoll("question mark");
    setRollAnimation(true);
  }
}

// Set number of lives based on button click
export function changeLives(
  lives,
  maxLives,
  setLives,
  setPlayerScore,
  setOpponentScore,
  setGameStatus,
  setPlayerRoll,
  setOpponentRoll,
  setRollAnimation
) {
  if (lives < maxLives) {
    setLives((prevLives) => prevLives + 1);
    setPlayerScore(lives + 1);
    setOpponentScore(lives + 1);
  } else {
    setLives(1);
    setPlayerScore(1);
    setOpponentScore(1);
  }

  setGameStatus("Choose to start");
  setPlayerRoll("question mark");
  setOpponentRoll("question mark");
  setRollAnimation(true);
}

export function roll(
  gameStatus,
  playerRolls,
  playerRoll,
  setPlayerRoll,
  setOpponentRoll,
  setPlayerScore,
  setOpponentScore,
  setGameStatus
) {
  setPlayerRoll(playerRoll);

  // Opponent's random choice
  const opponentRoll =
    playerRolls[Math.floor(Math.random() * playerRolls.length)];

  setOpponentRoll(opponentRoll);

  // Game status and score
  if (playerRoll === opponentRoll) {
    gameStatus = "Tie!";
  } else if (
    (playerRoll === "rock" && opponentRoll === "scissors") ||
    (playerRoll === "paper" && opponentRoll === "rock") ||
    (playerRoll === "scissors" && opponentRoll === "paper")
  ) {
    gameStatus = "You win the round!";
    setOpponentScore((prevOpponentScore) => prevOpponentScore - 1);
  } else {
    gameStatus = "Opponent wins the round!";
    setPlayerScore((prevPlayerScore) => prevPlayerScore - 1);
  }

  setGameStatus(gameStatus);
}
