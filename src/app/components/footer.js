"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaDiscord, FaYoutube, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Signika } from "next/font/google";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8 w-full border-t border-gray-800">
      <div className="max-w-[1400px] w-[95%] mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-0 text-center md:text-left items-center md:items-start">

        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex flex-col">
            <span
              className={`${signika.className} text-white text-2xl font-bold uppercase`}
              style={{
                textShadow: '0 0 5px #7ae1d6,0 0 5px darkcyan',
              }}
            >
              Achievers Corner
            </span>
            <span className={`${signika.className} text-white text-base font-medium`}>
              House of Technology
            </span>
          </div>

          <p className="text-sm">Connect with us on socials</p>
          <div className="flex gap-4 text-white text-lg justify-center md:justify-start">
            <a href="#" className="hover:text-[#7ae1d6] transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-[#7ae1d6] transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-[#7ae1d6] transition-colors"><FaDiscord /></a>
            <a href="#" className="hover:text-[#7ae1d6] transition-colors"><FaYoutube /></a>
            <a href="#" className="hover:text-[#7ae1d6] transition-colors"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-2 text-sm items-center md:items-start">
          <h3 className={`${signika.className} font-bold text-white`}>Quick Links</h3>
          <Link href="/" className="hover:text-[#7ae1d6] transition-colors">Home</Link>
          <Link href="/courses" className="hover:text-[#7ae1d6] transition-colors">Courses</Link>
          <Link href="/contact" className="hover:text-[#7ae1d6] transition-colors">Contact</Link>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col gap-2 text-sm items-center md:items-start">
          <h3 className={`${signika.className} font-bold text-white`}>Legal</h3>
          <Link href="/privacy" className="hover:text-[#7ae1d6] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#7ae1d6] transition-colors">Terms & Conditions</Link>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2 text-sm items-center md:items-start">
          <h3 className={`${signika.className} font-bold text-white`}>Get In Touch</h3>
          <p className="flex items-center gap-2 justify-center md:justify-start">
            <FaPhoneAlt className="text-[#7ae1d6]" /> <span className="font-semibold">+92 318 3609193</span>
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope className="text-[#7ae1d6]" /> 
            <a href="mailto:awaismohammad395@gmail.com" className="hover:text-[#7ae1d6] transition-colors">
              awaismohammad395@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-start">
            <FaMapMarkerAlt className="text-[#7ae1d6]" /> Johar Chowk Market, Ghaziabad, Karachi, Pakistan
          </p>
        </div>

      </div>

      <div className="mt-12 w-[90%] mx-auto text-center text-xs md:text-sm border-t border-gray-700 pt-4 text-gray-400">
        © 2025 Achievers Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
