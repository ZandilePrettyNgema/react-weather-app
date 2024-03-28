import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDfault();
    setUnit("celcius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1 className="Temperature">
          {Math.round(props.celsius)}
          <small className="DegreeSymbol">
            °C | {""}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </small>
        </h1>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h1 className="Temperature">
          {Math.round(fahrenheit())}
          <small className="DegreeSymbol">
            {" "}
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
            {""} | °F{" "}
          </small>
        </h1>
      </div>
    );
  }
}
