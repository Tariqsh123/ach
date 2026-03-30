"use client";

import { Signika } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) setProjects(JSON.parse(saved).reverse()); // newest first
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section className="w-full py-16 px-6 text-white overflow-hidden bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`${signika.className} text-4xl md:text-5xl font-bold mb-12 text-center tracking-wide`}
        >
          Student Projects
        </h2>

        {projects.length === 0 && (
          <p className="text-center text-gray-400">No projects yet</p>
        )}

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {visibleProjects.map((project, idx) => {
            const rotations = ["-3deg", "2deg", "-1deg"];
            const rotate = rotations[idx % rotations.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer group border-2 border-white"
                style={{ rotate }}
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <span className="text-white text-2xl md:text-3xl font-bold tracking-wider drop-shadow-lg">
                        See Project
                      </span>
                    </div>

                    {/* Always-visible info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 rounded-b-xl">
                      <h3
                        className="text-xl font-bold"
                        style={{ color: "#00c7b2" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        By: {project.student}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Show More Button */}
        {visibleCount < projects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleShowMore}
              className="px-8 py-3 bg-gray-900 border-2 border-white text-white font-semibold rounded-full hover:shadow-lg hover:shadow-white/50 transition text-lg"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
