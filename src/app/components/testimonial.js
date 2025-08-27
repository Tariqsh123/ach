// components/TeachersTestimonial.js
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Signika } from "next/font/google";

const signika = Signika({ subsets: ["latin"], weight: ["400", "600", "700"] });

const testimonials = [
  {
    name: "Sir Muhammad Owais",
    role: "Full Stack Developer",
    message: "Sir Owais brings exceptional expertise and guidance, making complex concepts easy to understand.",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    name: "Miss Aisha",
    role: "Graphic Designer",
    message: "Miss Aisha’s creativity and design skills inspire students to explore new ideas with confidence.",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    name: "Miss Sobia Naz",
    role: "Graphic Designer",
    message: "Miss Sobia’s attention to detail and innovative approach ensures every project stands out.",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    name: "Miss Naureen",
    role: "SRO",
    message: "Miss Naureen’s dedication and organizational skills help maintain a smooth and efficient workflow.",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
];

export default function TeachersTestimonial() {
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [xPos, setXPos] = useState(0); // current x position

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
        setCarouselWidth(totalWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleDragStart = () => setIsDragging(true);

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    let newX = xPos + info.offset.x;

    // limit drag boundaries
    if (newX > 0) newX = 0;
    if (newX < -carouselWidth) newX = -carouselWidth;

    setXPos(newX);
  };

  return (
    <div className="w-full py-16">
      <div className="w-full max-w-[1200px] mx-auto text-center px-4">
        <h1 className={`${signika.className} text-4xl md:text-5xl font-bold text-white`}>
          Meet Our Experienced Instructors
        </h1>
        <p className="text-gray-400 mt-4 text-lg md:text-xl">
          Our dedicated teachers are here to guide you on your learning journey with expertise and passion.
        </p>

        <div
          className="overflow-hidden mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={carouselRef}
            className="flex gap-6 cursor-grab"
            drag="x"
            dragConstraints={{ left: -carouselWidth, right: 0 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={{ x: xPos }}
            whileTap={{ cursor: "grabbing" }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[33.333%] 
                           bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 
                           rounded-2xl p-6 text-[#7ae1d6] relative overflow-hidden"
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#7ae1d6]/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#7ae1d6]/10 rounded-full"></div>

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-2 border-[#7ae1d6]"
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{t.name}</h3>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>

                <p className="text-gray-200 mt-2 text-left leading-relaxed">{t.message}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
