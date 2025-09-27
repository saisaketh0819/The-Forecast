const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const baseURL =
  `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};