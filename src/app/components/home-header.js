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
    <header className="flex items-center justify-center min-h-[40vh] md:min-h-[60vh] px-6 text-center">
      <div className="max-w-6xl">
        {/* Animated Headings */}
        <h1
          className={`${signika.className} 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 
            text-white leading-tight [text-wrap:balance] mb-6 min-h-[1.4em] mx-auto max-w-xs sm:max-w-2xl`}
          style={{
            textShadow: `
              0 0 2px #7ae1d6,
              0 0 5px #7ae1d6,
              0 0 10px #3ba99b,
              0 0 20px #3ba99b,
              0 0 30px rgba(58,169,155,0.7)
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
              style={{ willChange: 'transform, opacity' }}
            >
              {headings[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        {/* Paragraph */}
        <p
          className="mt-4 text-xs sm:text-base md:text-lg xl:text-xl text-white font-light leading-relaxed"
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

        {/* Button */}
        <div className="mt-6">
          <Link href="/courses" passHref>
            <button style={{ '--clr': '#7ae1d6' }}>
              <span>View Courses</span>
              <i></i>
            </button>
          </Link>

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
                0 6px 10px rgba(0,0,0,0.9),
                0 0 5px #7ae1d6,
                0 0 10px #7ae1d6,
                0 0 20px #3ba99b,
                0 0 30px rgba(58,169,155,0.7);
            }

            @keyframes move {
              0% { transform: translateX(0); }
              50% { transform: translateX(5px); }
              100% { transform: translateX(0); }
            }

            /* Mobile optimizations */
            @media (max-width: 768px) {
              h1 {
                font-size: 3.5rem !important; /* bigger heading */
                text-shadow:
                  0 0 2px #7ae1d6,
                  0 0 5px #7ae1d6;
              }
              p {
                font-size: 0.875rem !important; /* smaller paragraph */
              }
              button {
                font-size: x-small !important; /* smaller button text */
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
