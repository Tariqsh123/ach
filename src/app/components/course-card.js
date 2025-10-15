"use client";

import { Signika } from "next/font/google";
import Link from "next/link";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function CardCourse({
  title = "Front End",
  subtitle = "HTML, CSS, JavaScript, Bootstrap, Tailwind",
  image = "https://images.unsplash.com/opengraph/1x1.png",
  viewLink = "/courses",
  contactLink = "/contact",
}) {
  return (
    <div className="w-[320px] h-[360px] perspective-1000 group">
      <div className="flex flex-col items-center justify-between h-full bg-black/20 backdrop-blur-md rounded-xl border border-white transition-all duration-300 card-hover p-6">

        {/* Image */}
        <div className="w-24 h-24 rounded-xl overflow-hidden transition-transform duration-500 group-hover:rotate-10">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Text */}
        <div className="text-center mt-4 flex-1 flex flex-col justify-center">
          <h3
            className={`${signika.className} text-white text-2xl font-bold`}
            style={{
              textShadow: `
                0 0 10px darkcyan
              `,
            }}
          >
            {title}
          </h3>
          <p className="text-white/80 text-sm mt-2">{subtitle}</p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-center gap-4 w-full">
          {[{ text: "View Courses", link: viewLink }, { text: "Contact Us", link: contactLink }].map((btn, index) => (
            <Link href={btn.link} key={index} passHref>
              <button
                style={{ '--clr': '#7ae1d6' }}
                className="flex-1 relative uppercase text-[10px]  font-semibold py-2 px-5 rounded-full border border-white/30 bg-black/20 shadow-[0_0_6px_var(--clr)] hover:shadow-[0_0_10px_var(--clr)] transition-all duration-300"
              >
                <span className="relative z-10">{btn.text}</span>
                <i className="absolute inset-0 block"></i>
              </button>
            </Link>
          ))}
        </div>

      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        /* Card hover neon shadow */
        .card-hover:hover {
          box-shadow:
            0 0 1px #7ae1d6,
            0 0 3px #7ae1d6,
            0 0 5px #3ba99b,
            0 0 10px #3ba99b,
            0 0 15px rgba(58,169,155,0.7);
        }

        button i::before,
        button i::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 4px;
          background: #000;
          border: 2px solid var(--clr);
          transition: 0.2s;
        }

        button i::before { top: -5px; left: 80%; }
        button i::after { bottom: -5px; left: 20%; }

        button:hover i::before {
          width: 20px; left: 20%; animation: move 2s infinite linear;
        }

        button:hover i::after {
          width: 20px; left: 80%; animation: move 2s infinite linear;
        }

        @keyframes move {
          0% { transform: translateX(0); }
          50% { transform: translateX(5px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
