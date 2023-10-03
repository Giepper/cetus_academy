// case "/":
//   answer = num1 / num2;
//   break;

import "./Addition.css";
import { useState } from "react";
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

export function Addition({ operation, difficulty }) {
  console.log("render2");
  const [inputAnswer, setInputAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [numberOfPoints, setNumberOfPoints] = useState(0);
  const [numberOfLives, setNumberOfLives] = useState(3);

  function handleHardModeAnswer(e) {
    e.preventDefault();
    console.log("answer", answer);
    console.log("inputAnswer", inputAnswer);
    if (answer == inputAnswer) {
      setNumberOfPoints(numberOfPoints + 1);
      setCheckAnswer(true);
      drawNumbers(randNum);
    } else {
      if (numberOfPoints > 0) {
        setNumberOfPoints(numberOfPoints - 1);
      }
      setNumberOfLives(numberOfLives - 1);
      setCheckAnswer(false);
    }
    console.log("numberOfPoints", numberOfPoints);
    console.log("numberOfLives", numberOfLives);
  }
  // let x = 0;
  // let ops = ["+", "-", "×"];
  let operator = "";
  console.log("op1", operator);
  console.log("props", operation);
  switch (operation) {
    case "0":
      answer = num1 + num2;
      operator = "+";
      console.log("opt", operator);
      break;
    case "1":
      answer = num1 - num2;
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
  console.log("op2", operator);

  // if (props.operation === "/") {
  //   while (num1 == 0 || num2 == 0) {
  //     drawNumbers();
  //   }
  // }
  console.log("prop", difficulty);
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

  return (
    <>
      <main>
        <div className="main-container">
          <div className="stats-bar">
            <span className="lives">lives: {numberOfLives}</span>
            <br />
            <span className="points">points: {numberOfPoints}</span>
            <div className="points-bar-container">
              <div className="points-bar">
                <div className="main-character-icon"></div>
              </div>
              <div className="reward-icon"></div>
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
                  onChange={(e) => {
                    setInputAnswer(e.target.value);
                  }}
                />
                <button type="submit">Check Answer</button>
                {checkAnswer && <p>SUPER!</p>}
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
