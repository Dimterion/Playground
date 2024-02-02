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
  const randomNumber = Math.floor(Math.random() * playerRolls.length);
  const opponentRoll =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

  setOpponentRoll(opponentRoll);

  let gameStatus;

  // Game status and score based on the rolled number
  if (playerRoll === "rock" && opponentRoll === "scissors") {
    gameStatus = "You win the round!";
    setOpponentScore((prevOpponentScore) => prevOpponentScore - 1);
  } else if (playerRoll === "rock" && opponentRoll === "paper") {
    gameStatus = "Opponent wins the round!";
    setPlayerScore((prevPlayerScore) => prevPlayerScore - 1);
  } else if (playerRoll === "paper" && opponentRoll === "rock") {
    gameStatus = "You win the round!";
    setOpponentScore((prevOpponentScore) => prevOpponentScore - 1);
  } else if (playerRoll === "paper" && opponentRoll === "scissors") {
    gameStatus = "Opponent wins the round!";
    setPlayerScore((prevPlayerScore) => prevPlayerScore - 1);
  } else if (playerRoll === "scissors" && opponentRoll === "paper") {
    gameStatus = "You win the round!";
    setOpponentScore((prevOpponentScore) => prevOpponentScore - 1);
  } else if (playerRoll === "scissors" && opponentRoll === "rock") {
    gameStatus = "Opponent wins the round!";
    setPlayerScore((prevPlayerScore) => prevPlayerScore - 1);
  } else {
    gameStatus = "Tie!";
  }

  setGameStatus(gameStatus);
}
