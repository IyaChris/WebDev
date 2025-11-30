export class WeatherClient {
    static #API_KEY = "e40ec4d029d6311cdd27b7d04502b36a"; 
    static #LATITUDE = 32.8412178;
    static #LONGITUDE = -96.7845175;
    static #UNITS = "imperial";
    static #BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  
    static async getCurrentTemperature() {
      const data = await WeatherClient.#fetchWeatherData();
      return data?.main?.temp;
      
    }
  
    static async #fetchWeatherData() {
      const params = new URLSearchParams({
        lat: WeatherClient.#LATITUDE,
        lon: WeatherClient.#LONGITUDE,
        units: WeatherClient.#UNITS,
        appid: WeatherClient.#API_KEY
      });
  
      const url = `${WeatherClient.#BASE_URL}?${params.toString()}`;
      console.log(`Fetching weather data from: ${url}`);
  
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  }