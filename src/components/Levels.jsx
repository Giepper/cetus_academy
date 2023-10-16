import "./Levels.css";

export function Levels(props) {
  let previousLevel = 0;
  const isWin = localStorage.getItem("isWin");
  const newLevel = localStorage.getItem("possiblyNewLevel");
  if (localStorage.getItem("actualLevel")) {
    previousLevel = localStorage.getItem("actualLevel");
  } else {
    localStorage.setItem("actualLevel", 0);
  }
  function checkLevel() {
    console.log("playerWin", isWin);
    console.log("acutalLevel", previousLevel);
    console.log("possiblyNewLevel", newLevel);
    // for (let x = 0; x < previousLevel; x++) {}
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
  const divs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <>
      <div className="levels-wrapper">
        {divs.map((divContent, index) => (
          <>
            <div className="level-container">
              <div className="cat-box"></div>
              <div
                key={index}
                className={`level lvl-${index + 1} ${
                  index <= newLevel ? "level-unlocked" : ""
                } ${index <= previousLevel ? "level-passed" : ""}`}
                value={index}
                onClick={handlerSelectLevel}
              >
                {divContent}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
