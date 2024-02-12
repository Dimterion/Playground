import { useEffect, useState } from "react";
import {
  FaHandPaper,
  FaHandRock,
  FaHandScissors,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { VscDebugRestart } from "react-icons/vsc";
import { handleInputLives, changeLives, roll } from "./rpsGameUtils";
import player from "../../assets/RPSGame/player.jpg";
import opponent from "../../assets/RPSGame/opponent.jpg";
import rock from "../../assets/RPSGame/rock.jpg";
import paper from "../../assets/RPSGame/paper.jpg";
import scissors from "../../assets/RPSGame/scissors.jpg";
import questionMark from "../../assets/RPSGame/questionMark.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./rpsGame.css";

export default function RPSGame() {
  const maxLives = 3;

  const [lives, setLives] = useState(3);
  const [playerScore, setPlayerScore] = useState(lives);
  const [opponentScore, setOpponentScore] = useState(lives);
  const [gameStatus, setGameStatus] = useState("Choose to start");
  const [playerRoll, setPlayerRoll] = useState("question mark");
  const [opponentRoll, setOpponentRoll] = useState("question mark");
  const [rollAnimation, setRollAnimation] = useState(false);

  useEffect(() => {
    document.title = "Rock, Paper, Scissors";
  }, []);

  // Lives based on score
  function hearts(lives, score) {
    const hearts = new Array(lives);
    hearts.fill(0);

    for (let i = 0; i < score; i++) {
      hearts[i] = 1;
    }

    const displayedHearts = hearts.map((heart, index) => {
      return heart === 0 ? <FaRegHeart key={index} /> : <FaHeart key={index} />;
    });

    return displayedHearts;
  }

  // Image based on roll
  function rollImg(roll) {
    return roll === "rock"
      ? rock
      : roll === "paper"
      ? paper
      : roll === "scissors"
      ? scissors
      : questionMark;
  }

  const playerRolls = ["rock", "paper", "scissors"];

  // Buttons to choose player's option
  const buttons = playerRolls.map((playerRoll) => {
    return (
      <button
        key={playerRoll}
        onClick={() => {
          roll(
            gameStatus,
            playerRolls,
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
        aria-label={playerRoll}
        className="rpsGame-mainBtn"
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
    <div className="rpsGame-container">
      <Header />
      <section className="rpsGame-section">
        <div className="rpsGame-playersInfoContainer">
          <div className="rpsGame-playersInfoContainerItem">
            <h3>Player</h3>
            <img
              src={player}
              alt="Futuristic android with pen and tablet"
              className={
                opponentScore === 0 ? "rpsGame-winPortrait" : "rpsGame-portrait"
              }
            />
            <div className="rpsGame-heartsContainer">
              {hearts(lives, playerScore)}
            </div>
          </div>
          <form className="rpsGame-form">
            <label htmlFor="numberInput">
              Lives<br></br>(1-3)
            </label>
            <input
              id="numberInput"
              type="number"
              className="rpsGame-input"
              value={lives}
              max={maxLives}
              min={1}
              onChange={(e) =>
                handleInputLives(
                  e,
                  maxLives,
                  setLives,
                  setPlayerScore,
                  setOpponentScore,
                  setGameStatus,
                  setPlayerRoll,
                  setOpponentRoll,
                  setRollAnimation
                )
              }
            />
            <button
              type="button"
              aria-label="Change number of lives"
              onClick={() =>
                changeLives(
                  lives,
                  maxLives,
                  setLives,
                  setPlayerScore,
                  setOpponentScore,
                  setGameStatus,
                  setPlayerRoll,
                  setOpponentRoll,
                  setRollAnimation
                )
              }
              className="rpsGame-subBtn"
            >
              <FaHeart />
            </button>
          </form>
          <div className="rpsGame-playersInfoContainerItem">
            <h3>Opponent</h3>
            <img
              src={opponent}
              alt="Futuristic android with pen and tablet"
              className={
                playerScore === 0 ? "rpsGame-winPortrait" : "rpsGame-portrait"
              }
            />
            <div className="rpsGame-heartsContainer">
              {hearts(lives, opponentScore)}
            </div>
          </div>
        </div>
        <h1 className="rpsGame-heading">Rock, Paper, Scissors</h1>
        <div>
          <img
            src={rollImg(playerRoll)}
            alt={`Futuristic ${playerRoll}`}
            className={
              rollAnimation === true ? "rpsGame-imgAnimation" : "rpsGame-img"
            }
            onAnimationEnd={() => setRollAnimation(false)}
          />
          <img
            src={rollImg(opponentRoll)}
            alt={`Futuristic ${opponentRoll}`}
            className={
              rollAnimation === true ? "rpsGame-imgAnimation" : "rpsGame-img"
            }
            onAnimationEnd={() => setRollAnimation(false)}
          />
        </div>
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
              setPlayerScore(lives);
              setOpponentScore(lives);
              setGameStatus("Choose to start");
              setPlayerRoll("question mark");
              setOpponentRoll("question mark");
              setRollAnimation(true);
            }}
            className="rpsGame-mainBtn"
          >
            <VscDebugRestart />
          </button>
        )}
      </section>
      <Footer />
    </div>
  );
}
