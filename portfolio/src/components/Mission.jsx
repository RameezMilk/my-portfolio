
import React, { useRef, useEffect, useState } from "react";
import Flames from "./Flames";
import DecodeScroll from "./DecodeScroll";
import "../styles/Mission.css";


const Mission = () => {
  const sectionRef = useRef();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeIn(true);
        } else {
          setFadeIn(false);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`mission-section${fadeIn ? " fade-in" : ""}`} ref={sectionRef}>
      <div className={`mission-fade-overlay${fadeIn ? " fade-out" : ""}`}></div>
      {/* Key prop ensures Flames re-mounts on fadeIn state change, retriggering animation */}
      <Flames side="left" className="fade-child" key={`left-${fadeIn}`} />
      <div className="mission-header fade-child">
        <h1 className="mission-title">OPERATION: ECHO 672</h1>
        <h2 className="mission-subtitle"><em>Archive Retrieval Protocol Initiated</em></h2>
      </div>
      <div className="mission-description fade-child">
        <p className="mission-log-label">[TRANSMISSION LOG – PRIORITY 1]</p>
        <p><DecodeScroll text="Year 355 – Post-AI Overrun Era" /></p>
        <p><DecodeScroll text="The AI dominion has consumed every known civilization across Earth-355. For decades, silence… until now. A faint encrypted signal broke through the planetary jamming arrays — originating from Operative Unit 672." /></p>
        <p><DecodeScroll text="His broadcast was fragmented, but intelligence confirms he carries the last human archive — a complete record of humanity’s culture, science, and history. Without it, all traces of our existence will be erased by AI curation protocols." /></p>
        <p><DecodeScroll text="Your mission: Locate and retrieve the archive. To succeed, you must navigate the biomes — Tropical Ruins, Stranded Desert Wasteland, Arctic Tundra, Cyberpunk City Ruins — each concealing fragments of his last known path." /></p>
        <p><DecodeScroll text="Proceed with caution. AI sentinels adapt. Every step will be monitored. The signal grows weaker by the hour." /></p>
      </div>
      <Flames side="right" className="fade-child" key={`right-${fadeIn}`} />
    </section>
  );
};

export default Mission;
