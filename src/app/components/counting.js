"use client";

import { useEffect, useState } from "react";
import { Signika } from "next/font/google";
import { motion } from "framer-motion";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const counters = [
  { label: "Certified Students", value: 600, suffix: "+" },
  { label: "Total Students", value: 1000, suffix: "+" },
  { label: "Teachers", value: 50, suffix: "+" },
];

export default function Counting() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    counters.forEach((counter, index) => {
      let start = 0;
      const end = counter.value;
      const duration = 2000; // 2s
      const incrementTime = 20;
      const step = Math.ceil(end / (duration / incrementTime));

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
      }, incrementTime);
    });
  }, []);

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.05 },
  };

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {counters.map((counter, index) => (
          <motion.div
            key={index}
            className={`py-8 px-6 rounded-2xl border ${
              index === 1 ? "border-[#7ae1d6]" : "border-white/30"
            } bg-white/5 flex flex-col items-center cursor-pointer`}
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              transform: index === 1 ? "scale(1.1)" : "scale(1)",
            }}
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-4 text-white ${
                index === 1 ? "text-4xl sm:text-5xl md:text-6xl" : ""
              }`}
            >
              {counts[index]}
              {counter.suffix}
            </h2>
            <p
              className={`${signika.className} text-sm sm:text-base md:text-lg font-medium text-white`}
            >
              {counter.label}
            </p>
            {/* Animate border color on hover for center box */}
            {index === 1 && (
              <style jsx>{`
                div:hover {
                  border-color: #3ba99b;
                  transition: border-color 0.3s ease;
                }
              `}</style>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
