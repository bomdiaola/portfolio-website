// src/components/GlitchImage/GlitchImage.js
import React from "react";
import "./GlitchImage.css";

const GlitchImage = ({ imageUrl, altText = "Profile Avatar" }) => {
  return (
    <div className="glitch-wrapper">
      <div
        className="glitch-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-label={altText}
      ></div>
    </div>
  );
};

export default GlitchImage;
