import React from "react";
import "../styles/Flames.css";

// Burning wall effect: a single div per wall, full height, animated neon red fire

const Flames = ({ side, className = "" }) => (
  <div className={`burning-wall burning-wall-${side} ${className}`.trim()}></div>
);

export default Flames;
