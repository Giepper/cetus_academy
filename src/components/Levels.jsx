import "./Levels.css";

export function Levels(props) {
  const handlerSelectLevel = (e) => {
    if (e.target.classList.contains("level-unlocked")) {
      const levelValue = parseInt(e.target.getAttribute("value"));
      props.onSelectLevel(levelValue);
      console.log("vak2", levelValue);
    }
  };

  const levelClasses = [
    "level lvl-1",
    "level lvl-2",
    "level lvl-3",
    "level lvl-4",
    "level lvl-5",
    "level lvl-6",
    "level lvl-7",
    "level lvl-8",
    "level lvl-9",
    "level lvl-10",
  ];

  if (props.didPlayerWin) {
    levelClasses.forEach((className, index) => {
      const levelElement = document.querySelector(`.${className}`);
      if (levelElement) {
        levelElement.classList.add("level-unlocked");
      }
    });
  }

  return (
    <>
      <div className="levels-wrapper">
        <div className="level-container">
          <div className="cat-box"></div>
          <div
            className="level lvl-1 level-unlocked"
            value="0"
            onClick={handlerSelectLevel}
          >
            1
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-2" value="1" onClick={handlerSelectLevel}>
            2
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-3" value="2" onClick={handlerSelectLevel}>
            3
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-4" value="3" onClick={handlerSelectLevel}>
            4
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-5" value="4" onClick={handlerSelectLevel}>
            5
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-6" value="5" onClick={handlerSelectLevel}>
            6
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-7" value="6" onClick={handlerSelectLevel}>
            7
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-8" value="7" onClick={handlerSelectLevel}>
            8
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-9" value="8" onClick={handlerSelectLevel}>
            9
          </div>
        </div>
        <div className="level-container">
          <div className="cat-box"></div>
          <div className="level lvl-10" value="9" onClick={handlerSelectLevel}>
            10
          </div>
        </div>
      </div>
    </>
  );
}
