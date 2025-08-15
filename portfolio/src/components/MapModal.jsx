import TeleportButton from "./TeleportButton";
            <button
              style={{
                marginTop: '1.5em',
                padding: '0.55em 2.2em',
                border: '2px solid #ff003c',
                background: 'transparent',
                color: '#ff003c',
                fontFamily: 'Syne Mono, monospace',
                fontWeight: 700,
                fontSize: '1.08rem',
                borderRadius: '0.4em',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
              onClick={() => {/* Add teleport logic here if needed */}}
              className="teleport-btn"
            >
              Teleport
            </button>
import React, { useRef, useEffect, useState } from "react";
// DecodeText component for infinite decode effect
const decodeLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function DecodeText({ text, revealed, className }) {
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
  }, 140);
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
  // Font logic: Sankofa Display for scrambled, Syne Mono for revealed
  const fontFamily = revealed ? 'Syne Mono, monospace' : 'Sankofa Display, sans-serif';
  return (
    <span className={className} style={{ color: className ? undefined : '#ff003c', background: 'none', fontSize: '0.92rem', fontFamily, letterSpacing: '0.04em' }}>
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
  {
    id: "landing",
    label: "Landing",
    x: 40,
    y: 27,
    locationName: "Vulcan Landing",
    details: "A bustling port where travelers from all over the world arrive and depart. Known for its vibrant markets and advanced docking technology."
  },
  {
    id: "tropical",
    label: "Tropical",
    x: 35,
    y: 40,
    locationName: "Overgrove Jungle",
    details: "A lush, dense jungle teeming with exotic flora and fauna. The air is thick with humidity and the sounds of hidden wildlife."
  },
  {
    id: "desert",
    label: "Desert",
    x: 35,
    y: 60,
    locationName: "Scorrah Dessert",
    details: "An endless expanse of golden sands and ancient ruins. The sun is relentless, but hidden oases offer rare respite."
  },
  {
    id: "tundra",
    label: "Tundra",
    x: 58,
    y: 25,
    locationName: "Olvrek Tundra",
    details: "A frozen wilderness of snow and ice, where only the hardiest creatures survive. The aurora lights the night sky."
  },
  {
    id: "ruins",
    label: "Ruins",
    x: 63,
    y: 44,
    locationName: "City of Ashkara",
    details: "Once a thriving metropolis, now a haunting landscape of crumbling towers and lost technology."
  },
];







function TypewriterText({ text, trigger }) {
  const [displayed, setDisplayed] = React.useState("");
  React.useEffect(() => {
    setDisplayed("");
    if (!trigger || !text) return;
    let cancelled = false;
    function type(i) {
      if (cancelled) return;
      setDisplayed(text.slice(0, i));
      if (i <= text.length) {
        setTimeout(() => type(i + 1), 60);
      }
    }
    type(1);
    return () => { cancelled = true; };
  }, [text, trigger]);
  return <span>{displayed}</span>;
}

const MapModal = ({ open, onClose, onTeleport }) => {
  const [selectedBiome, setSelectedBiome] = useState(null);
  const [detailsText, setDetailsText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod.");
  const [decodeReveal, setDecodeReveal] = useState(false);
  const selectedBiomeObj = selectedBiome
    ? biomes.find(b => b.id === selectedBiome)
    : null;
  const locationName = selectedBiomeObj?.locationName || "";
  const locationDetails = selectedBiomeObj?.details || "";

  // When selectedBiome changes, trigger decode effect to reveal new details
  React.useEffect(() => {
    if (selectedBiomeObj) {
      setDecodeReveal(false);
      // Start with scrambled text, then reveal new details after a short delay
      setTimeout(() => {
        setDetailsText(locationDetails);
        setDecodeReveal(true);
      }, 1200);
    } else {
      setDetailsText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod.");
      setDecodeReveal(false);
    }
    // eslint-disable-next-line
  }, [selectedBiome]);
  if (!open) return null;
  return (
    <div className="map-modal-overlay" onClick={() => { setSelectedBiome(null); onClose(); }}>
      <div className="map-modal" onClick={e => e.stopPropagation()}>
        <div className="map-modal-left">
          <img src="/images/world.png" alt="World Map" className="map-image" />
          {biomes.map(biome => (
            <div
              key={biome.id}
              className="map-marker-container"
              style={{ position: 'absolute', left: `${biome.x}%`, top: `${biome.y}%` }}
            >
              <div className="map-marker-tooltip">{biome.locationName}</div>
              <button
                className="map-marker map-marker-icon"
                onClick={() => setSelectedBiome(biome.id)}
                aria-label={biome.label}
              >
                <img src="/images/map_icon.png" alt="Map Marker" className="map-marker-img" />
              </button>
            </div>
          ))}
        </div>
        <div className="map-modal-right">
          <div className="biome-info">
            <div className="unit-title">Earth-355</div>
            {/* Use either TypewriterText or DecodeText below as needed: */}
            <h2 className="location-title">
              <TypewriterText text={locationName} trigger={selectedBiome} />
            </h2>
            <hr className="biome-divider" />
            <img src="/images/black_damascus_topography.jpg" alt="Biome" className="biome-thumb" />
            <hr className="biome-divider" />
            <h3 style={{ color: '#ff003c', margin: '1.2rem 0 0.5rem 0', fontFamily: 'Dune, Orbitron, sans-serif', fontWeight: 700, letterSpacing: '0.08em' }}>Location Details</h3>
            <p style={{ minHeight: '2.5em', paddingTop: '0.5em' }}>
              <DecodeText text={detailsText} revealed={decodeReveal} className="decode-lorem" />
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.1em' }}>
              <span style={{ color: '#fff', fontSize: '1rem', fontFamily: 'Instrument Sans, Syne Mono, sans-serif', letterSpacing: '0.04em' }}>Server loading . . . . . . . . . .</span>
              <span className="red-loading-circle" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.7em' }}>
              <span style={{ color: '#fff', fontSize: '1rem', fontFamily: 'Instrument Sans, Syne Mono, sans-serif', letterSpacing: '0.04em' }}>Encrypting Data . . . . . . . . .</span>
              <span className="red-loading-circle" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.7em' }}>
              <span style={{ color: '#fff', fontSize: '1rem', fontFamily: 'Instrument Sans, Syne Mono, sans-serif', letterSpacing: '0.04em' }}>Fetching Diagnostics . . . . . . .</span>
              <span className="red-loading-circle" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.7em' }}>
              <span style={{ color: '#fff', fontSize: '1rem', fontFamily: 'Instrument Sans, Syne Mono, sans-serif', letterSpacing: '0.04em' }}>Parsing Neural Grid . . . . . . .</span>
              <span className="red-loading-circle" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.7em' }}>
              <span style={{ color: '#fff', fontSize: '1rem', fontFamily: 'Instrument Sans, Syne Mono, sans-serif', letterSpacing: '0.04em' }}>Decoding Transmission . . . . . .</span>
              <span className="red-loading-circle" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.7em' }}>
              <span style={{ color: '#fff', fontSize: '1rem', fontFamily: 'Instrument Sans, Syne Mono, sans-serif', letterSpacing: '0.04em' }}>Configuring Vehicle Transport . .</span>
              <span className="red-loading-circle" />
            </div>
            <TeleportButton onClick={() => {/* Add teleport logic here if needed */}} />
          </div>
        </div>
        <button className="close-btn" onClick={() => { setSelectedBiome(null); onClose(); }}>×</button>
      </div>
    </div>
  );
};

export default MapModal;
