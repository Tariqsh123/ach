"use client";

import { useState, useEffect } from "react";
import { Signika } from "next/font/google";

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayoutClient({ children }) {
  const [loading, setLoading] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Check if loader has been shown before
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");

    if (!hasLoaded) {
      // First time — show loader
      setLoading(true);

      const timer = setTimeout(() => {
        setExit(true); // shutter animation
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("hasLoadedBefore", "true");
        }, 800);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className={`${signika.variable} antialiased`}>
      {children}

      {loading && (
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 ${
            exit ? "animate-shutter-up" : ""
          }`}
        >
          {/* Futuristic 3D Cubes */}
          <div className="relative w-64 h-64 flex items-center justify-center mb-8">
            <div className="tech-cube absolute w-28 h-28 animate-spin-cube" />
            <div className="tech-cube absolute w-20 h-20 animate-spin-cube animation-delay-150" />
            <div className="tech-cube absolute w-16 h-16 animate-spin-cube animation-delay-300" />
          </div>

          {/* Loading text */}
          <p
            className="text-white text-2xl md:text-4xl font-bold animate-pulse tracking-wider text-center"
            style={{
              textShadow: `
                0 0 2px #7ae1d6,
                0 0 6px rgba(58,169,155,0.6)
              `,
            }}
          >
            Unlock Your Potential
          </p>

          <style jsx>{`
            .tech-cube {
              background: linear-gradient(135deg, #9cbcb8, #517c77);
              border: 1.5px solid rgba(122, 225, 214, 0.4);
              border-radius: 8px;
              box-shadow:
                0 0 4px rgba(122, 225, 214, 0.4),
                0 0 10px rgba(58, 169, 155, 0.5),
                inset 0 0 6px rgba(122, 225, 214, 0.2);
              transform-style: preserve-3d;
            }

            @keyframes spin-cube {
              0% {
                transform: rotateX(0deg) rotateY(0deg) translateZ(0);
              }
              50% {
                transform: rotateX(180deg) rotateY(180deg) translateZ(40px);
              }
              100% {
                transform: rotateX(360deg) rotateY(360deg) translateZ(0);
              }
            }
            .animate-spin-cube {
              animation: spin-cube 1.8s ease-in-out infinite;
            }
            .animation-delay-150 {
              animation-delay: 0.15s;
            }
            .animation-delay-300 {
              animation-delay: 0.3s;
            }

            @keyframes shutter-up {
              0% {
                transform: translateY(0%);
              }
              100% {
                transform: translateY(-100%);
              }
            }
            .animate-shutter-up {
              animation: shutter-up 0.8s ease-in-out forwards;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
