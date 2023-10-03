import './App.css'

// import { useState } from "react";
import { useState } from "react";
import { Addition } from "./components/Addition";
// import { SelectMode } from "./components/SelectMode";

function App() {
  console.log("render");
  const [selectMode, setSelectMode] = useState(0);

  function selectOperation(e) {
    setSelectMode(e.target.value);
  }

  return (
    <>
      <section className="select-mode-container">
        <div className="select-operation select-mode-el">
          <h2>Select Game mode</h2>
          <div className="btn-container">
            <button
              className="select-operation-btn addition-btn"
              value={0}
              onClick={selectOperation}
            >
              +
            </button>
            <button
              className="select-operation-btn substraction-btn"
              value={1}
              onClick={selectOperation}
            >
              -
            </button>
            <button
              className="select-operation-btn multiplication-btn"
              value={2}
              onClick={selectOperation}
            >
              ×
            </button>
            {/* <button className="select-operation-btn division-btn">/</button> */}
          </div>
          <div className="btn-container">
            <button
              className="select-operation-btn random-operation-btn"
              value={3}
              onClick={selectOperation}
            >
              random
            </button>
          </div>
        </div>
        <h2>Select difficulty</h2>
        <div className="select-operation select-mode-el">
          <button className="select-difficulty-btn easy-btn">Easy</button>
          <button className="select-difficulty-btn medium-btn">Medium</button>
          <button className="select-difficulty-btn hard-btn">Hard</button>
          <button className="select-difficulty-btn extreme-btn">Extreme</button>
        </div>
      </section>
      <Addition operation={selectMode} />
    </>
  );
}

export default App;
