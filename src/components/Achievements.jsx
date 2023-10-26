import "./Achievements.css";
import data from "./data.json";
import * as React from 'react';

let numberOfAchievements = data.achievements.length;
let completedAchievements = 1;


import "./Modal.css";

export function Achievements(props) {
  const handleBackToMenu = () => {
    props.onBackToMenu();
  };

  const achievements = [];



  function renderAchievements() {

    



    for(let x = 0; x <= (numberOfAchievements-completedAchievements); x++)
    {
      let diff;
      switch (data.achievements[x].gameMode)
      {
        case "easy":
          diff = "completedE"
        break;
        case "medium":
          diff = "completedM"
        break;
        case "hard":
          diff = "completedH"
        break;
        case "extreme":
          diff = "completedEx"
        break;


      }
        let parsed = parseInt(localStorage.getItem(diff))
        console.log(typeof(parsed))
        console.log(typeof(data.achievements[x].goal))
        

        achievements.push(
        <div className={`achievementContainer ${parsed>=data.achievements[x].goal ? "completed" : ""}`}>
        <div className='achievementHeader'>
            {data.achievements[x].name}
        </div>
        <div className="achievementDesc">
            {data.achievements[x].description}
            <br/>
            <span className='achievementGoal'>{localStorage.getItem(diff)}/{data.achievements[x].goal}</span>
        </div>
        </div>
        )
    }
    return achievements;
  }



  return (
    <>
      <div className="modal-container">
        <div className="background"></div>
        <div className="modal">
          <h2>Achievements</h2>
          <div className='achievementWrapper'>{renderAchievements()}</div>
          <button className="menu-btn back-btn" onClick={handleBackToMenu}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}