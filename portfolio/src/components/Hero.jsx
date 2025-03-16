import React, { useState } from "react";
import "../styles/Hero.css"; // Import CSS
import myImage from "../assets/my-image.png"; // Replace with actual image
import EclipseButton from "./EclipseButton"; // Import EclipseButton
import Splatter from "./Splatter"; // Import the Splatter effect

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Function
  const handleToggle = () => {
    setIsDarkMode((prev) => !prev); // ✅ Toggle dark mode correctly
  };

  return (
    <section className={`hero ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Splatter Effect */}
      <Splatter isActive={isDarkMode} />

      {/* Left Section */}
      <div className="hero-left">
        <h1 className="hero-text">
          My Name is <span className="highlight">Rameez</span>
        </h1>
        <button className="resume-btn">Download Resume</button>

        {/* EclipseButton with Toggle Handler */}
        <div className="eclipse-button-container">
          <EclipseButton onToggle={handleToggle} />
        </div>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        <img src={myImage} alt="Rameez" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
