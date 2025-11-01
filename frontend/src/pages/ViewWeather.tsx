import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchWeatherById } from "../services/weatherService";
import WeatherDetail from "../components/WeatherDetail";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar";

const ViewWeather: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetchWeatherById(id).then(setData).catch(console.error);
    }
  }, [id]);

  if (!data)
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#1E2A47] to-[#10141E] text-white text-lg">
        Loading...
      </div>
    );

  return (
    <div className="relative h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed text-white flex flex-col items-center justify-start overflow-y-auto bg-[url('/bg-weather.jpg')]">
<Navbar />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-white text-3xl hover:text-gray-300 transition-colors z-20"
        aria-label="Go Back"
      >
        <FiArrowLeft />
      </button>

      {/* Weather details */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 md:px-10">
        <WeatherDetail data={data} />
      </div>

      
    </div>
  );
};

export default ViewWeather;
