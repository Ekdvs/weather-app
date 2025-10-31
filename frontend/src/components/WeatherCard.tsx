import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCloud, FiCloudRain, FiSun, FiCloudDrizzle, FiWind } from "react-icons/fi";
import { WiWindy } from "react-icons/wi";

const getIconByDescription = (desc: string) => {
  const d = desc.toLowerCase();
  if (d.includes("cloud")) return <FiCloud className="inline text-2xl mb-1 mr-1" />;
  if (d.includes("rain")) return <FiCloudRain className="inline text-2xl mb-1 mr-1" />;
  if (d.includes("clear")) return <FiSun className="inline text-2xl mb-1 mr-1" />;
  if (d.includes("mist")) return <FiCloudDrizzle className="inline text-2xl mb-1 mr-1" />;
  return <FiWind className="inline text-2xl mb-1 mr-1" />;
};

type Weather = {
  id: number | string;
  name: string;
  country: string;
  description: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  sunrise: string;
  sunset: string;
};

type Props = {
  weather: Weather;
  color: string;
  onRemove?: (id: number | string) => void; // optional remove callback
};

const WeatherCard: React.FC<Props> = ({ weather, color, onRemove }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/view/${weather.id}`);
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation(); // prevent card click
    if (onRemove) onRemove(weather.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 duration-200 ${color} w-[400px] h-[300px] relative`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">
            {weather.name}, {weather.country}
          </h2>
          <button
            className="text-gray-300 hover:text-white text-xl absolute top-2 right-4"
            onClick={handleRemove}
          >
            ✕
          </button>
        </div>

        <div className="flex items-center mt-1">
          {getIconByDescription(weather.description)}
          <p className="text-sm text-slate-100 ml-1 capitalize">{weather.description}</p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <h1 className="text-4xl text-white font-bold">{weather.temp}°C</h1>
          <div className="text-xs text-gray-200 text-right">
            <p>Temp Min: {weather.temp_min}°C</p>
            <p>Temp Max: {weather.temp_max}°C</p>
          </div>
        </div>
      </div>

      <div className="bg-[#2E3440] p-4 text-xs grid grid-cols-3 gap-1 rounded-b-lg text-gray-100 mt-[40px]">
        <div>
          <p className="p-1">Pressure: {weather.pressure}hPa</p>
          <p className="p-1">Humidity: {weather.humidity}%</p>
          <p className="p-1">Visibility: {weather.visibility}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>
            <WiWindy className="inline mr-1" />
            {weather.wind_speed}m/s {weather.wind_deg}°
          </p>
        </div>
        <div className="text-right">
          <p className="p-1">Sunrise: {weather.sunrise}</p>
          <p className="p-1">Sunset: {weather.sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
