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
    <div className="flex flex-col items-center justify-center ">
      <h1 className="">Weather App</h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city" className="text-black"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Weather: {data.weather[0].description}</p>
          <p>Humidity: {data.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
