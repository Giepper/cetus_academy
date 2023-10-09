import "./Modal.css";

export function Achievements(props) {
  const handleBackToMenu = () => {
    props.onBackToMenu();
  };
  return (
    <>
      <div className="modal-container">
        <div className="background"></div>
        <div className="modal">
          <h2>Achievements</h2>

          <button className="menu-btn back-btn" onClick={handleBackToMenu}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}
