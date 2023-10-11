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
  console.log('niger')

  function renderAchievements() {

    for(let x = 0; x < (numberOfAchievements-completedAchievements); x++)
    {
        achievements.push(
        <div className='achievementContainer completed'>
        <div className='achievementHeader'>
            {data.achievements[x].name}
        </div>
        <div className="achievementDesc">
            {data.achievements[x].description}
            <br/>
            <span className='achievementDone'>You have not completed this achievement</span>
            <span className='achievementGoal'>0/{data.achievements[x].goal}</span>
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
