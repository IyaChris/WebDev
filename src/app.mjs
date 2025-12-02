import express from "express";
import { WeatherClient } from "../utils/weather-client.mjs";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.get("/weather", async (req, res) => {

  try {
    const temp = await WeatherClient.getCurrentTemperature();
    const description = await WeatherClient.getCurrentConditions();

    res.json({ temp: temp });
    res.json({ description: description });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }




});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});