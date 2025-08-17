import React, { useRef, useEffect } from "react";
const decodeLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
export default function DecodeText({ text, revealed, className }) {
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
  return (
    <span className={className}>
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
