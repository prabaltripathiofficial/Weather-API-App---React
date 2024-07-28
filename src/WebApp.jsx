import React, { useState } from 'react';
import { Container, Box, Typography, Paper, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WeatherApi from './WeatherApi';
import Informationbox from './Informationbox';

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h2: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 600,  // Make the heading bolder
      color: "#1976d2",
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 300,
    },
  },
});

export default function WebApp() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState("");

  function updateInfo(result) {
    setInfo(result);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 5, mb: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" gutterBottom>
            WanderLust
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Discover the best weather for your next adventure!
          </Typography>
        </Box>
        
        {/* Container for search box, card, and footer */}
        <Paper 
          elevation={6} 
          sx={{ 
            p: 3, 
            mb: 4, 
            transition: 'transform 0.3s', 
            '&:hover': {
              transform: 'scale(1.02)', 
              boxShadow: 10 
            }
          }}
        >
          <Box sx={{ mb: 4 }}>
            <WeatherApi updateInfo={updateInfo} setError={setError} />
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Box>
          
          <Box sx={{ mb: 4 }}>
            {info ? (
              <Informationbox info={info} />
            ) : (
              <Typography variant="body1" color="textSecondary" align="center">
                Please enter a city to get weather information.
              </Typography>
            )}
          </Box>
          
          <Box
            sx={{
              textAlign: 'center',
              backgroundColor: '#1976d2',
              color: '#ffffff',
              p: 2,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="body2">
              © 2024 WanderLust. All rights reserved.
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: 'center',
              mt: 2,
            }}
          >
            <Typography variant="body2" color="textSecondary">
              Created by Prabal Tripathi
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
