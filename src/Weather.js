import React, { useState } from "react";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ dataReady: false });
  function handleResponse(response) {
    setWeatherData({
      dataReady: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  if (weatherData.dataReady) {
    return (
      <div className="Weather">
        <form>
          <input
            type="Search"
            placeholder="Enter a city..."
            className="searchCity"
          />
          <input type="Submit" value="Search" className="btns" />
        </form>
        <div className="WeatherInformation">
          <h1>{weatherData.city}</h1>
          <span>Tuesday 1:20</span>
          <h2>{weatherData.description}</h2>
        </div>
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
    let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return;
  }
}
