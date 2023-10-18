import "./Modal.css";

export function Settings(props) {
  const handleBackToMenu = () => {
    props.onBackToMenu();
  };
  const handleVolumeChange = (e) => {
    props.onVolumeChange(e);
  };
  const handleThemeChange = (e) => {
    props.onThemeChange(e);
  };

  return (
    <>
      <div className="modal-container">
        <div className="background"></div>
        <div className="modal">
          <h2>Settings</h2>
          <div className="volume-control settings-el">
            <h2>Volume</h2>
            <input
              type="range"
              min="0"
              max="100"
              value={props.volume}
              onChange={handleVolumeChange}
            />
          </div>
          <div className="theme-color">
            <h2>Theme</h2>
            <div className="themes">
              <div
                className="theme color-theme"
                value={"color"}
                onClick={handleThemeChange}
              ></div>
              <div
                className="theme mono-theme"
                value={"mono"}
                onClick={handleThemeChange}
              ></div>
            </div>
          </div>
          <button className="menu-btn back-btn" onClick={handleBackToMenu}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}
