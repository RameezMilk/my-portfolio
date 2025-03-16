import React, { useState } from "react";
import "../styles/EclipseButton.css";

const EclipseButton = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
    onToggle(); // Ensures toggle event is fired properly
  };

  return (
    <label className="switch">
      <input
        id="input"
        type="checkbox"
        checked={isChecked} // ✅ Ensures the button reflects state
        onChange={handleChange} // ✅ Calls toggle on change
      />
      <div className="slider round">
        <div className="sun-moon">
          <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>

          <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
        </div>
        <div className="stars">
          <svg id="star-1" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 ..."></path>
          </svg>
          <svg id="star-2" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 ..."></path>
          </svg>
          <svg id="star-3" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 ..."></path>
          </svg>
          <svg id="star-4" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 ..."></path>
          </svg>
        </div>
      </div>
    </label>
  );
};

export default EclipseButton;
