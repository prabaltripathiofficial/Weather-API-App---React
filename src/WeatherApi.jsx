import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import "./WeatherApi.css";

export default function WeatherApi({ updateInfo, setError }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f1038f065b1e170a059205385187e5de";

  let getWeatherInfo = async (city) => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      setError("City not found. Please try again.");
      return null;
    }
  };

  function cityChange(event) {
    let newCity = event.target.value;
    setCity(newCity);
  }

  async function submissionHandler(event) {
    event.preventDefault();
    setError(""); // Clear any previous errors
    let finalResult = await getWeatherInfo(city);
    if (finalResult) {
      updateInfo(finalResult);
    }
    setCity("");
  }

  return (
    <form onSubmit={submissionHandler}>
      <Stack spacing={2}>
        <TextField
          id="City"
          label="City"
          variant="outlined"
          onChange={cityChange}
          value={city}
          fullWidth
        />
        <Button variant="contained" type="submit" color="primary" fullWidth>
          Fetch
        </Button>
      </Stack>
    </form>
  );
}
