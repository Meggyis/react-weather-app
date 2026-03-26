import React from "react";
import WeatherTemperature from "./Weathertemperature";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">   
          <h1>{props.weatherData.city}</h1>
      <ul>
        <li>{props.weatherData.date}</li>
        <li className="text-capitalize">{props.weatherData.description}</li>
      </ul>
      <div className="row"> 
        <div className="col-6">
          <img src={props.weatherData.iconUrl} alt={props.weatherData.description} />
          <WeatherTemperature celsius={props.weatherData.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind} km/h</li>
            <li>Pressure: {props.weatherData.pressure} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}