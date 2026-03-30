"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Signika } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const signika = Signika({ subsets: ["latin"], weight: ["400", "600", "700"] });

const testimonials = [
  {
    name: "Sir Muhammad Owais",
    role: "Full Stack Developer",
    message:
      "Sir Owais brings exceptional expertise and guidance, making complex concepts easy to understand.",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    name: "Miss Aisha",
    role: "Graphic Designer",
    message:
      "Miss Aisha’s creativity and design skills inspire students to explore new ideas with confidence.",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    name: "Miss Sobia Naz",
    role: "Graphic Designer",
    message:
      "Miss Sobia’s attention to detail and innovative approach ensures every project stands out.",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    name: "Miss Naureen",
    role: "SRO",
    message:
      "Miss Naureen’s dedication and organizational skills help maintain a smooth and efficient workflow.",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
];

export default function TeachersTestimonial() {
  const N = testimonials.length;
  const viewportRef = useRef(null);

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);

  // clones for infinite loop
  const leftClones = testimonials.slice(-slidesPerView);
  const rightClones = testimonials.slice(0, slidesPerView);
  const allSlides = [...leftClones, ...testimonials, ...rightClones];

  // current index in the allSlides array. Start at slidesPerView so we are at first real slide.
  const [current, setCurrent] = useState(slidesPerView);
  const currentRef = useRef(current);
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  // transition control for instant jump vs animated
  const [disableTransition, setDisableTransition] = useState(false);
  const transitionDurationMs = 500; // animation duration in ms
  const transitionDurationSec = transitionDurationMs / 1000;

  // prevent double clicks while animating
  const animatingRef = useRef(false);

  // compute responsive slidesPerView and slideWidth
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      // tweak breakpoints as you like
      const spvCandidate = w < 768 ? 1 : w < 1024 ? 2 : 3;
      const spv = Math.min(spvCandidate, Math.max(1, N)); // never exceed N
      setSlidesPerView(spv);

      // compute slide width based on viewport container width
      const viewport = viewportRef.current;
      if (viewport) {
        setSlideWidth(Math.floor(viewport.clientWidth / spv - 5)); // subtract 5px gap
      }
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [N]);

  // whenever slidesPerView changes, reset current to the proper offset
  useEffect(() => {
    setDisableTransition(true);
    setCurrent(slidesPerView);
    const t = setTimeout(() => setDisableTransition(false), 20);
    return () => clearTimeout(t);
  }, [slidesPerView]);

  // keep a consistent ref for slideWidth changes
  const slideWidthRef = useRef(slideWidth);
  useEffect(() => {
    slideWidthRef.current = slideWidth;
  }, [slideWidth]);

  // core next/prev functions with infinite-loop correction
  const nextSlide = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const newIndex = currentRef.current + 1;
    setCurrent(newIndex);

    if (newIndex >= slidesPerView + N) {
      setTimeout(() => {
        setDisableTransition(true);
        setCurrent(slidesPerView);
        setTimeout(() => {
          setDisableTransition(false);
          animatingRef.current = false;
        }, 20);
      }, transitionDurationMs);
    } else {
      setTimeout(() => {
        animatingRef.current = false;
      }, transitionDurationMs);
    }
  };

  const prevSlide = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const newIndex = currentRef.current - 1;
    setCurrent(newIndex);

    if (newIndex < slidesPerView) {
      setTimeout(() => {
        setDisableTransition(true);
        setCurrent(slidesPerView + N - 1);
        setTimeout(() => {
          setDisableTransition(false);
          animatingRef.current = false;
        }, 20);
      }, transitionDurationMs);
    } else {
      setTimeout(() => {
        animatingRef.current = false;
      }, transitionDurationMs);
    }
  };

  // auto-slide interval
  useEffect(() => {
    const id = setInterval(() => {
      if (!slideWidthRef.current) return;
      nextSlide();
    }, 4000);
    return () => clearInterval(id);
  }, [slidesPerView, slideWidth]);

  // drag handler
  const handleDragEnd = (event, info) => {
    const offsetX = info.offset.x;
    const threshold = (slideWidthRef.current || 200) * 0.25;
    if (offsetX < -threshold) {
      nextSlide();
    } else if (offsetX > threshold) {
      prevSlide();
    } else {
      setDisableTransition(false);
      setCurrent((c) => c);
    }
  };

  // computed X transform in pixels
  const translateX = -current * (slideWidth + 5); // include gap

  return (
    <div className="w-full py-16 relative">
      <div className="w-full max-w-[1200px] mx-auto text-center px-4">
        <h1
          className={`${signika.className} text-4xl md:text-5xl font-bold text-white`}
        >
          Meet Our Experienced Instructors
        </h1>
        <p className="text-gray-400 mt-4 text-lg md:text-xl">
          Our dedicated teachers are here to guide you on your learning journey
          with expertise and passion.
        </p>

        <div className="mt-12 relative overflow-hidden" ref={viewportRef}>
          {/* track */}
          <motion.div
            className="flex items-stretch"
            drag="x"
            dragElastic={0.12}
            onDragEnd={handleDragEnd}
            animate={{ x: translateX }}
            transition={
              disableTransition
                ? { duration: 0 }
                : { duration: transitionDurationSec, ease: "easeOut" }
            }
            style={{ cursor: "grab", userSelect: "none", gap: "5px" }}
          >
            {allSlides.map((t, i) => (
              <div
                key={i + "-" + t.name}
                className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl p-6 text-[#7ae1d6] relative overflow-hidden shadow-lg flex-shrink-0 flex flex-col justify-between"
                style={{
                  flex: `0 0 ${slideWidth}px`,
                  maxWidth: `${slideWidth}px`,
                }}
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

                <p className="text-gray-200 mt-2 text-left leading-relaxed">
                  {t.message}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="absolute top-1/2 -left-3 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-md z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="absolute top-1/2 -right-3 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-md z-20"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
