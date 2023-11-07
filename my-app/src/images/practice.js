// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../styles/_weatherForecast.scss";

// const WeatherForecast = () => {
//   const cities = ["Belgrade", "London", "Tokyo", "Washington", "Madrid"];

//   const [currentCityIndex, setCurrentCityIndex] = useState(0);
//   const [forecastsByCity, setForecastsByCity] = useState({}); // Changed state variable name
//   const [cityImages, setCityImages] = useState({});

//   useEffect(() => {
//     // Define paths to city images
//     const images = {
//       Belgrade: require("../images/Belgrade.jpg"),
//       London: require("../images/London.jpg"),
//       Tokyo: require("../images/Tokio.jpg"), // Fixed image path name
//       Madrid: require("../images/Madrid.jpg"),
//       Washington: require("../images/Washington.jpg"),
//     };

//     setCityImages(images);
//   }, []);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const apiKey = "Y7ea62850433fc0baa476ad910df7532a";
//         const units = "metric";
//         const city = cities[currentCityIndex];

//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`
//         );

//         const dailyForecast = response.data.list.filter(
//           (data, index) => index % 8 === 0
//         );

//         // Update forecastsByCity state using the spread operator
//         setForecastsByCity((prevForecasts) => ({
//           ...prevForecasts,
//           [city]: dailyForecast,
//         }));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchWeatherData();

//     const interval = setInterval(() => {
//       setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentCityIndex]);

//   const daysOfWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   const currentCity = cities[currentCityIndex];
//   const currentForecast = forecastsByCity[currentCity] || [];

//   return (
//     <div className="weather-forecast">
//       <h2>5-Day Weather Forecast</h2>
//       <div className="city-img">
//         <img src={cityImages[currentCity]} alt={currentCity} />
//       </div>
//       <h3>{currentCity}</h3>
//       <div className="test">
//         {currentForecast.map((weather) => (
//           <div className="forecast" key={weather.dt}>
//             <p className="days-of-week">
//               {daysOfWeek[new Date(weather.dt_txt).getDay()]}
//             </p>
//             <p>{weather.main.temp}&deg;C</p>
//             <img
//               className="current-weather-img"
//               src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
//               alt="Weather Forecast"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WeatherForecast;
