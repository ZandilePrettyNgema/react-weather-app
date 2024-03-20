import "./App.css";
import WeatherConditions from "./WeatherConditions";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <form>
        <input
          type="Search"
          placeholder="Enter a city..."
          className="searchCity"
        />
        <input type="Submit" value="Search" className="btns" />
        <input type="Submit" value="Current" className="btns" />
      </form>

      <main>
        <div className="WeatherInformation">
          <h1>Empangeni</h1>
          <span>Tuesday 1:20</span>
          <h2>Clear</h2>
        </div>
      </main>
      <WeatherConditions />
      <WeatherForecast />
      <Footer />
    </div>
  );
}

export default App;
