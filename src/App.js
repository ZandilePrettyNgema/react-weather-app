import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React World start</h1>
        <h2>Hello weather</h2>
        <Weather city="Empangeni" />
      </header>
    </div>
  );
}

export default App;
