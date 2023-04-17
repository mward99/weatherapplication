// Import modules
import React, { useState, useEffect } from "react";
import axios from "axios";

// Create function with a useState
function WeatherData() {
  const [weatherData, setWeatherData] = useState([]);

  // Use Effect hook that makes an API call to index.js file source: https://medium.com/geekculture/simple-data-fetching-in-react-with-the-fetch-api-and-axios-with-hooks-useeffect-and-usestate-85d6bd7357c2 and https://www.youtube.com/watch?v=re3OIOr9dJI&t=3935s
  useEffect(() => {
    axios
      .get("http://localhost:4000/weather")
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  // Calculate highest temperature, lowest temperature, and average temperature source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
  const temperatures = weatherData.map((data) => data.temperature);
  const highestTemp = Math.max(...temperatures);
  const lowestTemp = Math.min(...temperatures);
  const avgTemp =
    temperatures.reduce((acc, curr) => acc + curr, 0) / temperatures.length;

  // returns table with date, temp, pressure, and humidity
  return (
    <div>
      <h2>Weather Data</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (°C)</th>
            <th>Humidity (%)</th>
            <th>Pressure</th>
          </tr>
        </thead>
        <tbody>
          {/* Callig useState and mapping weather data */}
          {weatherData.map((data) => (
            <tr key={data.id}>
              <td>{data.timestamp}</td>
              <td>{data.temperature} &deg;C</td>
              <td>{data.humidity} %</td>
              <td>{data.pressure}</td>
            </tr>
          ))}
        </tbody>
        {/* Table with highest, lowest, and average temp  */}
      </table>
      <h2>Temperature Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Highest Temperature (°C)</th>
            <th>Lowest Temperature (°C)</th>
            <th>Average Temperature (°C)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{highestTemp}</td>
            <td>{lowestTemp}</td>
            <td>{avgTemp.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Nav bar (Not useful)
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/History">History</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
        </ul>
      </nav>
      <h1>Tracked Weather History</h1>
      <WeatherData />
    </div>
  );
}

export default App;
