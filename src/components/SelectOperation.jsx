export function SelectOperation(props) {
  const handlerSelectOperation = (e) => {
    props.onSelectOperation(e);
  };
  return (
    <>
      <div className="select-operation select-mode-el">
        <h2>Select Game mode</h2>
        <div className="btn-container">
          <button
            className={`select-operation-btn ${
              props.isColorTheme ? "addition-btn" : ""
            }${props.isMonoTheme ? "mono-btn" : ""}`}
            value={0}
            onClick={handlerSelectOperation}
          >
            +
          </button>
          <button
            className={`select-operation-btn ${
              props.isColorTheme ? "substraction-btn" : ""
            }${props.isMonoTheme ? "mono-btn" : ""}`}
            value={1}
            onClick={handlerSelectOperation}
          >
            -
          </button>
          <button
            className={`select-operation-btn ${
              props.isColorTheme ? "multiplication-btn" : ""
            }${props.isMonoTheme ? "mono-btn" : ""}`}
            value={2}
            onClick={handlerSelectOperation}
          >
            ×
          </button>
          <button
            className={`select-operation-btn ${
              props.isColorTheme ? "power-btn" : ""
            }${props.isMonoTheme ? "mono-btn" : ""}`}
            value={3}
            onClick={handlerSelectOperation}
          >
            /
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
    </>
  );
}
