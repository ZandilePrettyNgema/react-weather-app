import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather city="Durban" />
      <Footer />
    </div>
  );
}

export default App;
