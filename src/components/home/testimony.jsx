import React, { useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";


const testimonials = [
  {
    rating: 4,
    title: "Full Stack Developer ",
    emoji: "😍",
    text: "it was a great experience to work with AbyTech becouse they boost my career and they help me to build my technology today.",
    name: "Mihigo Prince",
    date: "20 Feb 2025",
  },
  {
    rating: 5,
    title: "Web Developer",
    emoji: "👍",
    text: "it was a great experience to work with AbyTech becouse they boost my career and they help me to build my technology today.",
    name: "Ngenzi Serge",
    date: "12 Jan 2025",
  },
  {
    rating: 5,
    title: "Backend Developer",
    emoji: "😍",
    text: "it was a great experience to work with AbyTech becouse they boost my career and they help me to build my technology today.",
    name: "Iragena Egide",
    date: "22 Feb 2025",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-[#0d0f15] py-16 px-4 w-full text-white text-center relative">
      <h2 className="text-4xl font-bold mb-4">
        What My <span className="text-yellow-400">Clients</span> Say
      </h2>
      <p className="text-gray-400 mb-4">
       Different Custom with what they say about AbyTech.
      </p>
      <div className="flex justify-center w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#13151b] w-[350px] p-6 rounded-lg mx-4 shadow-md"
            >
              <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t.title} {t.emoji}
              </h3>
              <p className="text-gray-400 mb-4">{t.text}</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.date}</p>
              <FaQuoteRight className="text-red-400 text-2xl mt-4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-red-500" : "bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
