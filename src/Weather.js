import React, { useState } from "react";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ dataReady: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      dataReady: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.dataReady) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            placeholder="Enter a city..."
            className="searchCity"
            onChange={handleCityInput}
          />
          <input type="Submit" value="Search" className="btns" />
        </form>
        <div className="WeatherInformation">
          <h1>{weatherData.city}</h1>
          <span>
            <FormattedDate date={weatherData.date} />
          </span>
          <h2>{weatherData.description}</h2>
        </div>
        <div className="WeatherConditionsCurrently">
          <div className="WeatherConditions">
            <div className="WeatherIcon">
              <WeatherIcon code={weatherData.icon} size={52} />
            </div>
            <h1 className="Temperature">
              {Math.round(weatherData.temperature)}
              <small className="DegreeSymbol">°C</small>
            </h1>
          </div>
          <div className="WeatherConditionsData">
            <span>Humidity: {weatherData.humidity}%</span> <br />
            <span>Wind: {weatherData.wind}km/h</span>
          </div>
        </div>
        <div className="WeatherForecast">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="day">Mon</div>
                <div className="icon">
                  {" "}
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#000"
                    size={35}
                    animate={true}
                  />
                </div>
                <div className="temeperature">12°C</div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <div className="day">Tue</div>
                  <div className="icon">
                    {" "}
                    <ReactAnimatedWeather
                      icon="CLEAR_NIGHT"
                      color="#000"
                      size={35}
                      animate={true}
                    />
                  </div>
                  <div className="temeperature">12°C</div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="day">Wed</div>
                <div className="icon">
                  {" "}
                  <ReactAnimatedWeather
                    icon="SNOW"
                    color="#000"
                    size={35}
                    animate={true}
                  />
                </div>
                <div className="temeperature">12°C</div>
              </div>
              <div className="col-sm-2">
                <div className="day">Thur</div>
                <div className="icon">
                  {" "}
                  <ReactAnimatedWeather
                    icon="FOG"
                    color="#000"
                    size={35}
                    animate={true}
                  />
                </div>
                <div className="temeperature">12°C</div>
              </div>
              <div className="col-sm-2">
                <div className="day">Fri</div>
                <div className="icon">
                  {" "}
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#000"
                    size={35}
                    animate={true}
                  />
                </div>
                <div className="temeperature">12°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
