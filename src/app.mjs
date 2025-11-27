import express from `express`;
import { encode } from `html-entities`;
import { WeatherClient } from "../utils/weather-client.mjs";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(`public`));

app.get(`/weather`, async (request, response) => {
    await WeatherClient.getCurrentTemperature();
    response.send(`Weather data.`);

});