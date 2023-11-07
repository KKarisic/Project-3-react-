import React from "react";
import "../styles/_hero.scss";
import settingIcon from "../images/icons/settingIcon.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="headline">
          <div className="circle-blog">
            <div className="circle">
              <img
                className="settingIcon"
                src={settingIcon}
                alt="setting Icon"
              />
            </div>
            <h2>Blog</h2>
          </div>
          <p>We make digital business simple</p>
        </div>

        <div className="headline-path">
          <p>
            Home <span>/ Blog</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
}
