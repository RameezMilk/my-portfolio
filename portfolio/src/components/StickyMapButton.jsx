import React from "react";
import "../styles/StickyMapButton.css";

const StickyMapButton = ({ onClick }) => (
  <button className="sticky-map-btn" onClick={onClick} aria-label="Open Map">
    🗺️
  </button>
);

export default StickyMapButton;
