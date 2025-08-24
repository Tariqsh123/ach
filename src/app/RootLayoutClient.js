"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayoutClient({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
          {/* Big 3D cubes */}
          <div className="relative w-64 h-64 flex items-center justify-center mb-8">
            <div className="absolute w-28 h-28 bg-gradient-to-tr from-[#9cbcb8] to-[#517c77] rounded-lg shadow-2xl animate-spin-cube" />
            <div className="absolute w-20 h-20 bg-gradient-to-tr from-[#517c77] to-[#9cbcb8] rounded-lg shadow-2xl animate-spin-cube animation-delay-150" />
            <div className="absolute w-16 h-16 bg-gradient-to-tr from-[#9cbcb8] to-[#517c77] rounded-lg shadow-2xl animate-spin-cube animation-delay-300" />
          </div>

          {/* Loading text */}
          <p className="text-white text-2xl md:text-4xl font-bold animate-pulse tracking-wider">
            Unlock Your Potential . . .
          </p>

          <style jsx>{`
            @keyframes spin-cube {
              0% { transform: rotateX(0deg) rotateY(0deg) translateZ(0); }
              50% { transform: rotateX(180deg) rotateY(180deg) translateZ(40px); }
              100% { transform: rotateX(360deg) rotateY(360deg) translateZ(0); }
            }
            .animate-spin-cube {
              animation: spin-cube 1.5s linear infinite;
              transform-style: preserve-3d;
            }
            .animation-delay-150 {
              animation-delay: 0.15s;
            }
            .animation-delay-300 {
              animation-delay: 0.3s;
            }
          `}</style>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
