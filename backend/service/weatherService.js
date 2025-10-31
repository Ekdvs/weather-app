
import axios from "axios";
import NodeCache from "node-cache";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const cache = new NodeCache({ stdTTL: 300 }); // 5 minutes
const API_KEY = process.env.OPENWEATHER_API_KEY;

// Load city json list
const cities = JSON.parse(fs.readFileSync("./cities.json", "utf-8")).List;

// Fetch weather for single city
export const getWeatherByCityId = async (cityId) => {
  const cacheKey = `weather_${cityId}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log(`✅ Serving from cache: ${cityId}`);
    return cachedData;
  }

  try {
    console.log(` Fetching from OpenWeatherMap: ${cityId}`);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          id: cityId,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    const w = response.data;

    const weatherData = {
      id: w.id,
      name: w.name,
      country: w.sys.country,
      description: w.weather[0].description,
      temp: w.main.temp,
      temp_min: w.main.temp_min,
      temp_max: w.main.temp_max,
      pressure: w.main.pressure,
      humidity: w.main.humidity,
      visibility: (w.visibility / 1000).toFixed(1) + " km",
      wind_speed: w.wind.speed,
      wind_deg: w.wind.deg,
      sunrise: new Date(w.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(w.sys.sunset * 1000).toLocaleTimeString(),
    };

    cache.set(cacheKey, weatherData);
    return weatherData;
  } catch (error) {
  console.error(` Error fetching weather for ${cityId}:`, error.message);
  if (error.response) {
    console.error("Response data:", error.response.data);
    console.error("Status:", error.response.status);
  }
  throw error;
};}

// Fetch weather for all cities
export const getAllCitiesWeather = async () => {
  const results = [];
  for (const city of cities) {
    const data = await getWeatherByCityId(city.CityCode);
   results.push({
      CityCode: city.CityCode,
      CityName: city.CityName,
      ...data,
    });
  }
  return results;
};
