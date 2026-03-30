"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Signika } from "next/font/google";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="sticky top-0 w-full z-50 h-[70px] flex items-center justify-between px-4 md:px-8 transition-all"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Logo / Desktop Text */}
      <Link href="/" className="flex items-center h-full">
        {/* Desktop Text */}
        <div className="hidden md:flex flex-col">
          <span
            className={`${signika.className} text-white text-2xl font-bold uppercase`}
            style={{
              textShadow: '0 0 5px #7ae1d6,0 0 5px darkcyan',
            }}
          >
            Achievers Corner
          </span>
          <span
            className={`${signika.className} text-white text-sm font-medium`} // reduced size
          >
            House of Technology
          </span>
        </div>

        {/* Mobile Image */}
        <div className="md:hidden">
          <Image
            src="/Logo No Bg.png"
            alt="Logo"
            width={120}
            height={63}
            className="h-[60px] w-auto object-contain filter brightness-0 invert"
          />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div
        className={`hidden md:flex gap-6 font-medium text-white h-full items-center ${signika.className}`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="transition-colors hover:text-[#7ae1d6]"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-6 h-6 focus:outline-none"
      >
        <span
          className={`block h-0.5 w-full bg-white mb-1 transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white mb-1 transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-1000 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255,0.8)",
          backdropFilter: "blur(10px)",
          position: "fixed",
          top: "70px",
        }}
      >
        <div
          className={`flex flex-col p-4 gap-4 text-white text-center ${signika.className}`}
        >
          {navItems.map((item) => (
            <Link
  key={item.name}
  href={item.href}
  className="text-black transition-colors hover:text-[#7ae1d6]"
  onClick={() => setIsOpen(false)}
>
  {item.name}
</Link>

          ))}
        </div>
      </div>
    </nav>
  );
}
