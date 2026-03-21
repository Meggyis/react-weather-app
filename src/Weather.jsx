import React from "react";

import './Weather.css'
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
        <input type="search" placeholder="Enter a city..." className="form-control"/>   </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary"/>
        </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Saturday 12:00</li>
        <li>Cloudy</li>
        <li>20°C</li>
      </ul>
      <div className="row"> 
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
          6 C°</div>
        <div className="col-6">
          <ul>
            <li>Humidity: 60%</li>
            <li>Precipitation:15%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}