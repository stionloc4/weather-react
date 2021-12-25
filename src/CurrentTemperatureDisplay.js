import React from "react";

import "./styles.css";

export default function CurrentTemperatureDisplay() {
  return (
    <div class="row">
      <div class="col-7">
        <div class="clearfix weather-temperature">
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt="cloudy"
            class="float-left"
            id="icon"
          />
          <strong id="temperature">27</strong>{" "}
          <span class="units">
            <a href="#" class="active" id="celsiusLink">
              °C
            </a>{" "}
            |{" "}
            <a href="#" className="inactive" id="FahrenheitLink">
              °F
            </a>
          </span>
        </div>
      </div>
      <div class="col-5">
        <ul>
          <li>
            <span id="humidity">Humidity: 86%</span>
          </li>
          <li>
            <span id="wind">Wind: 23 km/h</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
