import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import WeatherCard from "../components/WeatherCard";
import Navbar from "../components/Navbar";
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
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [weatherList, setWeatherList] = useState<any[]>([]);
  const [city, setCity] = useState("");

  const handleAdd = () => {
    
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllWeather().then(setWeatherList).catch(console.error);
    }
  }, [isAuthenticated]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl">
        Loading...
      </div>
    );

  if (!isAuthenticated)
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-[url('/bg-weather.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="text-2xl z-10">Please log in to view weather data</h1>
        <button
          onClick={() => loginWithRedirect()}
          className=" py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-400 hover:font-bold active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 z-10 "
        >
          Login
        </button>
      </div>
    );

  return (
    <div className="relative h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed text-white flex flex-col items-center justify-start overflow-y-auto bg-[url('/bg-weather.jpg')]">
      <div className="absolute inset-0 bg-black/40"></div>
      <Navbar />

      <div className="relative z-10 flex flex-col items-center justify-start py-20 w-full">
        <h1 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-white">
          <FiCloud className="text-3xl" /> Weather App
        </h1>

        <div className="flex items-center gap-2 mb-10">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
        className="px-3 py-2 rounded-md text-black outline-none border border-gray-300 focus:ring-2 focus:ring-[#6C63FF] flex-1"
      />
      <button
        onClick={handleAdd}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-400 hover:font-bold active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
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

        <p className="mt-16 text-gray-300 text-sm">© 2025 Fidenz Technologies</p>
      </div>
    </div>
  );
};

export default Dashboard;
