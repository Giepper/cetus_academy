// case "/":
//   answer = num1 / num2;
//   break;

import "./Addition.css";
import { useState } from "react";
import styled from "styled-components";
import heart from "../assets/heart.svg";
import smilingGarfield from "../assets/smiling-garfield.svg";
import pinkSock from "../assets/pink-sock.svg";

// import { SelectMode } from "./SelectMode";

let num1;
let num2;
let answer;
let randNum = 0;
function drawNumbers(rand) {
  num1 = Math.floor(Math.random() * rand);
  num2 = Math.floor(Math.random() * rand);
}
drawNumbers();

export const PointsBar = styled.div`
  width: ${(props) => props.width}%;
  height: 40px;
  max-width: 400px;
  position: relative;
  background-color: green;
  transition-property: width;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

export function Addition({ operation, difficulty }) {
  const [inputAnswer, setInputAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [numberOfPoints, setNumberOfPoints] = useState(0);
  const [numberOfLives, setNumberOfLives] = useState(3);

  function handleHardModeAnswer(e) {
    e.preventDefault();
    if (answer == inputAnswer) {
      setNumberOfPoints(numberOfPoints + 1);
      setCheckAnswer(true);
      drawNumbers(randNum);
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

  let operator = "";
  switch (operation) {
    case "0":
      answer = num1 + num2;
      operator = "+";
      break;
    case "1":
      answer = num1 - num2;
      if (answer < 0) drawNumbers(randNum);
      operator = "-";
      break;
    case "2":
      answer = num1 * num2;
      operator = "×";
      break;
    // case "3":
    //   x = Math.floor(Math.random() * 3);
    //   operator = ops[x];
    //   break;
  }

  // if (props.operation === "/") {
  //   while (num1 == 0 || num2 == 0) {
  //     drawNumbers();
  //   }
  // }

  const [drawnNumbers, setDrawnNumbers] = useState(false);

  if (!drawnNumbers) {
    switch (difficulty) {
      case "0":
        randNum = 5;
        drawNumbers(randNum);
        setDrawnNumbers(true);
        break;
      case "1":
        randNum = 10;
        drawNumbers(randNum);
        setDrawnNumbers(true);
        break;
      case "2":
        randNum = 15;
        drawNumbers(randNum);
        setDrawnNumbers(true);
        break;
      case "3":
        randNum = 25;
        drawNumbers(randNum);
        setDrawnNumbers(true);
        break;
      default:
    }
  }

  function renderLives() {
    const hearts = [];
    for (let x = 0; x < numberOfLives; x++) {
      hearts.push(<img src={heart} key={x} className="liveHeart" />);
    }
    return hearts;
  }

  return (
    <>
      <main>
        <div className="main-container">
          <div className="stats-bar">
            <span className="lives">{renderLives()}</span>
            <br />

            <br />
            <div className="points-bar-upper-container">
              <div className="points-bar-container">
                <PointsBar width={numberOfPoints * 2}>
                  <span className="points">points: {numberOfPoints}</span>
                </PointsBar>
                <div className="main-character-icon">
                  <img src={smilingGarfield} className="cat" />
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
                value={inputAnswer}
                onChange={(e) => {
                  setInputAnswer(e.target.value);
                }}
              />
              <button type="submit">Check Answer</button>
              {checkAnswer && <p>SUPER!</p>}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
