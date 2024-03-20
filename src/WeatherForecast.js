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
                size={35}
                animate={true}
              />
            </div>
            <div class="temeperature">12°C</div>
          </div>
          <div class="row">
            <div class="col-sm-2">
              <div class="day">Tue</div>
              <div class="icon">
                {" "}
                <ReactAnimatedWeather
                  icon="CLEAR_NIGHT"
                  color="#000"
                  size={35}
                  animate={true}
                />
              </div>
              <div class="temeperature">12°C</div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="day">Wed</div>
            <div class="icon">
              {" "}
              <ReactAnimatedWeather
                icon="SNOW"
                color="#000"
                size={35}
                animate={true}
              />
            </div>
            <div class="temeperature">12°C</div>
          </div>
          <div class="col-sm-2">
            <div class="day">Thur</div>
            <div class="icon">
              {" "}
              <ReactAnimatedWeather
                icon="FOG"
                color="#000"
                size={35}
                animate={true}
              />
            </div>
            <div class="temeperature">12°C</div>
          </div>
          <div class="col-sm-2">
            <div class="day">Fri</div>
            <div class="icon">
              {" "}
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#000"
                size={35}
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
