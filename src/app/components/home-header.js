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
  const headings = [
    "Learn only from proven experts",
    "We share knowledge we’ve perfected",
    "We teach what we master, nothing less",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative flex items-center justify-center min-h-[40vh] md:min-h-[60vh] px-6 text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src='/bg.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div className="relative max-w-6xl z-10">
        {/* Animated Headings */}
        <h1
          className={`${signika.className} 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 
            text-white leading-tight [text-wrap:balance] mb-6 min-h-[1.4em] mx-auto max-w-xs sm:max-w-2xl`}
          style={{
            textShadow: `
              0 0 1px #7ae1d6,
              0 0 2px #7ae1d6,
              0 0 5px #3ba99b,
              0 0 15px #3ba99b,
              0 0 20px rgba(58,169,155,0.7)
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
              style={{ willChange: "transform, opacity" }}
            >
              {headings[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        {/* Paragraph */}
        <p className="mt-4 text-xs sm:text-base md:text-lg xl:text-xl text-white font-light leading-relaxed">
          Learn from industry professionals and take your skills to the next
          level with courses designed to empower your growth.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link href="/courses" passHref>
            <button style={{ "--clr": "#7ae1d6" }}>
              <span>View Courses</span>
              <i></i>
            </button>
          </Link>

          {/* Button Styling */}
          <style jsx>{`
            button {
              position: relative;
              background: #000;
              color: #fff;
              text-transform: uppercase;
              border: 1px solid white;
              font-size: 1rem;
              padding: 10px 20px;
              border-radius: 20px;
              cursor: pointer;
              transition: box-shadow 0.2s ease-out;
              box-shadow: 
                0 4px 6px rgba(0,0,0,0.8),
                0 0 2px #7ae1d6,
                0 0 5px #7ae1d6,
                0 0 10px #3ba99b;
              overflow: visible;
            }

            button span {
              position: relative;
              z-index: 1;
            }

            button::before {
              content: "";
              position: absolute;
              inset: 2px;
              background: #000;
              border-radius: 25px;
            }

            button i {
              position: absolute;
              inset: 0;
              display: block;
            }

            button i::before,
            button i::after {
              content: '';
              position: absolute;
              width: 15px;
              height: 5px;
              background: #000;
              border: 2px solid var(--clr);
              transition: 0.2s;
            }

            button i::before {
              top: -5px;
              left: 80%;
            }

            button i::after {
              bottom: -5px;
              left: 20%;
            }

            button:hover i::before {
              width: 20px;
              left: 20%;
              animation: move 2s infinite linear;
            }

            button:hover i::after {
              width: 20px;
              left: 80%;
              animation: move 2s infinite linear;
            }

            button:hover {
  color: #fff;
  background: #000;
  box-shadow: 
    0 4px 6px rgba(0,0,0,0.8),
    0 0 3px #7ae1d6,
    0 0 6px #7ae1d6,
    0 0 12px #3ba99b,
    0 0 18px rgba(58,169,155,0.7);
}

            @keyframes move {
              0% { transform: translateX(0); }
              50% { transform: translateX(5px); }
              100% { transform: translateX(0); }
            }

            @media (max-width: 768px) {
              h1 {
                font-size: 3.5rem !important;
                text-shadow:
                  0 0 2px #7ae1d6,
                  0 0 5px #7ae1d6;
              }
              p {
                font-size: 0.875rem !important;
              }
              button {
                font-size: x-small !important;
                padding: 8px 16px !important;
              }
              button i::before,
              button i::after {
                width: 12px;
                height: 4px;
              }
              button:hover i::before,
              button:hover i::after {
                animation: move 1.5s infinite linear;
              }
            }
          `}</style>
        </div>
      </div>
    </header>
  );
}
