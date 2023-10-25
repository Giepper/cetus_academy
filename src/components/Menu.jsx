import "./menu.css";
import "./Button.css";
// import logo from "../assets/logo.svg";
import { Achievements } from "./Achievements";
import { Settings } from "./Settings";
import { Credits } from "./Credits";
import { useState } from "react";
import "./Volume.css";

export function Menu(props) {
  const [shouldAchievementsShown, setShouldAchievementsShown] = useState(false);
  const [shouldCreditsShown, setShouldCreditsShown] = useState(false);
  const [shouldSettingsShown, setShouldSettingsShown] = useState(false);
  const [isColorTheme, setIsColorTheme] = useState(true);
  const [isMonoTheme, setIsMonoTheme] = useState(false);

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
  const handleThemeChange = (e) => {
    props.onThemeChange(e);
    switch (e.target.getAttribute("value")) {
      case "mono":
        setIsMonoTheme(true);
        setIsColorTheme(false);
        break;
      case "color":
        setIsMonoTheme(false);
        setIsColorTheme(true);
        break;
    }
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
          onThemeChange={handleThemeChange}
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
            <button
              className={`menu-btn ${isColorTheme ? "start-btn" : ""} ${
                isMonoTheme ? "mono-btn" : ""
              }`}
              onClick={handleStartClick}
            >
              Start
            </button>
            <button
              className={`menu-btn ${isColorTheme ? "achievements-btn" : ""} ${
                isMonoTheme ? "mono-btn" : ""
              }`}
              onClick={handleAchievementsClick}
            >
              Achievements
            </button>
            <button
              className={`menu-btn ${isColorTheme ? "settings-btn" : ""} ${
                isMonoTheme ? "mono-btn" : ""
              }`}
              onClick={handleSettingsClick}
            >
              Settings
            </button>
            <button
              className={`menu-btn ${isColorTheme ? "credits-btn" : ""} ${
                isMonoTheme ? "mono-btn" : ""
              }`}
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