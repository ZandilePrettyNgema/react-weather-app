import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./App.css";

export default function WeatherConditions() {
  return (
    <div className="WeatherConditionsCurrently">
      <div className="WeatherConditions">
        <div className="WeatherIcon">
          <ReactAnimatedWeather
            icon="CLEAR_NIGHT"
            color="#000"
            size={40}
            animate={true}
          />
        </div>
        <h1 className="Temperature">26°C</h1>
      </div>
      <div className="WeatherConditionsData">
        <span>Precipitation: 75%</span> <br />
        <span>Wind: 2km/h</span>
      </div>
    </div>
  );
}
