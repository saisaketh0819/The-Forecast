import React from "react";
import logo from "../assets/weather.png"; // adjust path if needed

const Header = () => {
  return (
    <header className="flex items-center bg-gray-100 p-4 shadow-md">
      <img src={logo} alt="Weather Logo" className="h-10 w-10 mr-3" />
      <h1 className="text-2xl font-bold">THE FORECAST</h1>
    </header>
  );
};

export default Header;
