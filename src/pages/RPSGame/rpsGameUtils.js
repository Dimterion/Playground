export function roll(
  playerRolls,
  playerRoll,
  setPlayerRoll,
  setOpponentRoll,
  setPlayerScore,
  setOpponentScore,
  setGameStatus
) {
  setPlayerRoll(playerRoll);

  // Random number that defines opponent's choice
  const opponentRoll =
    playerRolls[Math.floor(Math.random() * playerRolls.length)];

  setOpponentRoll(opponentRoll);

  let gameStatus;

  // Game status and score based on the rolled number
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
