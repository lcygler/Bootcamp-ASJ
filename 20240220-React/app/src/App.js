import "./App.css";
import Padre from "./components/Padre";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Padre texto="Texto recibido en el padre" />
      </header>
    </div>
  );
}

export default App;
