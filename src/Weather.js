import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="type a city"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="search"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
      <h1>Boston</h1>
      <ul>
        <li>Saturday 5:00pm</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />
          12°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 30%</li>
            <li>Wind: 2 kmh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
