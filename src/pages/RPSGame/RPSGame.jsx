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
  const [rollAnimation, setRollAnimation] = useState(false);

  const playerRolls = ["rock", "paper", "scissors"];

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

  const buttons = playerRolls.map((playerRoll) => {
    return (
      <button
        key={playerRoll}
        onClick={() => {
          roll(playerRoll, setPlayerRoll, setOpponentRoll, setGameStatus);
          setRollAnimation(true);
        }}
        className="rpsGame-btn"
      >
        {playerRoll === "rock" ? (
          <FaHandRock />
        ) : playerRoll === "paper" ? (
          <FaHandPaper />
        ) : (
          <FaHandScissors />
        )}
      </button>
    );
  });

  return (
    <>
      <Header />
      <section className="rpsGame-section">
        <h1>Rock, Paper, Scissors</h1>
        <div>
          <img
            src={playerRollImg}
            alt={`Futuristic ${playerRoll}`}
            className={
              rollAnimation === true ? "rpsGame-imgAnimation" : "rpsGame-img"
            }
            onAnimationEnd={() => setRollAnimation(false)}
          />
          <img
            src={opponentRollImg}
            alt={`Futuristic ${opponentRoll}`}
            className={
              rollAnimation === true ? "rpsGame-imgAnimation" : "rpsGame-img"
            }
            onAnimationEnd={() => setRollAnimation(false)}
          />
        </div>
        <h2>{gameStatus}</h2>
        <div className="rpsGame-buttons">{buttons}</div>
      </section>
    </>
  );
}
