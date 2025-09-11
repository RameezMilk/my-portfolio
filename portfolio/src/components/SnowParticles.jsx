import React, { useEffect, useRef } from "react";

const SNOWFLAKE_COUNT = 24; // Increased quantity for more flakes

const SnowParticles = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
      const flake = document.createElement("div");
      flake.className = "snowflake";
      flake.textContent = "❄";
      flake.style.left = `${Math.random() * 100}vw`;
      flake.style.animationDuration = `${7 + Math.random() * 6}s`;
      flake.style.opacity = `${0.5 + Math.random() * 0.5}`;
      flake.style.fontSize = `${12 + Math.random() * 12}px`;
      flake.style.animationDelay = `${Math.random() * 10}s`; // Infinite loop effect
      container.appendChild(flake);
    }
  }, []);

  return <div className="snow-particles" ref={containerRef} />;
};

export default SnowParticles;
