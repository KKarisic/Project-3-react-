import React from "react";
import "../styles/_sidebar.scss";
import WeatherForecast from "../components/WeatherForecast";
import Banner from "../components/Banner";

const Sidebar = () => {
  return (
    <aside>
      <WeatherForecast />
      <Banner />
    </aside>
  );
};

export default Sidebar;

{
}
