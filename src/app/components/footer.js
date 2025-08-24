"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaDiscord, FaYoutube, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Signika } from "next/font/google";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6 w-full">
      <div className="max-w-[1400px] w-[95%] mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-0 text-center md:text-left items-center md:items-start">

        {/* Left Section - Logo + Socials */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src="/Logo No Bg.png"
            alt="Logo"
            width={120}
            height={60}
            className="object-contain"
          />
          <p className="text-sm">Let's connect with our socials</p>
          <div className="flex gap-3 text-white text-lg justify-center">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaDiscord /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Company Section */}
        <div className="flex flex-col gap-2 text-sm items-center md:items-start">
          <h3 className={`${signika.className} font-bold`}>Quick Links</h3>
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/courses" className="hover:text-gray-400">Courses</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Community / Legal Section */}
        <div className="flex flex-col gap-2 text-sm items-center md:items-start">
          <h3 className={`${signika.className} font-bold`}>Legal</h3>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms and Condition</a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2 text-sm items-center md:items-start">
          <h3 className={`${signika.className} font-bold`}>Get In Touch</h3>
          <p className="flex items-center gap-2 justify-center md:justify-start">
            <FaPhoneAlt className="text-white" /> <span className="font-semibold">+92 318 3609193</span>
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope className="text-white" /> <a href="mailto:awaismohammad395@gmail.com" className="hover:text-gray-400">awaismohammad395@gmail.com</a>
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-start">
            <FaMapMarkerAlt className="text-white" /> Johar Chowk Market, Ghaziabad, Karachi, Pakistan
          </p>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-sm">
        Copyright © 2025 Achievers Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
