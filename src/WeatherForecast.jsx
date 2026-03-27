import React, {useState, useEffect} from "react";
import './Weatherforecast.css'
import axios from "axios";
export default function WeatherForecast(props) {
     console.log("WeatherForecast rendered, city:", props.city);
    const [forecastData, setForecastData] = useState(null);
    function handleResponse(response) {
        console.log(response.data.daily);
        setForecastData(response.data.daily);
    }
        useEffect(() => {
        let apiKey = "ta7cf76b03d3d0cfof27fb0472606ea4";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }, [props.city]);
       if (!forecastData) {
        return "Loading...";
    }
    return (
        <div className="weatherForecast">
            <div className="row">
                {forecastData.slice(0, 5).map((day, index) => (
                    <div className="col" key={index}>
                        <div className="weatherForecastDate">{new Date(day.time * 1000).toLocaleDateString("en-US", { weekday: "short" })}</div>
                        <img src={day.condition.icon_url} alt={day.condition.description} width="42"/>
                        <div className="weatherForecastTemperatures">
                            <span className="weatherForecastTemperatureMax">{Math.round(day.temperature.maximum)}°</span>
                            <span className="weatherForecastTemperatureMin">{Math.round(day.temperature.minimum)}°</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}