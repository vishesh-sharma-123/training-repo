import { weatherData } from "./json_tsConvertor";
 


export async function fetchWeather(city: string ) {
    // let city: any = document.getElementById('cityInput').value;
    // let cityInput = document.getElementById('cityInput') as HTMLInputElement;
    // let city: string = cityInput.value;

    const apiKey = 'e23bdf99bbaf4ffca37102138232208';
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;
    // const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    try {
      const response = await fetch(apiUrl);
      const data: any = await response.json();
      console.log(data);
      displayData(data);
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
  

  function displayData(data: weatherData | null) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    if (!weatherDisplay) return;
  
    if (data) {
        // console.log('data',data)
        const place= data.location.name;
      const currentTemp = data.current.temp_c;
      const minTemp = data.forecast.forecastday[0].day.maxtemp_c;
      const maxTemp = data.forecast.forecastday[0].day.mintemp_c;
      const humidity = data.current.humidity;
      const status = data.current.condition.text;
     
  
      weatherDisplay.innerHTML = `
        <p>Current Temperature: ${currentTemp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Weather: ${status}</p>
        <p>Place: ${place}</p>
        <p>Max Temp: ${maxTemp} </p>
        <p>Min Temp: ${minTemp} </p>
      `;
    } else {
      weatherDisplay.innerHTML = '<p>Error fetching weather data.</p>';
    }
  }