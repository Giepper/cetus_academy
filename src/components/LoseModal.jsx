import "./Modal.css";
// import angryGarfield from "../assets/angry-garfield.svg";
import cryingTom from "../assets/crying-tom.svg";

export function LoseModal() {
  return (
    <>
      <div className="win-modal-container">
        <div className="win-modal">
          <h2>You Lose :c</h2>
          <div className="win-cat-container">
            <img src={cryingTom} className="end-game-img end-game-cat" />
          </div>
          <div className="menu-btn-container">
            <button
              className="menu-btn"
              onClick={() => {
                window.location.reload();
              }}
            >
              Menu
            </button>
          </div>
        </div>
        <div className="win-background"></div>
      </div>
    </>
  );
}