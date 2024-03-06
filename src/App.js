import logo from "./logo.svg";
import "./App.css";
import sound from "./assets/AMD.mp3";

function App() {
  function handleButtonClick() {
    new Audio(sound).play();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleButtonClick}>Play sound</button>
      </header>
    </div>
  );
}

export default App;
