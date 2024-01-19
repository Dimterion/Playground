import { useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import { roll } from "./utils";
import Header from "../../components/Header/Header";
import "./rpsGame.css";

export default function RPSGame() {
  const [gameStatus, setGameStatus] = useState(
    "Make your choice to start the game"
  );
  const [playerRoll, setPlayerRoll] = useState("Player roll");
  const [opponentRoll, setOpponentRoll] = useState("Opponent roll");

  return (
    <>
      <Header />
      <section className="rpsGame-section">
        <p>{gameStatus}</p>
        <p>{playerRoll}</p>
        <p>{opponentRoll}</p>
        <div>
          <button
            onClick={() =>
              roll("Rock", setPlayerRoll, setOpponentRoll, setGameStatus)
            }
            className="rpsGame-btn rpsGame-rotatedBtn"
          >
            <FaHandRock />
          </button>
          <button
            onClick={() =>
              roll("Paper", setPlayerRoll, setOpponentRoll, setGameStatus)
            }
            className="rpsGame-btn"
          >
            <FaHandPaper />
          </button>
          <button
            onClick={() =>
              roll("Scissors", setPlayerRoll, setOpponentRoll, setGameStatus)
            }
            className="rpsGame-btn"
          >
            <FaHandScissors />
          </button>
        </div>
      </section>
    </>
  );
}
