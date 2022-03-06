import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">MON</div>
          <WeatherIcon code="09d" size={30} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">20° |</span>
            <span className="WeatherForecast-temp-min"> 15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
