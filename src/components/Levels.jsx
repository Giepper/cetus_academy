import { useState } from "react";
import styled from "styled-components";
import happyTom from "../assets/happy-tom2.svg";
import trophy from "../assets/trophy.svg";
import "./Levels.css";

export function Levels(props) {
  const [maxLevel, setMaxLevel] = useState(localStorage.getItem("maxLevel"));
  console.log("bMaxLevel", maxLevel);
  let previousLevel = 0;
  let newLevel = 0;
  const isWon = localStorage.getItem("isWon");
  const isWin = localStorage.getItem("isWin");
  console.log("type of isWin", typeof isWin);
  if (isWon === "true") {
    newLevel = localStorage.getItem("possiblyNewLevel");
    if (localStorage.getItem("actualLevel")) {
      previousLevel = localStorage.getItem("actualLevel");
    } else {
      localStorage.setItem("actualLevel", 0);
    }
    if (newLevel > maxLevel) {
      setMaxLevel(newLevel);
    }
    console.log("maxLevel", maxLevel);
    localStorage.setItem("maxLevel", maxLevel);
  }

  function checkLevel() {
    console.log("playerWin", isWin);
    console.log("acutalLevel", previousLevel);
    console.log("possiblyNewLevel", newLevel);
    // for (let x = 0; x < previousLevel; x++) {}
  }
  checkLevel();

  const handlerSelectLevel = (e) => {
    if (e.target.classList.contains("level-unlocked")) {
      const levelValue = parseInt(e.target.getAttribute("value"));
      props.onSelectLevel(levelValue);
      console.log("vak2", levelValue);
      let tmp;
      tmp = levelValue + 1;
      localStorage.setItem("possiblyNewLevel", tmp);
    }
  };
  const divs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const StyledCatImg = styled.img`
    width: 50px;
    height: 50px;
  `;

  return (
    <>
      <div className="levels-wrapper">
        {divs.map((divContent, index) => (
          <>
            <div className="level-container">
              <div className="cat-box">
                {index == maxLevel && <StyledCatImg src={happyTom} />}
              </div>
              <div
                key={index}
                className={`level lvl-${index + 1} ${
                  index <= maxLevel ? "level-unlocked" : ""
                } ${index <= maxLevel - 1 ? "level-passed" : ""}`}
                value={index}
                onClick={handlerSelectLevel}
              >
                {index <= maxLevel - 1 ? <img src={trophy} /> : divContent}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
