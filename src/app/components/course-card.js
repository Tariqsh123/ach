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
  image = "https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1699885960867-56d5f5262d38%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200&auto=format&fit=crop&q=60",
  buttonText = "View Courses",
  buttonLink = "/courses"
}) {
  return (
    <div
      className="w-[280px] h-[380px] md:w-[350px] md:h-[470px] bg-none border-2 border-white overflow-hidden flex flex-col p-2 items-center"
      style={{
        transform: "rotateX(1deg) rotateY(-1deg)",
        perspective: "1200px",
      }}
    >
      {/* Image */}
      <div className="h-44 md:h-56 w-full overflow-hidden border-2 border-white">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-between flex-1 p-2 items-center text-center">
        <div>
          <h3
            className={`${signika.className} text-2xl md:text-3xl font-bold mb-1`}
            style={{
              color: "#fff",
              textShadow: `
                1px 1px 0 #00000080,
                2px 2px 2px rgba(0,0,0,0.5),
                0 0 8px #ffffff80
              `,
            }}
          >
            {title}
          </h3>
          <p
            className={`${signika.className} text-xs md:text-sm`}
            style={{
              color: "#fff",
              textShadow: `
                1px 1px 0 #00000060,
                2px 2px 2px rgba(0,0,0,0.4)
              `,
            }}
          >
            {subtitle}
          </p>
          <div className="mt-2 w-16 h-[2px] bg-[#9cbcb8] mx-auto"></div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <Link
            href={buttonLink}
            className="relative inline-block 
              px-5 py-2 text-xs md:px-10 md:py-3 md:text-lg xl:text-xl
              text-white font-sans
              bg-gradient-to-b from-[#7ae1d6] to-[#3ba99b]
              shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.3),
                      0_4px_10px_rgba(96,191,180,0.8),0_0_25px_rgba(96,191,180,0.6)]
              before:content-[''] before:absolute before:inset-0
              before:border before:border-white/30 before:animate-pulse
              "
            style={{
              clipPath:
                "polygon(8% 0, 92% 0, 100% 25%, 100% 75%, 92% 100%, 8% 100%, 0 75%, 0 25%)",
            }}
          >
            <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
              {buttonText}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
