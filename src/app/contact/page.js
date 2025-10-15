"use client";

import { useRef, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Signika } from "next/font/google";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperclip } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // install via `npm i @emailjs/browser`

const signika = Signika({ subsets: ["latin"], weight: ["400", "700"] });

export default function ContactPage() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      "YOUR_SERVICE_ID",     // get from EmailJS
      "YOUR_TEMPLATE_ID",    // get from EmailJS
      formRef.current,
      "YOUR_PUBLIC_KEY"      // get from EmailJS
    )
    .then(
      (result) => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      },
      (error) => {
        console.error(error);
        setStatus("Failed to send message.");
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="text-white min-h-[90vh] flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Column */}
          <div className="flex flex-col justify-center gap-8">
            <h1
              className={`${signika.className} text-5xl sm:text-6xl md:text-7xl`}
              style={{
                textShadow: `
                  0 0 30px rgba(58,169,155,0.7)
                `,
              }}
            >
              Get In Touch
            </h1>

            <div className="flex flex-col gap-4 text-lg">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-white text-2xl" />
                <span>Johar Chowk Market, Ghaziabad, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-white text-2xl" />
                <span>+92 317 2443717</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white text-2xl" />
                <span>innoxent.tariq2016@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <h2
              className={`${signika.className} text-3xl sm:text-4xl mb-6`}
              style={{
                textShadow: `
                  0 0 15px #3ba99b
                `,
              }}
            >
              Send Us a Message
            </h2>

            <form ref={formRef} className="w-full max-w-md flex flex-col gap-6" onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Full Name" required className="bg-transparent border border-white text-white rounded-lg px-4 py-3 outline-none placeholder-white focus:ring-2 focus:ring-[#7ae1d6]" />
              <input type="email" name="email" placeholder="Email" required className="bg-transparent border border-white text-white rounded-lg px-4 py-3 outline-none placeholder-white focus:ring-2 focus:ring-[#7ae1d6]" />
              <input type="tel" name="phone" placeholder="Phone" required className="bg-transparent border border-white text-white rounded-lg px-4 py-3 outline-none placeholder-white focus:ring-2 focus:ring-[#7ae1d6]" />
              <textarea name="details" placeholder="Details" required className="bg-transparent border border-white text-white rounded-lg px-4 py-3 outline-none placeholder-white focus:ring-2 focus:ring-[#7ae1d6] resize-none h-32"></textarea>

              <label className="flex items-center gap-3 border border-white rounded-lg px-4 py-3 cursor-pointer hover:ring-2 hover:ring-[#7ae1d6] transition-all">
                <FaPaperclip className="text-white text-lg" />
                <span>Attach File</span>
                <input type="file" name="file" className="hidden" />
              </label>

              <button type="submit" className="mt-4 w-full bg-transparent border border-white rounded-full py-4 uppercase font-semibold text-white hover:shadow-[0_0_5px_#7ae1d6,0_0_10px_#3ba99b]">
                Submit
              </button>

              {status && <p className="mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
