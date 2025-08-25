"use client";
import CardCourse from "./course-card";
import { Signika } from "next/font/google";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function PopularCourses() {
  const courses = [
    {
      title: "Front End Development",
      subtitle: "HTML, CSS, JavaScript, Bootstrap, Tailwind",
      image: "https://img.icons8.com/?size=100&id=122637&format=png&color=FFFFFF",
      buttonText: "View More Courses",
      buttonLink: "/courses",
    },
    {
      title: "Back End Development",
      subtitle: "HTML, CSS, JavaScript, Bootstrap, MySQL, PHP",
      image: "https://img.icons8.com/?size=100&id=21893&format=png&color=FFFFFF",
    buttonText: "View More Courses",
      buttonLink: "/courses",
    },
    {
      title: "Art Work 2.0",
      subtitle: "Canva, Photoshop, Illustrator, CH Animation, Figma",
      image: "https://img.icons8.com/?size=100&id=CR3Gf0kpN6JQ&format=png&color=FFFFFF",
      buttonText: "View More Courses",
      buttonLink: "/courses",
    },
    {
      title: "ACIT Vol 2.1",
      subtitle: "MS Office, PPT, Networking, Canva, Photoshop, Illustrator, AI Tools, HTML, CSS, JavaScript, Bootstrap, Tailwind",
      image: "https://img.icons8.com/?size=100&id=JgERB2cdmWYp&format=png&color=FFFFFF",
      buttonText: "View More Courses",
      buttonLink: "/courses",
    },
  ];

  return (
    <section className="w-full px-4 py-8 sm:py-12 md:py-16">
      {/* Heading */}
      <h2
        className={`${signika.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white text-center `}
        style={{
           textShadow: `
    0 0 2px #7ae1d6,
    0 0 5px #7ae1d6,
    0 0 10px #3ba99b,
    0 0 20px #3ba99b,
    0 0 30px rgba(58,169,155,0.7)
  `,
        }}
      >
        Popular Courses
      </h2>

      {/* Courses Container */}
      <div className="flex flex-wrap justify-center items-center gap-2.5 md:gap-4 lg:gap-10">
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
    </section>
  );
}
