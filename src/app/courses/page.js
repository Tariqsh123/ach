"use client";

import Navbar from "../components/navbar";
import { Signika } from "next/font/google";
import CardCourse from "../components/course-card";
import Footer from "../components/footer";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const courses = [
  {
    title: "Front End Development",
    subtitle: "HTML, CSS, JavaScript, Bootstrap, Tailwind",
    image: "https://img.icons8.com/?size=100&id=122637&format=png&color=FFFFFF",
    buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
  {
    title: "Back End Development",
    subtitle: "HTML, CSS, JavaScript, Bootstrap, MySQL, PHP",
    image: "https://img.icons8.com/?size=100&id=21893&format=png&color=FFFFFF",
    buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
  {
    title: "Short Course",
    subtitle: "MS Office , Video Editing , Digital Marketing , Advance Excel",
    image: "https://img.icons8.com/?size=100&id=UhLOvILFLW4o&format=png&color=FFFFFF",
   buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
  {
    title: "Art Work 1.0",
    subtitle: "Canva , Photoshop , Illustrator , AI Tools",
    image: "https://img.icons8.com/?size=100&id=xyRvrIeSXuZz&format=png&color=FFFFFF",
    buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
  {
    title: "Art Work 2.0",
    subtitle: "Canva, Photoshop, Illustrator, CH Animation, Figma",
    image: "https://img.icons8.com/?size=100&id=CR3Gf0kpN6JQ&format=png&color=FFFFFF",
   buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
  {
    title: "ACIT Vol 2.1",
    subtitle: "MS Office, PPT, Networking, Canva, Photoshop, Illustrator, AI Tools, HTML, CSS, JavaScript, Bootstrap, Tailwind",
    image: "https://img.icons8.com/?size=100&id=JgERB2cdmWYp&format=png&color=FFFFFF",
   buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      {/* Heading */}
      <h1
  className={`${signika.className} text-4xl sm:text-5xl md:text-6xl font-bold mt-12 mb-8 text-white text-center`}
  style={{
    textShadow: `
      0 0 30px rgba(58,169,155,0.7)
    `,
  }}
>
  Our Courses
</h1>


      {/* Courses Container */}
      <div
        className="mx-auto flex flex-wrap justify-center items-center gap-2.5 md:gap-4 lg:gap-10"
        style={{
          maxWidth: "1400px",
          width: "95%",
          paddingBottom:"30px"
        }}
      >
        {courses.map((course, index) => (
          <CardCourse
            key={index}
            title={course.title}
            subtitle={course.subtitle}
            image={course.image}
            buttonText={course.buttonText}
            buttonLink={course.buttonLink}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
}
