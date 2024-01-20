import { useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import { roll } from "./utils";
import rock from "../../assets/RPSGame/rock.jpg";
import paper from "../../assets/RPSGame/paper.jpg";
import scissors from "../../assets/RPSGame/scissors.jpg";
import questionMark from "../../assets/RPSGame/questionMark.jpg";
import Header from "../../components/Header/Header";
import "./rpsGame.css";

export default function RPSGame() {
  const [gameStatus, setGameStatus] = useState(
    "Make your choice to start the game"
  );
  const [playerRoll, setPlayerRoll] = useState("question mark");
  const [opponentRoll, setOpponentRoll] = useState("question mark");

  const playerRollImg =
    playerRoll === "rock"
      ? rock
      : playerRoll === "paper"
      ? paper
      : playerRoll === "scissors"
      ? scissors
      : questionMark;

  const opponentRollImg =
    opponentRoll === "rock"
      ? rock
      : opponentRoll === "paper"
      ? paper
      : opponentRoll === "scissors"
      ? scissors
      : questionMark;

  return (
    <>
      <Header />
      <section className="rpsGame-section">
        <h2>{gameStatus}</h2>
        <div>
          <img
            src={playerRollImg}
            alt={`Futuristic ${playerRoll}`}
            className="rpsGame-img"
          />
          <img
            src={opponentRollImg}
            alt={`Futuristic ${opponentRoll}`}
            className="rpsGame-img"
          />
        </div>
        <div>
          <button
            onClick={() =>
              roll("rock", setPlayerRoll, setOpponentRoll, setGameStatus)
            }
            className="rpsGame-btn rpsGame-rotatedBtn"
          >
            <FaHandRock />
          </button>
          <button
            onClick={() =>
              roll("paper", setPlayerRoll, setOpponentRoll, setGameStatus)
            }
            className="rpsGame-btn"
          >
            <FaHandPaper />
          </button>
          <button
            onClick={() =>
              roll("scissors", setPlayerRoll, setOpponentRoll, setGameStatus)
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
