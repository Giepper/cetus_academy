import "./Button.css";

export function SelectMode(props) {
  const handlerSelectDifficulty = (e) => {
    props.onSelectDifficulty(e);
  };
  return (
    <>
      <h2>Select difficulty</h2>

      <div className="select-operation select-mode-el">
        <button
          className={`select-difficulty-btn ${
            props.isColorTheme ? "easy-btn" : ""
          }${props.isMonoTheme ? "mono-btn" : ""}`}
          value={0}
          onClick={handlerSelectDifficulty}
        >
          Easy
        </button>
        <button
          className={`select-difficulty-btn ${
            props.isColorTheme ? "medium-btn" : ""
          }${props.isMonoTheme ? "mono-btn" : ""}`}
          value={1}
          onClick={handlerSelectDifficulty}
        >
          Medium
        </button>
        <button
          className={`select-difficulty-btn ${
            props.isColorTheme ? "hard-btn" : ""
          }${props.isMonoTheme ? "mono-btn" : ""}`}
          value={2}
          onClick={handlerSelectDifficulty}
        >
          Hard
        </button>
        <button
          className={`select-difficulty-btn ${
            props.isColorTheme ? "extreme-btn" : ""
          }${props.isMonoTheme ? "mono-btn" : ""}`}
          value={3}
          onClick={handlerSelectDifficulty}
        >
          Extreme
        </button>
      </div>
    </>
  );
}
