import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import ColdWeatherIcon from '@mui/icons-material/AcUnit';
import RainIcon from '@mui/icons-material/Cloud';
import HotWeatherIcon from '@mui/icons-material/Flare';

export default function Informationbox({ info }) {
  // Background URLs based on temperature conditions
  const HOT_URL = "https://media.istockphoto.com/id/936342386/photo/yellow-umbrella-with-bright-sun-and-blue-sky.jpg?s=612x612&w=0&k=20&c=zgoDpVvGJ6fzOFLJsLIJqCDZXdN7JuW-HkRAVSYH2S8=";
  const COLD_URL = "https://w0.peakpx.com/wallpaper/450/88/HD-wallpaper-cold-weather-tree-nature-winter.jpg";
  const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";

  // Determine the appropriate background image based on temperature
  const imageUrl = info.temp < 20 ? COLD_URL : info.temp <= 45 ? RAIN_URL : HOT_URL;

  // Select the icon based on temperature
  const getWeatherIcon = () => {
    if (info.temp < 20) {
      return <ColdWeatherIcon fontSize="large" color="primary" />;
    } else if (info.temp <= 45) {
      return <RainIcon fontSize="large" color="primary" />;
    } else {
      return <HotWeatherIcon fontSize="large" color="primary" />;
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: '20px auto',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        textAlign: 'center', // Center-align content
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="Weather Image"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Center-align heading
            mb: 2, // Add bottom margin
          }}
        >
          {getWeatherIcon()} <Box sx={{ ml: 1 }}>{info.city}</Box>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Temperature: {info.temp}°C<br />
          Min Temperature: {info.tempMin}°C<br />
          Max Temperature: {info.tempMax}°C<br />
          Humidity: {info.humidity}%<br />
          Feels Like: {info.feelsLike}°C<br />
          Weather: {info.weather}
        </Typography>
      </CardContent>
    </Card>
  );
}
