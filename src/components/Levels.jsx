import "./Levels.css";

export function Levels(props) {
  function checkLevel() {
    const isWin = localStorage.getItem("isWin");
    const previousLevel = localStorage.getItem("actualLevel");
    const newLevel = localStorage.getItem("possiblyNewLevel");
    console.log("playerWin", isWin);
    console.log("acutalLevel", previousLevel);
    console.log("possiblyNewLevel", newLevel);
  }
  checkLevel();

  const handlerSelectLevel = (e) => {
    if (e.target.classList.contains("level-unlocked")) {
      const levelValue = parseInt(e.target.getAttribute("value"));
      props.onSelectLevel(levelValue);
      console.log("vak2", levelValue);
      let tmp;
      tmp = levelValue + 1;
      localStorage.setItem("possiblyNewLevel", tmp);
    }
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
