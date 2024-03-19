import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./App.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div class="container">
        <div class="row">
          <div class="col-sm-2">
            <div class="day">Mon</div>
            <div class="icon">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#000"
                size={48}
                animate={true}
              />
            </div>
            <div class="temeperature">12°C</div>
          </div>
          <div class="row">
            <div class="col-sm-2">
              <div class="day">Mon</div>
              <div class="icon">
                {" "}
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="#000"
                  size={48}
                  animate={true}
                />
              </div>
              <div class="temeperature">12°C</div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="day">Mon</div>
            <div class="icon">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#000"
                size={48}
                animate={true}
              />
            </div>
            <div class="temeperature">12°C</div>
          </div>
          <div class="col-sm-2">
            <div class="day">Mon</div>
            <div class="icon">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#000"
                size={48}
                animate={true}
              />
            </div>
            <div class="temeperature">12°C</div>
          </div>
          <div class="col-sm-2">
            <div class="day">Mon</div>
            <div class="icon">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#000"
                size={48}
                animate={true}
              />
            </div>
            <div class="temeperature">12°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
