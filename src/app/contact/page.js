"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Signika } from "next/font/google"; // using Signika font

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <div className="bg-black text-white min-h-[80vh] flex flex-col items-center justify-center py-16 px-4">
        {/* Heading */}
        <h1
          className={`${signika.className} 
            text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 
            text-center leading-tight [text-wrap:balance] mb-6 min-h-[1.4em] mx-auto max-w-xs sm:max-w-2xl`}
          style={{
            textShadow: `
              1px 1px 0 #9cbcb8, 
              2px 2px 2px rgba(156, 188, 184, 0.4),
              4px 4px 6px rgba(0, 0, 0, 0.6)
            `,
          }}
        >
          Contact Information
        </h1>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center text-lg md:text-xl text-center md:text-left">
          {/* Phone */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <FaPhoneAlt className="text-white text-2xl" />
            <span>+92 317 2443717</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <FaEnvelope className="text-white text-2xl" />
            <span>awaismohammad395@gmail.com</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <FaMapMarkerAlt className="text-white text-2xl" />
            <span>Johar Chowk Market, Ghaziabad, Karachi, Pakistan</span>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7234.169384251924!2d66.992182!3d24.963233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36b7f78a1ea19%3A0x6454d8556b385b2e!2sAchievers'%20Corner%20Professional%20Computer%20Institute!5e0!3m2!1sen!2sus!4v1756055511147!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}
