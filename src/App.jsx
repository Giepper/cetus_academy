import "./App.css";

// import { useState } from "react";
import { useState } from "react";
import { Addition } from "./components/Addition";
import { SelectMode } from "./components/SelectMode";
import { Menu } from "./components/Menu";
import { SelectOperation } from "./components/SelectOperation";
import { Achievements } from "./components/Achievements";
// import { Achievements } from "./components/Achievements";

// import { SoundComponent } from "./components/SoundComponent";

function App() {
  console.log("render");
  const [selectMode, setSelectMode] = useState(null);
  const [selectDifficulty, setSelectDifficulty] = useState(null);
  const [shouldComponentShown, setShouldComponentShown] = useState(false);
  const [shouldMenuShown, setShouldMenuShown] = useState(true);

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

  return (
    <>
      <Achievements/>
      {shouldMenuShown && <Menu onStartClick={handleStartClick} />}
      {/* <SoundComponent /> */}
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
