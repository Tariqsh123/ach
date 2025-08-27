"use client";

import { Signika } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function About() {
  return (
    <section className="w-full py-4  text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Left Collage */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center min-h-[360px]">

          {/* Bottom Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute rounded-xl overflow-hidden shadow-xl"
            style={{ width: "180px", height: "220px", top: "50px", left: "5%", zIndex: 1, rotate: "-16deg" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=400"
              alt="Collage 1"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>

          {/* Middle Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute rounded-xl overflow-hidden shadow-xl"
            style={{ width: "180px", height: "220px", top: "0px", left: "20%", zIndex: 2, rotate: "0deg" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=400"
              alt="Collage 2"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>

          {/* Top Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute rounded-xl overflow-hidden shadow-xl"
            style={{ width: "180px", height: "220px", top: "50px", left: "40%", zIndex: 3, rotate: "16deg" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&h=600&w=400"
              alt="Collage 3"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>

        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className={`${signika.className} text-4xl md:text-5xl font-bold mb-6`}>
            About Our Platform
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            We provide expert-led courses designed to empower your skills and knowledge. Our team of professionals ensures that every lesson is practical, engaging, and designed for real-world application.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
