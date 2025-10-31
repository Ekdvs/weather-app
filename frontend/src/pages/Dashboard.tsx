import React, { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import { fetchAllWeather } from "../services/weatherService";
import { FiCloud } from "react-icons/fi";

const colors = [
  "bg-[#339CFF]",
  "bg-[#8E5EFF]",
  "bg-[#28C28A]",
  "bg-[#FF9D3C]",
  "bg-[#E14B4B]",
];

const Dashboard: React.FC = () => {
  const [weatherList, setWeatherList] = useState<any[]>([]);

  useEffect(() => {
    fetchAllWeather().then(setWeatherList).catch(console.error);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed text-white flex flex-col items-center justify-start overflow-y-auto bg-[url('/bg-weather.jpg')]">

      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-start py-10 w-full">
        <h1 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-white">
          <FiCloud className="text-3xl" /> Weather App
        </h1>

        <div className="flex items-center gap-2 mb-10">
          <input
            className="px-3 py-2 rounded-md text-black outline-none"
            placeholder="Enter a city"
            disabled
          />
          <button className="bg-[#6C63FF] text-white px-4 py-2 rounded-md">
            Add City
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-[100px] justify-center px-4">
          {weatherList.map((w, i) => (
            <WeatherCard
              key={w.id}
              weather={w}
              color={colors[i % colors.length]}
            />
          ))}
        </div>

        <p className="mt-16 text-gray-300 text-sm">
          © 2025 Fidenz Technologies
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
