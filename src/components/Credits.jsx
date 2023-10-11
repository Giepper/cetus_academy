import "./Modal.css";
import "./Credits.css";

export function Credits(props) {
  const handleBackToMenu = () => {
    props.onBackToMenu();
  };
  return (
    <>
      <div className="modal-container">
        <div className="background"></div>
        <div className="modal">
          <h2>Authors</h2>
          <ol className="credits-ol">
            <li className="credits-li">Albert Nizioł</li>
            <li className="credits-li">Filip Krupa</li>
            <li className="credits-li">Jakub Kołton</li>
          </ol>
          <button className="menu-btn back-btn" onClick={handleBackToMenu}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}
