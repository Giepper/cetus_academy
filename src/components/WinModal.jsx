import "./Modal.css";
// import happyGarfield from "../assets/happy-garfield.svg";
// import pinkSock from "../assets/pink-sock.svg";
import tomInSock from "../assets/tom-in-sock2.svg";

export function WinModal() {
  return (
    <>
      <div className="win-modal-container">
        <div className="win-modal">
          <h2>You Win!!!</h2>
          <div className="win-cat-container">
            <img src={tomInSock} className="end-game-img end-game-cat" />
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
