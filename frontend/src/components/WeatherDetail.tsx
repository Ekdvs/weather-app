import React from "react";
import { FiCloud, FiCloudRain, FiSun, FiCloudDrizzle, FiWind,  } from "react-icons/fi";
import { WiWindy } from "react-icons/wi";

const getIconByDescription = (desc: string) => {
  const d = desc.toLowerCase();
  if (d.includes("cloud")) return <FiCloud className="inline text-2xl mb-1 mr-1" />;
  if (d.includes("rain")) return <FiCloudRain className="inline text-2xl mb-1 mr-1" />;
  if (d.includes("clear")) return <FiSun className="inline text-2xl mb-1 mr-1" />;
  if (d.includes("mist")) return <FiCloudDrizzle className="inline text-2xl mb-1 mr-1" />;
  return <FiWind className="inline text-2xl mb-1 mr-1" />;
};


type Props = {
  data: {
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
};

const WeatherDetail: React.FC<Props> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-[#339CFF] rounded-lg shadow-xl w-[500px] h-[400px] text-center p-6 relative">
        <div className="absolute left-4 top-6">
          {/* Back Arrow for navigation; parent page should implement */}
        </div>
        <h1 className="text-xl font-bold text-white">
          {data.name}, {data.country}
        </h1>
        <div className="flex justify-center items-center gap-2 mt-1">
          {getIconByDescription(data.description)}
          <p className="text-sm text-white capitalize">{data.description}</p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-4">
          <p className="text-5xl text-white font-semibold">{data.temp}°C</p>
          <div className="text-left text-sm text-gray-200">
            <p>Temp Min: {data.temp_min}°C</p>
            <p>Temp Max: {data.temp_max}°C</p>
          </div>
        </div>

        <div className="bg-[#2E3440] rounded-lg mt-[40px] text-sm p-4 grid grid-cols-3 gap-2 text-white mt-[50px]   ">
          <div>
            <p>Pressure: {data.pressure}hPa</p>
            <p>Humidity: {data.humidity}%</p>
            <p>Visibility: {data.visibility}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>
              <WiWindy className="inline mr-1" />
              {data.wind_speed}m/s {data.wind_deg}°
            </p>
          </div>
          <div className="text-right">
            <p>Sunrise: {data.sunrise}</p>
            <p>Sunset: {data.sunset}</p>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm mt-6">
        © 2025 Fidenz Technologies
      </p>
    </div>
  );
};

export default WeatherDetail;
