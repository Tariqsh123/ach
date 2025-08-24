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
    image: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?crop=faces,edges&h=630&w=1200&auto=format&fit=crop&q=60",
    buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
  {
    title: "Back End Development",
    subtitle: "HTML, CSS, JavaScript, Bootstrap, MySQL, PHP",
    image: "https://thumbs.dreamstime.com/b/programming-coding-source-code-screen-abstract-software-developer-computer-script-47515427.jpg",
    buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
  {
    title: "Short Course",
    subtitle: "MS Office , Video Editing , Digital Marketing , Advance Excel",
    image: "https://shop.nas.edu.au/cdn/shop/collections/collection-courses-all.png?v=1749794260&width=1500",
   buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
  {
    title: "Art Work 1.0",
    subtitle: "Canva , Photoshop , Illustrator , AI Tools",
    image: "https://pcilearning.com/wp-content/uploads/2015/11/graphic_small_banner-3.jpg",
    buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
  {
    title: "Art Work 2.0",
    subtitle: "Canva, Photoshop, Illustrator, CH Animation, Figma",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/09934438664589.Y3JvcCw3MDEsNTQ4LDE2MSwxMDc.jpg",
   buttonText: "Contact Us",
    buttonLink: "https://api.whatsapp.com/send/?phone=%2B923183609193&text&type=phone_number&app_absent=0",
  },
  {
    title: "ACIT Vol 2.1",
    subtitle: "MS Office, PPT, Networking, Canva, Photoshop, Illustrator, AI Tools, HTML, CSS, JavaScript, Bootstrap, Tailwind",
    image: "https://shop.nas.edu.au/cdn/shop/collections/collection-courses-all.png?v=1749794260&width=1500",
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
            1px 1px 0 #9cbcb8,
            2px 2px 2px rgba(156, 188, 184, 0.4),
            4px 4px 6px rgba(0, 0, 0, 0.6)
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
