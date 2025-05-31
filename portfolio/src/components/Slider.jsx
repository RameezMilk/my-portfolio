import React from "react";
import "../styles/Slider.css";

const Slider = () => {
  return (
    <label className="slider">
      <input type="range" className="level" />
      <svg
        className="volume"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z"
          fill="currentColor"
        ></path>
      </svg>
    </label>
  );
};

export default Slider;
