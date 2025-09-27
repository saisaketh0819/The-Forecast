import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";
const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const fetchData = async () => {
    if(!searchCity) return;
    const response = await getWeatherDataForCity(searchCity);
    setData(response);
  };

  const fetchCurrentUserLocationData = async () => {
    if(!searchCity) return;
  try {
    // Get the current position and store it in a variable
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    // Extract latitude and longitude
    const { latitude, longitude } = position.coords;

    // Pass the coordinates to getWeatherDataForLocation
    const data = await getWeatherDataForLocation(latitude, longitude);

    // Update your state
    setData(data);
  } catch (error) {
    console.error("Error fetching location or weather data:", error);
  }
};


  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};