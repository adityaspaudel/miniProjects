"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCity, fetchWeather } from "@/lib/redux/slices/weatherSlice";

export default function WeatherApp() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);
  const [input, setInput] = useState(""); // input starts empty

  const handleSearch = () => {
    if (!input) return;
    dispatch(setCity(input)); // store only the last searched city in Redux
    dispatch(fetchWeather(input));
    setInput(""); // clear input after search
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-slate-500 text-black">
      <div className="flex flex-col items-center justify-center min-h-1/2 min-w-1/2 gap-6 bg-yellow-200  p-4 rounded-xl shadow shadow-black hover:shadow-md transition 1s">
        <div>
          <h1 className="text-3xl font-bold">Weather App</h1>
          <hr className="border-black" />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter city"
            className="text-black px-4 py-1 border rounded-lg bg-gray-100"
            title="City Name"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer"
            title="Click to Search City"
          >
            Search
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {data && (
          <div className="text-center mt-4 font-mono bg-green-100 p-4 ">
            <h2 className="text-2xl font-semibold" title="Searched City ">
              {data.name}
            </h2>
            <p>Temperature: {data.main.temp}°C</p>
            <p>Weather: {data.weather[0].description}</p>
            <p>Humidity: {data.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
