// case "/":
//   answer = num1 / num2;
//   break;

import "./Addition.css";
import "./Button.css";
import { useEffect, useState } from "react";
// import smilingGarfield from "../assets/smiling-garfield.svg";
import pinkSock from "../assets/pink-sock.svg";
import { WinModal } from "./WinModal";
import { LoseModal } from "./LoseModal";
import happyTom from "../assets/happy-tom.svg";
import angryTom from "../assets/angry-tom.svg";
import data from "./data.json";
import { Levels } from "./Levels";
import { RenderLives } from "./RenderLives";
import { PointsBar } from "./PointsBar";
import "./chance.js";

// import { SelectMode } from "./SelectMode";
// let [isMusicPlaying, setIsMusicPlaying] = useState(true);
// let randomExponent = Math.random() < 0.5 ? 2 : 3;
let num1;
let num2;
let answer;
let randNum = 0;
let lvlNum = 0;

function drawNumbers(rand) {
  num1 = Math.floor(Math.random() * rand);
  num2 = Math.floor(Math.random() * rand);
}
drawNumbers();

function drawDivisionNumbers(rand) {
  do {
    num1 = Math.floor(Math.random() * rand);
    num2 = chance.integer({ min: 1, max: 10 });
  } while (num1 % num2 != 0);
}

export function Addition({
  operation,
  difficulty,
  levelValue,
  isMonoTheme,
  isColorTheme,
}) {
  const [inputAnswer, setInputAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [numberOfPoints, setNumberOfPoints] = useState(0);
  const [numberOfLives, setNumberOfLives] = useState(3);
  const [didPlayerWin, setDidPlayerWin] = useState(false);
  const [didPlayerLose, setDidPlayerLose] = useState(false);

  const [winPoints, setWinPoints] = useState(3);

  function getLevel() {
    for (let x = 0; x < data.levels.length; x++) {
      lvlNum = data.levels[x].equations.length;
      if (levelValue == data.levels[x].id) {
        setWinPoints(data.levels[x].equations.length);
        break;
      }
    }
  }
  useEffect(() => {
    getLevel();
  }, []);

  useEffect(() => {
    if (numberOfPoints < winPoints || numberOfLives > 0) {
      checkPoints(numberOfPoints, numberOfLives);
    }
  }, [numberOfPoints, numberOfLives]);

  function handleHardModeAnswer(e) {
    e.preventDefault();
    if (answer == inputAnswer) {
      setNumberOfPoints(numberOfPoints + 1);
      setCheckAnswer(true);
      if (operator != "/") {
        drawNumbers(randNum);
      } else {
        drawDivisionNumbers(randNum);
      }
      setInputAnswer("");
    } else {
      if (numberOfPoints > 0) {
        setNumberOfPoints(numberOfPoints - 1);
      }
      setNumberOfLives(numberOfLives - 1);
      setCheckAnswer(false);
      setInputAnswer("");
    }
  }
  // let x = 0;
  // let ops = ["+", "-", "×"];

  // const [isDivisionNumberOk, setIsDivisionNumberOk] = useState(false);

  let operator = "";
  switch (operation) {
    case "0":
      answer = num1 + num2;
      operator = "+";
      break;
    case "1":
      answer = num1 - num2;
      operator = "-";
      break;
    case "2":
      answer = num1 * num2;
      operator = "×";
      break;
    case "3":
      answer = num1 / num2;
      operator = `/`;
      break;
  }

  const [drawnNumbers, setDrawnNumbers] = useState(false);

  if (!drawnNumbers) {
    switch (difficulty) {
      case "0":
        randNum = data.levels[levelValue].multiplier[0];
        drawNumbers(randNum);
        drawDivisionNumbers(randNum);

        setDrawnNumbers(true);
        break;
      case "1":
        randNum = data.levels[levelValue].multiplier[1];
        drawNumbers(randNum);
        drawDivisionNumbers(randNum);

        setDrawnNumbers(true);
        break;
      case "2":
        randNum = data.levels[levelValue].multiplier[2];
        drawNumbers(randNum);
        drawDivisionNumbers(randNum);
        setDrawnNumbers(true);
        break;
      case "3":
        randNum = data.levels[levelValue].multiplier[3];
        drawNumbers(randNum);
        drawDivisionNumbers(randNum);
        setDrawnNumbers(true);
        break;
      default:
    }
  }

  function checkPoints(points, lives) {
    if (points >= winPoints) {
      setDidPlayerWin(true);
    }
    if (lives <= 0) {
      setDidPlayerLose(true);
    }
    console.log(numberOfLives);
  }

  // lv = levelValue;
  let lv = 0;
  if (didPlayerWin) {
    lv = levelValue;
  }
  {
    didPlayerWin && localStorage.setItem("isWin", didPlayerWin);
  }
  {
    didPlayerWin && localStorage.setItem("actualLevel", lv);
  }

  return (
    <>
      <main>
        {didPlayerWin && <WinModal />}
        {didPlayerWin && (
          <Levels
            playerWin={didPlayerWin}
            actualLevel={levelValue}
            style="position:absolute;z-index:-100"
          />
        )}
        {didPlayerLose && <LoseModal />}
        <div className="main-container">
          <div className="stats-bar">
            <span className="lives">
              <RenderLives numberOfLives={numberOfLives} />
            </span>
            <br />

            <br />
            <div className="points-bar-upper-container">
              <div className="points-bar-container">
                <PointsBar width={(numberOfPoints * 100) / lvlNum}>
                  <span className="points">points: {numberOfPoints}</span>
                </PointsBar>
                <div className="main-character-icon">
                  {checkAnswer && <img src={happyTom} className="cat" />}
                  {!checkAnswer && <img src={angryTom} className="cat" />}
                </div>
              </div>
              <div className="reward-icon">
                <img src={pinkSock} className="sock" />
              </div>
            </div>
          </div>
        </div>
        <div className="operation-container main-container-el">
          <span className="operation-el first-num">{num1} </span>
          <span className="operation-el operation">{operator}</span>
          <span className="operation-el second-num"> {num2} = ?</span>
        </div>
        <div className="answer-container main-container-el">
          <div className="easy-mode-answer-container"></div>
          <div className="hard-mode-answer-container">
            <form action="" onSubmit={handleHardModeAnswer}>
              <input
                type="number"
                name="hard-mode-answer"
                id="hard-mode-answer"
                autoComplete="off"
                value={inputAnswer}
                onChange={(e) => {
                  setInputAnswer(e.target.value);
                }}
              />
              <button
                type="submit"
                className={`${isColorTheme ? "check-answer-btn" : ""}${
                  isMonoTheme ? "mono-btn" : ""
                }`}
              >
                Check Answer
              </button>
              {checkAnswer && <p>SUPER!</p>}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
