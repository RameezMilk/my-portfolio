
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VulcanLandingCutscene = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setFadeIn(true);
    const timeout = setTimeout(() => {
      navigate("/");
  }, 2000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#000",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 1.2s cubic-bezier(0.4,0,0.2,1)"
      }}
    >
      <video
        ref={videoRef}
        src="/videos/Vulcan_Landing.mp4"
        style={{ width: "100vw", height: "100vh", objectFit: "cover", opacity: 0.92 }}
        autoPlay
        muted
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "3rem",
          fontFamily: "'Orbitron', 'Syne Mono', sans-serif",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textShadow: "0 2px 24px #000, 0 1px 2px #222"
        }}
      >
        Vulcan Landing
      </div>
    </div>
  );
};

export default VulcanLandingCutscene;
