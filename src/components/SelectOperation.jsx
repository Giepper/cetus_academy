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
