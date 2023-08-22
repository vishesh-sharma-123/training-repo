import { weatherData } from "./json_tsConvertor";
 


async function fetchWeather(city: string) {
    const apiKey = 'e23bdf99bbaf4ffca37102138232208';
    // const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    try {
      const response = await fetch(apiUrl);
      const data: any = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
  

//   function updateWeatherDisplay(data: weatherData | null) {
//     const weatherDisplay = document.getElementById('weatherDisplay');
//     if (!weatherDisplay) return;
  
//     if (data) {
//       const currentTemp = data.current.temp_c;
//       const humidity = data.current.humidity;
//       const minTemp = data.forecast.forecastday[0].day.mintemp_c;
//       const maxTemp = data.forecast.forecastday[0].day.maxtemp_c;
  
//       weatherDisplay.innerHTML = `
//         <p>Current Temperature: ${currentTemp}°C</p>
//         <p>Humidity: ${humidity}%</p>
//         <p>Min Temperature: ${minTemp}°C</p>
//         <p>Max Temperature: ${maxTemp}°C</p>
//       `;
//     } else {
//       weatherDisplay.innerHTML = '<p>Error fetching weather data.</p>';
//     }
//   }