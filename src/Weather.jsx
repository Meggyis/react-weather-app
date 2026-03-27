import React, {useState} from "react";
import axios from 'axios'
import './Weather.css'
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  console.log("ready:", weatherData.ready);

  const [city, setCity] = useState(props.defaultCity);
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
function search() {
  const apiKey = "ta7cf76b03d3d0cfof27fb0472606ea4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
function handleSubmit(event) {
  event.preventDefault();
  if (city.trim().length < 2) {
    alert("Please enter a valid city name!");
    return;
  }
  search();

} 
function handleCityChange(event) {
  setCity(event.target.value);
}
 
  if (weatherData.ready) {
    
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>   </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
      </form>
      <Weatherinfo weatherData={weatherData} />
      <WeatherForecast city={weatherData.city} />
    </div>
  );
}
else {
  search();
  return "Loading...";
}
}
