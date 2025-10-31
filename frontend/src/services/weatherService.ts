import axios from "axios";

const BASE_URL = "http://localhost:8080/api/weather";

export const fetchAllWeather = async () => {
  const response = await axios.get(BASE_URL);
  return response.data.data;
};

export const fetchWeatherById = async (id: string) => {
  const response = await axios.post(`${BASE_URL}/${id}`);
  return response.data.data;
};
