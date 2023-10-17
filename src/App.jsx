import "./App.css";

// import { useState } from "react";
import { useState } from "react";
import { Addition } from "./components/Addition";
import { SelectMode } from "./components/SelectMode";
import { Menu } from "./components/Menu";
import { SelectOperation } from "./components/SelectOperation";

// import { SoundComponent } from "./components/SoundComponent";
import { Levels } from "./components/Levels";
// import { Volume } from "./components/Volume";
localStorage.setItem("isWin", false);

function App() {
  const [selectMode, setSelectMode] = useState(null);
  const [selectDifficulty, setSelectDifficulty] = useState(null);
  const [shouldComponentShown, setShouldComponentShown] = useState(false);
  const [shouldMenuShown, setShouldMenuShown] = useState(true);
  const [shouldLevelsShown, setShouldLevelsShown] = useState(false);
  const [volume, setVolume] = useState(33);
  const [levelValue, setLevelValue] = useState(1);

  function handlerSelectOperation(e) {
    setSelectMode(e.target.value);
  }

  function handlerSelectDifficulty(e) {
    const newDifficulty = e.target.value;
    setSelectDifficulty(newDifficulty);
    setShouldComponentShown(false);
  }

  const handleStartClick = () => {
    setShouldLevelsShown(true);
    setShouldMenuShown(false);
  };

  function handleVolumeChange(e) {
    const newVolume = e.target.value;
    setVolume(newVolume);
    console.log(volume);
  }

  function handlerSelectLevel(e) {
    setShouldComponentShown(true);
    setShouldLevelsShown(false);
    setLevelValue(e);
    return e;
  }

  return (
    <>
      {/* <SoundComponent volume={volume} onVolumeChange={handleVolumeChange} /> */}
      {/* <Volume volume={volume} onVolumeChange={handleVolumeChange} /> */}
      {shouldMenuShown && (
        <Menu
          onStartClick={handleStartClick}
          onNewVolumeChange={handleVolumeChange}
        />
      )}
      {shouldLevelsShown && <Levels onSelectLevel={handlerSelectLevel} />}
      {shouldComponentShown && (
        <section className="select-mode-container">
          <SelectOperation onSelectOperation={handlerSelectOperation} />
          {selectMode && (
            <SelectMode onSelectDifficulty={handlerSelectDifficulty} />
          )}
        </section>
      )}
      {selectDifficulty && (
        <Addition
          operation={selectMode}
          difficulty={selectDifficulty}
          levelValue={levelValue}
        />
      )}
    </>
  );
}

export default App;
