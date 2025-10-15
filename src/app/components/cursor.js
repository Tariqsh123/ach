// components/NeonCursor.js
"use client";
import { useEffect, useState } from "react";

export default function NeonCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        pointerEvents: "none",
        backgroundColor: "white",
        boxShadow: `
          0 0 2px #7ae1d6,
          0 0 5px #7ae1d6,
          0 0 10px #3ba99b,
          0 0 20px #3ba99b,
          0 0 30px rgba(58,169,155,0.7)
        `,
      }}
    ></div>
  );
}
