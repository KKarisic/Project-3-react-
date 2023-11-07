import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { NewsProvider } from "./components/NewsContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Gadgets from "./pages/Gadgets";
import Videos from "./pages/Videos";
import Reviews from "./pages/Reviews";
import ContactUs from "./pages/ContactUs";
import DetailedPage from "./pages/DetailPage";

const App = () => {
  return (
    //wrapping around the place where we want useContext to have effect

    <div className="app">
      <NewsProvider>
        <Header />
        <Hero />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/gadgets" element={<Gadgets />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/detailPage" element={<DetailedPage />} />
        </Routes>
        <Footer />
      </NewsProvider>
    </div>
  );
};

export default App;
