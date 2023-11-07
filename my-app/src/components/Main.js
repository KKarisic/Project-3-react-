import React from "react";
import "../styles/_main.scss";
import LatestNews from "../components/LatestNews";
import Sidebar from "../components/Sidebar";
// import { NewsProvider } from "../components/NewsContext";

const Main = () => {
  return (
    <main>
      <LatestNews className="latestNews" />
      <Sidebar className="sidebar" />
    </main>
  );
};

export default Main;

{
}
