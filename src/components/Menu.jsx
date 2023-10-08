import "./menu.css";
// import logo from "../assets/logo.svg";

export function Menu(props) {
  const handleStartClick = () => {
    // Wywołujemy funkcję przekazaną z App po wciśnięciu przycisku "Start"
    props.onStartClick();
  };
  return (
    <>
      <div className="menu-container">
        <header>
          <div className="logo-container">
            {/* <img src={logo} className="logo-img" /> */}
          </div>
        </header>
        <main>
          <div className="menu-btn-container">
            <button className="menu-btn start-btn" onClick={handleStartClick}>
              Start
            </button>
            <button className="menu-btn settings-btn">Settings</button>
            <button className="menu-btn credits-btn">Credits</button>
            <button className="menu-btn exit-btn">Exit</button>
          </div>
        </main>
      </div>
    </>
  );
}
