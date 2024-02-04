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
