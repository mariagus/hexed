import "./App.css";
import Converter from "./components/Converter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HEXED</h1>
        <h3>Hexadecimal Converter</h3>
      </header>
      <Converter />
    </div>
  );
}

export default App;
