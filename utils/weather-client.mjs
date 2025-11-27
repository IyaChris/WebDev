export class WeatherClient{
    static #API_KEY = '';
    static #LATITUDE = 32.8412178;
    static #LONGITUDE = -96.7845175;
    static #UNITS = 'imperial';
    static #BASE_URL = https://api.openweathermap.org/data/2.5/weather;

    static async getCurrentTemperature() {
        let temp = undefined;
        WeatherClient.#fetchWeatherData();

        return temp;

    }

    static getCurrentConditions() {
        let conditions = undefined;

        return conditions;

    }

    static async #fetchWeatherData() {
        const params = new URLSearchParams();
        params.append('lat', WeatherClient.#LATITUDE);
        params.append('lon', WeatherClient.#LONGITUDE);
        params.append('units', WeatherClient.#UNITS);
        params.append('appid', WeatherClient.#API_KEY);
        const url = `${WeatherClient.#BASE_URL}?${params.toString()}`;
        console.log(`Fetching weather data from URL: ${url}`);
    }
}