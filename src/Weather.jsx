import React, {useState} from "react";
import axios from 'axios'
import './Weather.css'
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000).toLocaleString("en-US", {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
      }),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      city: response.data.city,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
    });
  }

  if (weatherData.ready) {
    
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>   </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row"> 
        <div className="col-6">
          <img src={weatherData.iconUrl} alt={weatherData.description} />
          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="unit">C°</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
            <li>Pressure: {weatherData.pressure} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
else {
  const apiKey = "ta7cf76b03d3d0cfof27fb0472606ea4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading...";
}
}