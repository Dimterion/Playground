export function roll(
  playerRoll,
  setPlayerRoll,
  setOpponentRoll,
  setGameStatus
) {
  setPlayerRoll(playerRoll);

  const randomNumber = Math.floor(Math.random() * 3);
  const opponentRoll =
    randomNumber === 0 ? "Rock" : randomNumber === 1 ? "Paper" : "Scissors";

  setOpponentRoll(opponentRoll);

  let gameStatus;

  if (playerRoll === "Rock" && opponentRoll === "Scissors") {
    gameStatus = "Player wins.";
  } else if (playerRoll === "Rock" && opponentRoll === "Paper") {
    gameStatus = "Opponent wins.";
  } else if (playerRoll === "Paper" && opponentRoll === "Rock") {
    gameStatus = "Player wins.";
  } else if (playerRoll === "Paper" && opponentRoll === "Scissors") {
    gameStatus = "Opponent wins.";
  } else if (playerRoll === "Scissors" && opponentRoll === "Paper") {
    gameStatus = "Player wins.";
  } else if (playerRoll === "Scissors" && opponentRoll === "Rock") {
    gameStatus = "Opponent wins.";
  } else {
    gameStatus = "Tie.";
  }

  setGameStatus(gameStatus);
}
