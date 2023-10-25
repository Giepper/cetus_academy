import "./Modal.css";

export function Settings(props) {
  const handleBackToMenu = () => {
    props.onBackToMenu();
  };
  const handleVolumeChange = (e) => {
    props.onVolumeChange(e);
  };
  return (
    <>
      <div className="modal-container">
        <div className="background"></div>
        <div className="modal">
          <h2>Settings</h2>
          <div className="volume-control">
            <h2>Volume</h2>
            <input
              type="range"
              min="0"
              max="100"
              value={props.volume}
              onChange={handleVolumeChange}
            />
          </div>
          <button className="menu-btn back-btn" onClick={handleBackToMenu}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}