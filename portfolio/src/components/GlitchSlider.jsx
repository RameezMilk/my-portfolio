import React, { useState, useEffect } from 'react';
import '../styles/GlitchSlider.css';
import myImage from '../assets/my-image.png';
import aiImage from '../assets/ai-image.png';

const GlitchSlider = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setContainerHeight(window.innerHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setShowOverlay(prev => !prev);
        setIsGlitching(false);
      }, 500); // Glitch duration
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glitch-container" style={{ height: containerHeight }}>
      <div className="image-stack">
        <div className="image-wrapper">
          <img 
            src={myImage} 
            alt="Base" 
            className={`base-image ${isGlitching ? 'glitch' : ''}`}
          />
        </div>
        <div className="image-wrapper">
          <img 
            src={aiImage} 
            alt="Overlay" 
            className={`overlay-image ${isGlitching ? 'glitch' : ''}`}
            style={{ opacity: showOverlay ? 1 : 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default GlitchSlider; 