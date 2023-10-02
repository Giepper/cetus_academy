export function SelectMode() {
  return (
    <>
      <section className="select-mode-container">
        <div className="select-operation select-mode-el">
          <h2>Select Game mode</h2>
          <div className="btn-container">
            <button className="select-operation-btn addition-btn">+</button>
            <button className="select-operation-btn substraction-btn">-</button>
            <button className="select-operation-btn multiplication-btn">
              x
            </button>
            <button className="select-operation-btn division-btn">/</button>
          </div>
          <div className="btn-container">
            <button className="select-operation-btn random-operation-btn">
              + - x /
            </button>
          </div>
        </div>
        <h2>Select difficulty</h2>
        <div className="select-operation select-mode-el">
          <button className="select-difficulty-btn easy-btn">Easy</button>
          <button className="select-difficulty-btn medium-btn">Medium</button>
          <button className="select-difficulty-btn hard-btn">Hard</button>
        </div>
      </section>
    </>
  );
}
