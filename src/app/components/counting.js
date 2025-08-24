"use client";

import { useEffect, useState } from "react";
import { Signika } from "next/font/google";

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

  return (
    <section className="w-full flex justify-center px-4">
      <div className="grid grid-cols-3 gap-4 w-full max-w-6xl">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="py-6 rounded-2xl border border-[transparent] 
                       text-center transition duration-300 flex-1"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4"
              style={{
                color: "#fff",
                textShadow: `
                  1px 1px 0 #9cbcb8, 
                  2px 2px 2px rgba(156, 188, 184, 0.4),
                  4px 4px 6px rgba(0, 0, 0, 0.6)
                `,
              }}
            >
              {counts[index]}
              {counter.suffix}
            </h2>
            <p
              className={`${signika.className} text-xs sm:text-sm md:text-base lg:text-lg text-white`}
              style={{
                textShadow: `
                  1px 1px 0 #9cbcb8,
                  2px 2px 2px rgba(156, 188, 184, 0.3),
                  3px 3px 5px rgba(0, 0, 0, 0.4)
                `,
              }}
            >
              {counter.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
