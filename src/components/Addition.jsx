// case "/":
//   answer = num1 / num2;
//   break;

import { useState } from "react";
// import { SelectMode } from "./SelectMode";

let num1;
let num2;
let answer;

function drawNumbers() {
  num1 = Math.floor(Math.random() * 25);
  num2 = Math.floor(Math.random() * 25);
}
drawNumbers();

export function Addition(props) {
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
      drawNumbers();
    } else {
      setNumberOfPoints(numberOfPoints - 1);
      setNumberOfLives(numberOfLives - 1);
      setCheckAnswer(false);
    }
    console.log("numberOfPoints", numberOfPoints);
    console.log("numberOfLives", numberOfLives);
  }
  let x = 0;
  let ops = ["+", "-", "*"];
  let operator = "";
  console.log("op1", operator);
  console.log("props", props.operation);
  switch (props.operation) {
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
      operator = "*";
      break;
    case "3":
      x = Math.floor(Math.random() * 3);
      operator = ops[x];
      break;
  }
  console.log("op2", operator);

  // if (props.operation === "/") {
  //   while (num1 == 0 || num2 == 0) {
  //     drawNumbers();
  //   }
  // }

  return (
    <>
      <main>
        <div className="main-container">
          <div className="stats-bar">
            <span className="lives">lives: {numberOfLives}</span>
            <br />
            <span className="points">points: {numberOfPoints}</span>
          </div>
          <div className="operation-container main-container-el">
            <span className="operation-el first-num">{num1}</span>
            <span className="operation-el operation">{operator}</span>
            <span className="operation-el second-num">{num2}</span>
          </div>
          <div className="answer-container main-container-el">
            <div className="easy-mode-answer-container"></div>
            <div className="hard-mode-answer-container">
              <form action="" onSubmit={handleHardModeAnswer}>
                <input
                  type="text"
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
