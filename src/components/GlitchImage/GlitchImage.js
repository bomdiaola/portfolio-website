// src/components/GlitchImage/GlitchImage.js
import React, { useEffect, useRef, useState } from "react";
import "./GlitchImage.css";

const GlitchImage = ({ imageUrl, altText = "Profile Avatar" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Implementar lazy loading con Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [isLoaded]);

  return (
    <div className="glitch-wrapper" ref={imgRef}>
      <div
        className="glitch-image"
        style={{
          backgroundImage: isLoaded ? `url(${imageUrl})` : "none",
          backgroundColor: isLoaded ? "transparent" : "#0a192f",
        }}
        aria-label={altText}
      ></div>
    </div>
  );
};

export default GlitchImage;
