import React from "react";
import "../styles/_banner.scss";
import bannerImg from "../images/Gmail.png";
import placeholderImg from "../images/placeholder-800x600.png";

const Banner = () => {
  return (
    <div className="banner">
      <h2>Banner</h2>
      <div className="banner-img">
        <img src={bannerImg || placeholderImg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;

{
}
