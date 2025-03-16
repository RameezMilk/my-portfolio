import React from "react";
import "../styles/Splatter.css";

const Splatter = ({ isActive }) => {
  return (
    <div className={`splatter-container ${isActive ? "expand" : ""}`}>
      <svg
        className="splatter"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 1 }} /* ✅ Ensures it’s fully visible */
      >
        <path
          d="M 250 50 C 270 90, 350 80, 370 120 C 390 160, 310 200, 290 240 C 270 280, 310 330, 250 350 C 190 370, 130 340, 110 300 C 90 260, 170 240, 190 200 C 210 160, 150 110, 170 70 C 190 30, 230 10, 250 50 Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default Splatter;
