import { useEffect } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";

import "./App.css";

function App() {
  const weather = useWeather(); 
  useEffect(() => {
    if (!weather.data) {
      weather.fetchCurrentUserLocationData();
    }
  }, [weather]);


    return (
      <div className="App">
        <h1>Weather Forecast</h1>
        <Input />
        <Button onClick={() => weather && weather.fetchData()} value="Search" />
        <Card />
        <Button onClick={() => weather && weather.fetchCurrentUserLocationData()} value="Refresh" />
      </div>
  );
}

export default App;
