import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/_header.scss";
import logoImage from "../images/asiosoLogo.svg";
import androidIcon from "../images/icons/andorid.svg";
import wifiIcon from "../images/icons/wifi.svg";
import appleIcon from "../images/icons/apple.svg";
import arrowIcon from "../images/icons/arrow-down.svg";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  return (
    <header className="header">
      <div className="logo_nav">
        <div className="logo">
          <img className="logoImage" src={logoImage} alt="Logo" />
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>

            <li className="icon">
              <NavLink to="/news">News</NavLink>
              <img className="icon" src={arrowIcon} alt="arrow" />
            </li>

            <li>
              <NavLink to="/gadgets">Gadgets</NavLink>
            </li>

            <li>
              <NavLink to="/videos">Videos</NavLink>
            </li>

            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>

            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <DropdownMenu />
      <div className="icons">
        <div className="icon">
          <img src={wifiIcon} alt="Wifi Icon" />
        </div>
        <div className="icon">
          <img src={androidIcon} alt="Android Icon" />
        </div>
        <div className="icon">
          <img src={appleIcon} alt="Apple Icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;

{
}
