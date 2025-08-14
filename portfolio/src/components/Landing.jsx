import React, { useRef, useEffect } from "react";
import "../styles/Landing.css";
import "../styles/Cube.css";
import Cube from "./Cube";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Landing = () => {
  const nameText = "RAMEEZ MALIK";
  const spansRef = useRef([]);

  const animateText = () => {
    let iteration = 0;

    const interval = setInterval(() => {
      spansRef.current.forEach((span, index) => {
        if (nameText[index] === " ") {
          span.innerText = " ";
          return;
        }

        if (index < iteration) {
          span.innerText = nameText[index];
        } else {
          span.innerText = letters[Math.floor(Math.random() * 26)];
        }
      });

      iteration += 1 / 2;
      if (iteration >= nameText.length) clearInterval(interval);
    }, 80);
  };

  useEffect(() => {
    animateText();
  }, []);

  return (
    <section className="landing-section">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/videos/particles.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cube */}
      <div className="cube-wrapper">
        <Cube />
      </div>

      {/* Foreground Content */}
      <div className="landing-content">
        <h1 className="landing-name">
          {nameText.split("").map((char, index) => (
            <span
              key={index}
              ref={(el) => (spansRef.current[index] = el)}
              className={`hacker-letter ${char === " " ? "space" : ""}`}
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="landing-subtitle">
          Visionary software architect & creative systems builder
        </p>
      </div>
    </section>
  );
};

export default Landing;
