"use client";
import Link from "next/link";
import { Signika } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function HomeHeader() {
  // Array of h1 texts
  const headings = [
    "Learn only from proven experts",
    "We share knowledge we’ve perfected",
    "We teach what we master, nothing less",
  ];

  const [index, setIndex] = useState(0);

  // Auto change heading every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <header className="flex items-center justify-center min-h-[40vh] md:min-h-[80vh] px-6 text-center">
      <div className="max-w-6xl">
        {/* Animated Headings */}
        <h1
          className={`${signika.className} 
            text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 
            text-white leading-tight [text-wrap:balance] mb-6 min-h-[1.4em] mx-auto max-w-xs sm:max-w-2xl`}
          style={{
            textShadow: `
              1px 1px 0 #9cbcb8, 
              2px 2px 2px rgba(156, 188, 184, 0.4),
              4px 4px 6px rgba(0, 0, 0, 0.6)
            `,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={headings[index]}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="block"
            >
              {headings[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        {/* Paragraph with responsive font size */}
        <p
          className="mt-4 text-sm sm:text-base md:text-lg xl:text-xl text-white font-light leading-relaxed"
          style={{
            textShadow: `
              1px 1px 0 #9cbcb8, 
              2px 2px 2px rgba(156, 188, 184, 0.4),
              4px 4px 6px rgba(0, 0, 0, 0.6)
            `,
          }}
        >
          Learn from industry professionals and take your skills to the next
          level with courses designed to empower your growth.
        </p>

        {/* 3D Neon Button with Futuristic Shape */}
        <div className="mt-6">
          <Link
            href="/courses"
            className="relative inline-block 
              px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-3 md:text-lg xl:text-xl
              text-white font-sans-serif
              bg-gradient-to-b from-[#7ae1d6] to-[#3ba99b]
              shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.3),
                      0_4px_10px_rgba(96,191,180,0.8),0_0_25px_rgba(96,191,180,0.6)]
              before:content-[''] before:absolute before:inset-0
              before:border before:border-white/30 before:animate-pulse
            "
            style={{
              clipPath:
                "polygon(8% 0, 92% 0, 100% 25%, 100% 75%, 92% 100%, 8% 100%, 0 75%, 0 25%)",
            }}
          >
            <span className="relative z-10 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
              View Courses
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
