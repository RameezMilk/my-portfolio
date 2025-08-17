import React, { useState } from "react";

import "../styles/Tropical.css";
import StickyMapButton from "../components/StickyMapButton";
import MapModal from "../components/MapModal";

const TropicalPage = () => {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      <section
        className="biome-section tropical"
        role="region"
        aria-label="Overgrove Jungle"
      >
        <div className="tropical-content-layout">
          <div className="about-image-card">
            <img
              src="/images/About_Image.jpeg"
              alt="About Me"
              className="about-image"
              draggable="false"
            />
          </div>
          <div className="about-title-container">
            <div className="about-info-block">
              <h1 className="about-title-text">About Me</h1>
              <div className="about-unit-text">Operative Unit-672 • Rameez Malik</div>
              <div className="about-description-row">
                <p className="about-description-text">
                  To whom this may concern, this is Operative Unit 672 speaking, known off record as Rameez Malik. As far as I know, I am one of the few that remain on Earth-355. I am a prominent software engineer specialized in full-stack development along with systems design and architecture.
                </p>
              </div>
              <div className="about-social-row">
                <a
                  className="about-social-btn"
                  href="https://github.com/RameezMilk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  className="about-social-btn"
                  href="https://www.instagram.com/rameez.maalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="about-social-btn"
                  href="https://www.linkedin.com/in/rameez-malik-ncsu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tropical-overlay vignette" aria-hidden="true"></div>
        <div className="tropical-overlay color-wash" aria-hidden="true"></div>
      </section>

      <StickyMapButton onClick={() => setMapOpen(true)} />
      <MapModal open={mapOpen} onClose={() => setMapOpen(false)} />
    </>
  );
};

export default TropicalPage;
