import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 200, easing: "ease-in-out", once: false });
  }, []);

  return (
    <section className="relative text-white min-h-screen bg-black px-2 md:px-2 lg:px-2">
      <section className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-12 py-12 bg-gray-900 text-white">
        {/* Image Container */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="../image/landing.png"
            alt="About Us"
            className="w-64 md:w-96 lg:w-[400px] object-cover rounded-lg "
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-24 text-center md:text-left">
          <button className="bg-gray-700 text-white px-6 py-2 rounded-full mb-4 shadow-md">
            
          </button>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-yellow-400">Abytech Hub</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-md mx-auto md:mx-0 leading-relaxed">
            Since 2022, Abytech Hub has been a leader in delivering top-notch software services and solutions, empowering businesses with cutting-edge technology.
            we are on the the company to delivery software product that will ensure you are interacting with the new world technology.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md text-white font-bold transition duration-300 shadow-md">
            Learn More
          </button>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
