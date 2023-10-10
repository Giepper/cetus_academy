import "./Levels.css";

export function Test(e) {
  return e.target.value;
}
export function Levels(props) {
  const handlerSelectLevel = (e) => {
    if (e.target.classList.contains("level-unlocked")) props.onSelectLevel(e);
  };
  return (
    <>
      <div className="levels-wrapper">
        <div className="level-container">
          <div className="cat-box"></div>
          <div
            className="level lvl-1 level-unlocked"
            value={0}
            onClick={handlerSelectLevel}
          >
            1
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-2" value={1} onClick={handlerSelectLevel}>
            2
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-3" onClick={handlerSelectLevel}>
            3
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-4" onClick={handlerSelectLevel}>
            4
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-5" onClick={handlerSelectLevel}>
            5
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-6" onClick={handlerSelectLevel}>
            6
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-7" onClick={handlerSelectLevel}>
            7
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-8" onClick={handlerSelectLevel}>
            8
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-9" onClick={handlerSelectLevel}>
            9
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-10" onClick={handlerSelectLevel}>
            10
          </div>
        </div>
      </div>
    </>
  );
}
