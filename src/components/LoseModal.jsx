import "./EndGame.css";

export function LoseModal() {
  return (
    <>
      <div className="win-modal-container">
        <div className="win-modal">
          <h2>You Lose :c</h2>
          <div className="win-cat-container"></div>
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
