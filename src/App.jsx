import "./App.css";

// import { useState } from "react";
import { useEffect, useState } from "react";
import { Addition } from "./components/Addition";
import { Howl } from "howler";
// import { SelectMode } from "./components/SelectMode";
import gigaChad from "./assets/GigaChad.mp3";

function App() {
  console.log("render");
  const [selectMode, setSelectMode] = useState(null);
  const [selectDifficulty, setSelectDifficulty] = useState(null);
  const [shouldComponentShown, setShouldComponentShown] = useState(true);

  function handlerSelectOperation(e) {
    setSelectMode(e.target.value);
  }
  function handlerSelectDifficulty(e) {
    const newDifficulty = e.target.value;
    setSelectDifficulty(newDifficulty);
    console.log("sd", newDifficulty);
    setShouldComponentShown(false);
  }
  const MyComponent = () => {
    useEffect(() => {
      const sound = new Howl({
        src: [gigaChad],
      });

      // Odtwórz dźwięk po załadowaniu komponentu
      sound.play();
      sound.loop();

      // Pamiętaj o czyszczeniu zasobów dźwiękowych po zakończeniu komponentu
      return () => {
        sound.unload();
      };
    }, []);
  };
  return (
    <>
      <MyComponent />
      {shouldComponentShown && (
        <section className="select-mode-container">
          <div className="select-operation select-mode-el">
            <h2>Select Game mode</h2>
            <div className="btn-container">
              <button
                className="select-operation-btn addition-btn"
                value={0}
                onClick={handlerSelectOperation}
              >
                +
              </button>
              <button
                className="select-operation-btn substraction-btn"
                value={1}
                onClick={handlerSelectOperation}
              >
                -
              </button>
              <button
                className="select-operation-btn multiplication-btn"
                value={2}
                onClick={handlerSelectOperation}
              >
                ×
              </button>
              <button
                className="select-operation-btn power-btn"
                value={3}
                onClick={handlerSelectOperation}
              >
                ^
              </button>
              {/* <button className="select-operation-btn division-btn">/</button> */}
            </div>
            {/* <div className="btn-container">
            <button
              className="select-operation-btn random-operation-btn"
              value={3}
              onClick={handlerSelectOperation}
            >
              random
            </button>
          </div> */}
          </div>
          {selectMode && (
            <>
              <h2>Select difficulty</h2>

              <div className="select-operation select-mode-el">
                <button
                  className="select-difficulty-btn easy-btn"
                  value={0}
                  onClick={handlerSelectDifficulty}
                >
                  Easy
                </button>
                <button
                  className="select-difficulty-btn medium-btn"
                  value={1}
                  onClick={handlerSelectDifficulty}
                >
                  Medium
                </button>
                <button
                  className="select-difficulty-btn hard-btn"
                  value={2}
                  onClick={handlerSelectDifficulty}
                >
                  Hard
                </button>
                <button
                  className="select-difficulty-btn extreme-btn"
                  value={3}
                  onClick={handlerSelectDifficulty}
                >
                  Extreme
                </button>
              </div>
            </>
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
