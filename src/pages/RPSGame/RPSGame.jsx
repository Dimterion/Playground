import { useState } from "react";
import { Link } from "react-router-dom";
import { roll } from "./utils";

export default function RPSGame() {
  const [gameStatus, setGameStatus] = useState("");
  const [playerRoll, setPlayerRoll] = useState("Player roll");
  const [opponentRoll, setOpponentRoll] = useState("Opponent roll");

  return (
    <section>
      <Link to="/">Home</Link>
      <article>
        <div>{gameStatus}</div>
        <div>{playerRoll}</div>
        <div>{opponentRoll}</div>
        <div>
          <button
            onClick={() =>
              roll("Rock", setPlayerRoll, setOpponentRoll, setGameStatus)
            }
          >
            Rock
          </button>
          <button
            onClick={() =>
              roll("Paper", setPlayerRoll, setOpponentRoll, setGameStatus)
            }
          >
            Paper
          </button>
          <button
            onClick={() =>
              roll("Scissors", setPlayerRoll, setOpponentRoll, setGameStatus)
            }
          >
            Scissors
          </button>
        </div>
      </article>
    </section>
  );
}
