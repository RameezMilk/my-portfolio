import React, { useRef, useEffect, useState } from "react";

const decodeLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function DecodeScroll({ text, className }) {
  const [revealed, setRevealed] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const containerRef = useRef();
  const scrambleRef = useRef();

  // Intersection Observer to trigger reveal
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Scramble or reveal effect
  useEffect(() => {
    if (!revealed) {
      scrambleRef.current = setInterval(() => {
        setDisplayed(
          (text || "").split("").map((char) => (char === " " ? " " : decodeLetters[Math.floor(Math.random() * decodeLetters.length)])).join("")
        );
      }, 90);
    } else {
      let i = 0;
      clearInterval(scrambleRef.current);
      function revealStep() {
        setDisplayed(text.slice(0, i) +
          (text.slice(i).split("").map((char) => (char === " " ? " " : decodeLetters[Math.floor(Math.random() * decodeLetters.length)])).join(""))
        );
        if (i < text.length) {
          setTimeout(revealStep, 32);
          i++;
        } else {
          setDisplayed(text);
        }
      }
      revealStep();
    }
    return () => clearInterval(scrambleRef.current);
  }, [revealed, text]);

  const fontFamily = revealed ? 'Syne Mono, monospace' : 'Sankofa Display, sans-serif';

  return (
    <span
      ref={containerRef}
      className={className}
      style={{ fontFamily, color: className ? undefined : '#ff003c', background: 'none', letterSpacing: '0.04em', fontSize: '0.92rem', display: 'inline-block' }}
    >
      {displayed}
    </span>
  );
}

export default DecodeScroll;
