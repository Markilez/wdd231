// Fetch Weather Data
async function fetchWeather() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const city = 'Harare'; // Replace with your chamber location
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      displayWeather(data);
  } catch (error) {
      console.error('Error fetching weather data:', error);
      // Optionally display an error message in the UI
      const weatherContainer = document.getElementById('weather-data');
      weatherContainer.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
  }
}

// Display Weather Data
function displayWeather(data) {
  const weatherContainer = document.getElementById('weather-data');
  weatherContainer.innerHTML = `
      <p>Current Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
  `;
}

// Initial Load
document.addEventListener('DOMContentLoaded', fetchWeather);
