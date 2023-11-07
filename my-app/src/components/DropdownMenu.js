import React from "react";
import "../styles/_dropdownMenu.scss";
import { NavLink } from "react-router-dom";
import arrowIcon from "../images/icons/arrow-down.svg";
import logoImage from "../images/asiosoLogo.svg";

const DropdownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="logo">
        <img className="logoImage" src={logoImage} alt="Logo" />
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <ul className="menu-list">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
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
      )}
    </div>
  );
};

export default DropdownMenu;
