import React, { useRef, useEffect } from "react";
// DecodeText component for infinite decode effect
const decodeLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function DecodeText({ text, revealed }) {
  const spansRef = useRef([]);
  useEffect(() => {
    let interval;
    if (!revealed) {
      interval = setInterval(() => {
        spansRef.current.forEach((span, index) => {
          if (!span) return;
          if (text && text[index] === " ") {
            span.innerText = " ";
            return;
          }
          span.innerText = decodeLetters[Math.floor(Math.random() * decodeLetters.length)];
        });
      }, 80);
    } else {
      spansRef.current.forEach((span, index) => {
        if (!span) return;
        if (text && text[index] === " ") {
          span.innerText = " ";
        } else if (text) {
          span.innerText = text[index];
        }
      });
    }
    return () => clearInterval(interval);
  }, [text, revealed]);
  return (
    <span className="decode-title">
      {(text || "").split("").map((char, idx) => (
        <span
          key={idx}
          ref={el => (spansRef.current[idx] = el)}
          className={`decode-letter${char === " " ? " space" : ""}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
import "../styles/MapModal.css";





const biomes = [
  { id: "landing", label: "Landing", x: 40, y: 27, locationName: "Vulcan Landing" },
  { id: "tropical", label: "Tropical", x: 35, y: 40, locationName: "Overgrove Jungle" },
  { id: "desert", label: "Desert", x: 35, y: 60, locationName: "Scorrah Dessert" },
  { id: "tundra", label: "Tundra", x: 58, y: 25, locationName: "Olvrek Tundra" },
  { id: "ruins", label: "Ruins", x: 63, y: 44, locationName: "City of Ashkara" },
];





import { useState } from "react";

function TypewriterText({ text, trigger }) {
  const safeText = typeof text === "string" ? text : "";
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!trigger || !safeText) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (i < safeText.length) {
          const next = prev + safeText[i];
          i++;
          return next;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 60);
    return () => clearInterval(interval);
  }, [safeText, trigger]);
  return <span>{displayed}</span>;
}

const MapModal = ({ open, onClose, onTeleport }) => {
  const [selectedBiome, setSelectedBiome] = useState(null);
  if (!open) return null;
  const locationName = selectedBiome
    ? biomes.find(b => b.id === selectedBiome)?.locationName || ""
    : "";
  return (
    <div className="map-modal-overlay" onClick={() => { setSelectedBiome(null); onClose(); }}>
      <div className="map-modal" onClick={e => e.stopPropagation()}>
        <div className="map-modal-left">
          <img src="/images/world.png" alt="World Map" className="map-image" />
          {biomes.map(biome => (
            <button
              key={biome.id}
              className="map-marker map-marker-icon"
              style={{ left: `${biome.x}%`, top: `${biome.y}%` }}
              onClick={() => setSelectedBiome(biome.id)}
              aria-label={biome.label}
            >
              <img src="/images/map_icon.png" alt="Map Marker" className="map-marker-img" />
            </button>
          ))}
        </div>
        <div className="map-modal-right">
          <div className="biome-info">
            <div className="decode-title">Unit-672</div>
            {/* Use either TypewriterText or DecodeText below as needed: */}
            <h2>
              {/* <TypewriterText text={locationName} trigger={selectedBiome} /> */}
              <DecodeText text={locationName} revealed={!!selectedBiome} />
            </h2>
            <hr className="biome-divider" />
            <img src="/images/biome-placeholder.png" alt="Biome" className="biome-thumb" />
            <p>Biome details and futuristic UI go here.</p>
          </div>
        </div>
        <button className="close-btn" onClick={() => { setSelectedBiome(null); onClose(); }}>×</button>
      </div>
    </div>
  );
};

export default MapModal;
