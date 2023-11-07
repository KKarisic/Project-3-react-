import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/_weatherForecast.scss";

const images = {
  Belgrade: require("../images/Belgrade.jpg"),
  London: require("../images/London.jpg"),
  Tokyo: require("../images/Tokio.jpg"),
  Madrid: require("../images/Madrid.jpg"),
  Washington: require("../images/Washington.jpg"),
};
const cities = Object.keys(images);

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeatherForecast = () => {
  const [forecast, setForecast] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Belgrade");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "7ea62850433fc0baa476ad910df7532a";
        const units = "metric";

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=${units}&appid=${apiKey}`
        );

        const dailyForecast = response.data.list.filter(
          (_, index) => index % 8 === 0
        );
        setForecast(dailyForecast);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchWeatherData();
  }, [selectedCity]);

  return (
    <div className="weather-forecast">
      <h2>5-Day Weather Forecast</h2>
      <div className="city-img">
        <img src={images[selectedCity]} alt={selectedCity} />
      </div>
      <h3>{selectedCity}</h3>

      <div className="forecast-days">
        {forecast.map((weather) => (
          <div className="forecast" key={weather.dt}>
            <p className="days-of-week">
              {daysOfWeek[new Date(weather.dt_txt).getDay()]}
            </p>
            <p>{weather.main.temp}&deg;C</p>
            <img
              className="current-weather-img"
              src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="Weather Forecast"
            />
          </div>
        ))}
      </div>
      <div className="city-buttons">
        {cities.map((city) => (
          <button
            key={city}
            className={selectedCity === city ? "active" : ""}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
