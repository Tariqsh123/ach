"use client";

import { Signika } from "next/font/google";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const features = [
  {
    icon: <FaRegLightbulb className="text-yellow-400 text-4xl" />,
    title: "Expert Knowledge",
    desc: "Learn from industry experts with real-world experience to guide you."
  },
  {
    icon: <FaUsers className="text-cyan-400 text-4xl" />,
    title: "Community Support",
    desc: "Join a supportive community of learners and grow together."
  },
  {
    icon: <FaShieldAlt className="text-green-400 text-4xl" />,
    title: "Trusted Platform",
    desc: "Our courses are designed to ensure high quality and reliability."
  },
  {
    icon: <FaRocket className="text-purple-400 text-4xl" />,
    title: "Fast Progress",
    desc: "Practical exercises to boost your skills efficiently and quickly."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className={`${signika.className} text-4xl md:text-5xl font-bold mb-4`}>
            Why Choose Us
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Discover why learners trust our platform to enhance their skills and achieve their goals.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 border border-white/10 rounded-xl
                         "
              style={{
                boxShadow: "0 0 0px transparent",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 5px rgba(122, 225, 214,1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0px transparent";
              }}
            >
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-white/70 text-sm md:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
