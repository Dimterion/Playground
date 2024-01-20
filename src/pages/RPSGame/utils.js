export function roll(
  playerRoll,
  setPlayerRoll,
  setOpponentRoll,
  setGameStatus
) {
  setPlayerRoll(playerRoll);

  const randomNumber = Math.floor(Math.random() * 3);
  const opponentRoll =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

  setOpponentRoll(opponentRoll);

  let gameStatus;

  if (playerRoll === "rock" && opponentRoll === "scissors") {
    gameStatus = "You win!";
  } else if (playerRoll === "rock" && opponentRoll === "paper") {
    gameStatus = "Opponent wins!";
  } else if (playerRoll === "paper" && opponentRoll === "rock") {
    gameStatus = "You win!";
  } else if (playerRoll === "paper" && opponentRoll === "scissors") {
    gameStatus = "Opponent wins!";
  } else if (playerRoll === "scissors" && opponentRoll === "paper") {
    gameStatus = "You win!";
  } else if (playerRoll === "scissors" && opponentRoll === "rock") {
    gameStatus = "Opponent wins!";
  } else {
    gameStatus = "Tie!";
  }

  setGameStatus(gameStatus);
}
