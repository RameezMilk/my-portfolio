import React from "react";
import "../styles/TeleportButton.css";

const TeleportButton = ({ onClick }) => (
  <button
    className="teleport-btn"
    onClick={onClick}
  >
    Teleport
  </button>
);

export default TeleportButton;
