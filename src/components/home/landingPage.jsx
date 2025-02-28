import React from "react";
import { Link } from "react-router-dom";

const Home = () => {


  return (
    <section className="relative  text-white min-h-screen bg-black px-2 md:px-2 lg:px-2">
    
      
      
    <section className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-12 py-12 bg-gray-900 text-white">
      {/* Image Container */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img
          src="../image/landing.png"
          alt="Emily Anderson"
          className="w-64 md:w-96 lg:w-[400px] object-cover rounded-lg "
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <button className="bg-gray-700 text-white px-6 py-2 rounded-full mb-4 shadow-md">
          👋 Welcome to my Abytech Hub
        </button>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          I’m <span className="text-yellow-400">Prince Henry</span>
        </h1>
        <h2 className="text-yellow-400 text-2xl md:text-3xl font-semibold mt-2">
         CEO AbyTech
        </h2>
        <p className="text-gray-300 mt-4 max-w-md mx-auto md:mx-0 leading-relaxed">
          Since 2020, we have been working with businesses, agencies, and individuals to build digital content, based in New York, USA.
        </p>
        <button className="mt-6 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-md text-white font-bold transition duration-300 shadow-md">
          Hire Me!
        </button>
      </div>
    </section>
      
     
    </section>
  );
};

export default Home;
