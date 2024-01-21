import { useState } from "react";
import {
  FaHandPaper,
  FaHandRock,
  FaHandScissors,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { VscDebugRestart } from "react-icons/vsc";
import { roll } from "./utils";
import player from "../../assets/RPSGame/player.jpg";
import opponent from "../../assets/RPSGame/opponent.jpg";
import rock from "../../assets/RPSGame/rock.jpg";
import paper from "../../assets/RPSGame/paper.jpg";
import scissors from "../../assets/RPSGame/scissors.jpg";
import questionMark from "../../assets/RPSGame/questionMark.jpg";
import Header from "../../components/Header/Header";
import "./rpsGame.css";

export default function RPSGame() {
  const [playerScore, setPlayerScore] = useState(3);
  const [opponentScore, setOpponentScore] = useState(3);
  const [gameStatus, setGameStatus] = useState("Choose to start");
  const [playerRoll, setPlayerRoll] = useState("question mark");
  const [opponentRoll, setOpponentRoll] = useState("question mark");
  const [rollAnimation, setRollAnimation] = useState(false);

  const playerHearts =
    playerScore === 3 ? (
      <div className="rpsGame-heartsContainer">
        <FaHeart />
        <FaHeart />
        <FaHeart />
      </div>
    ) : playerScore === 2 ? (
      <div className="rpsGame-heartsContainer">
        <FaHeart />
        <FaHeart />
        <FaRegHeart />
      </div>
    ) : playerScore === 1 ? (
      <div className="rpsGame-heartsContainer">
        <FaHeart />
        <FaRegHeart />
        <FaRegHeart />
      </div>
    ) : (
      <div className="rpsGame-heartsContainer">
        <FaRegHeart />
        <FaRegHeart />
        <FaRegHeart />
      </div>
    );

  const opponentHearts =
    opponentScore === 3 ? (
      <div className="rpsGame-heartsContainer">
        <FaHeart />
        <FaHeart />
        <FaHeart />
      </div>
    ) : opponentScore === 2 ? (
      <div className="rpsGame-heartsContainer">
        <FaHeart />
        <FaHeart />
        <FaRegHeart />
      </div>
    ) : opponentScore === 1 ? (
      <div className="rpsGame-heartsContainer">
        <FaHeart />
        <FaRegHeart />
        <FaRegHeart />
      </div>
    ) : (
      <div className="rpsGame-heartsContainer">
        <FaRegHeart />
        <FaRegHeart />
        <FaRegHeart />
      </div>
    );

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
          roll(
            playerRoll,
            setPlayerRoll,
            setOpponentRoll,
            setPlayerScore,
            setOpponentScore,
            setGameStatus
          );
          setRollAnimation(true);
        }}
        disabled={playerScore === 0 || opponentScore === 0}
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
        <div className="rpsGame-playersInfoContainer">
          <div className="rpsGame-playersInfoContainerItem">
            <h3>Player</h3>
            <img
              src={player}
              alt="Futuristic android with a pen and tablet"
              className="rpsGame-portrait"
            />
            {playerHearts}
          </div>
          <div className="rpsGame-playersInfoContainerItem">
            <h3>Opponent</h3>
            <img
              src={opponent}
              alt="Futuristic android with a pen and tablet"
              className="rpsGame-portrait"
            />
            {opponentHearts}
          </div>
        </div>
        <h1 className="rpsGame-heading">Rock, Paper, Scissors</h1>
        {playerScore === 0 ? (
          <div>
            <img
              src={opponent}
              alt="Futuristic android with a pen and tablet"
              className="rpsGame-img"
            />
          </div>
        ) : opponentScore === 0 ? (
          <div>
            <img
              src={player}
              alt="Futuristic android with a pen and tablet"
              className="rpsGame-img"
            />
          </div>
        ) : (
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
        )}
        <h2 className="rpsGame-subHeading">
          {gameStatus === "Choose to start" && <TbArrowBigDownLinesFilled />}
          {playerScore === 0
            ? "Opponent is victorious!"
            : opponentScore === 0
            ? "You are victorious!"
            : gameStatus}
          {gameStatus === "Choose to start" && <TbArrowBigDownLinesFilled />}
        </h2>
        <div className="rpsGame-buttons">{buttons}</div>
        {(playerScore === 0 || opponentScore === 0) && (
          <button
            onClick={() => {
              setPlayerScore(3);
              setOpponentScore(3);
              setGameStatus("Choose to start");
              setPlayerRoll("question mark");
              setOpponentRoll("question mark");
              setRollAnimation(true);
            }}
            className="rpsGame-btn"
          >
            <VscDebugRestart />
          </button>
        )}
      </section>
    </>
  );
}
