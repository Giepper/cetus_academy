import "./App.css";

// import { useState } from "react";
import { useState } from "react";
import { Addition } from "./components/Addition";
import { SelectMode } from "./components/SelectMode";
import { Menu } from "./components/Menu";
import { SelectOperation } from "./components/SelectOperation";
import { SoundComponent } from "./components/SoundComponent";
// import { Volume } from "./components/Volume";

function App() {
  console.log("render");
  const [selectMode, setSelectMode] = useState(null);
  const [selectDifficulty, setSelectDifficulty] = useState(null);
  const [shouldComponentShown, setShouldComponentShown] = useState(false);
  const [shouldMenuShown, setShouldMenuShown] = useState(true);
  const [volume, setVolume] = useState(33);

  function handlerSelectOperation(e) {
    setSelectMode(e.target.value);
  }

  function handlerSelectDifficulty(e) {
    const newDifficulty = e.target.value;
    setSelectDifficulty(newDifficulty);
    console.log("sd", newDifficulty);
    setShouldComponentShown(false);
  }

  const handleStartClick = () => {
    setShouldComponentShown(true);
    setShouldMenuShown(false);
  };

  function handleVolumeChange(e) {
    const newVolume = e.target.value;
    setVolume(newVolume);
    console.log(volume);
  }

  return (
    <>
      {shouldMenuShown && (
        <Menu
          onStartClick={handleStartClick}
          onNewVolumeChange={handleVolumeChange}
        />
      )}
      <SoundComponent volume={volume} onVolumeChange={handleVolumeChange} />
      {/* <Volume volume={volume} onVolumeChange={handleVolumeChange} /> */}
      {shouldComponentShown && (
        <section className="select-mode-container">
          <SelectOperation onSelectOperation={handlerSelectOperation} />
          {selectMode && (
            <SelectMode onSelectDifficulty={handlerSelectDifficulty} />
          )}
        </section>
      )}
      {selectDifficulty && (
        <Addition operation={selectMode} difficulty={selectDifficulty} />
      )}
    </>
  );
}

export default App;
