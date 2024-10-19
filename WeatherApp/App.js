import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /* Below promise handle asynchronous operations, such as API calls, state updates,
   and component lifecycle control. Promises allow you to write code that
    can wait for an operation to complete without blocking the rest of your code.
   */
    const fetchWeatherData = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    console.log(process.env.REACT_APP_OPENWEATHER_API_KEY);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>ASKY WEATHER APP</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && !loading && !error && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
