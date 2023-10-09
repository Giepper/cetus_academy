import "./menu.css";
// import logo from "../assets/logo.svg";
import { Achievements } from "./Achievements";
import { Settings } from "./Settings";
import { Credits } from "./Credits";
import { useState } from "react";

export function Menu(props) {
  const [shouldAchievementsShown, setShouldAchievementsShown] = useState(false);
  const [shouldCreditsShown, setShouldCreditsShown] = useState(false);
  const [shouldSettingsShown, setShouldSettingsShown] = useState(false);

  const handleStartClick = () => {
    // Wywołujemy funkcję przekazaną z App po wciśnięciu przycisku "Start"
    props.onStartClick();
  };
  const handleSettingsClick = () => {
    setShouldSettingsShown(true);
  };
  const handleCreditsClick = () => {
    setShouldCreditsShown(true);
  };
  const handleAchievementsClick = () => {
    setShouldAchievementsShown(true);
  };
  const handleBackToMenu = () => {
    setShouldAchievementsShown(false);
    setShouldCreditsShown(false);
    setShouldSettingsShown(false);
  };
  const handleVolumeChange = (e) => {
    props.onNewVolumeChange(e);
  };

  return (
    <>
      {shouldCreditsShown && <Credits onBackToMenu={handleBackToMenu} />}
      {shouldAchievementsShown && (
        <Achievements onBackToMenu={handleBackToMenu} />
      )}
      {shouldSettingsShown && (
        <Settings
          onBackToMenu={handleBackToMenu}
          onVolumeChange={handleVolumeChange}
        />
      )}
      <div className="menu-container">
        <header>
          <div className="logo-container">
            {/* <img src={logo} className="logo-img" /> */}
          </div>
        </header>
        <main>
          <div className="menu-btn-container">
            <button className="menu-btn start-btn" onClick={handleStartClick}>
              Start
            </button>
            <button
              className="menu-btn achievements-btn"
              onClick={handleAchievementsClick}
            >
              Achievements
            </button>
            <button
              className="menu-btn settings-btn"
              onClick={handleSettingsClick}
            >
              Settings
            </button>
            <button
              className="menu-btn credits-btn"
              onClick={handleCreditsClick}
            >
              Credits
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
