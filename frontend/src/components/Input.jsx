import React from "react";
import { useEffect } from "react";
import { useWeather } from "../context/Weather";
const Input = () => {
  const weather = useWeather();
  useEffect(() => {
    console.log(weather); // logs only when weather changes
  }, [weather]);
  return (
    <input
      className="input-field"
      placeholder="Search here"
      value={weather.searchCity || ""}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;