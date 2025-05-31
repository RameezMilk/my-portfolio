import React from "react";
import "../styles/Hero.css"; // Import CSS
import GlitchSlider from "./GlitchSlider"; // Import GlitchSlider component

const Hero = () => {
  return (
    <section className="hero">
      {/* Left Section */}
      <div className="hero-left">
        <h1 className="hero-text">
          My Name is <span className="highlight">Rameez</span>
        </h1>
        <button className="resume-btn">Download Resume</button>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        <GlitchSlider />
      </div>
    </section>
  );
};

export default Hero;
