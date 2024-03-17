import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayTemperature(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}`
    );
  }

  let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
  return <h1>How is the weather?</h1>;
}
