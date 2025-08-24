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
      image: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?crop=faces,edges&h=630&w=1200&auto=format&fit=crop&q=60",
      buttonText: "View More Courses",
      buttonLink: "/courses",
    },
    {
      title: "Back End Development",
      subtitle: "HTML, CSS, JavaScript, Bootstrap, MySQL, PHP",
      image: "https://thumbs.dreamstime.com/b/programming-coding-source-code-screen-abstract-software-developer-computer-script-47515427.jpg",
    buttonText: "View More Courses",
      buttonLink: "/courses",
    },
    {
      title: "Art Work 2.0",
      subtitle: "Canva, Photoshop, Illustrator, CH Animation, Figma",
      image: "https://hapgrows.com/wp-content/uploads/2024/08/Add-a-heading-e1728302884648.png",
      buttonText: "View More Courses",
      buttonLink: "/courses",
    },
    {
      title: "ACIT Vol 2.1",
      subtitle: "MS Office, PPT, Networking, Canva, Photoshop, Illustrator, AI Tools, HTML, CSS, JavaScript, Bootstrap, Tailwind",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/09934438664589.Y3JvcCw3MDEsNTQ4LDE2MSwxMDc.jpg",
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
            1px 1px 0 #9cbcb8,
            2px 2px 2px rgba(156, 188, 184, 0.4),
            4px 4px 6px rgba(0, 0, 0, 0.6)
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
