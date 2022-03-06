import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  Axios.get(apiUrl).then(handleResponse);

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
