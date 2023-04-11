import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherData() {
  const [weatherData, setWeatherData] = useState([]);

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

  return (
    <div>
      {weatherData.map((data) => (
        <table>
          <div key={data.id}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Temperature (°C)</th>
                <th>Humidity (%)</th>
                <th>Pressure</th>
              </tr>
            </thead>
            <tbody>
              <td>{data.timestamp}</td>
              <td>{data.temperature} &deg;C</td>
              <td>{data.humidity} %</td>
              <td>{data.pressure}</td>
            </tbody>
          </div>
        </table>
      ))}
    </div>
  );
}

export default WeatherData;
