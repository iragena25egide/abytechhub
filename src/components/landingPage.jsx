import React from "react";

const Home = () => {
  return (
    <section className="relative  text-white min-h-screen bg-black px-2 md:px-2 lg:px-2">
        <header className="relative w-full bg-gray-900 text-white py-4 px-6 h-20 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <span className="text-xl font-bold text-yellow-400">Abytech Hub</span>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-yellow-400">Home</a>
        <a href="#" className="hover:text-yellow-400">Pages</a>
        <a href="#" className="hover:text-yellow-400">Services</a>
        <a href="#" className="hover:text-yellow-400">Projects</a>
        <a href="#" className="hover:text-yellow-400">Blog</a>
        <a href="#" className="hover:text-yellow-400">Contact Us</a>
      </nav>

      {/* Contact Us Button */}
      <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-bold">
        Contact Us
      </button>

      {/* Mobile Menu (Hamburger) */}
      <div className="md:hidden">
        <button className="text-white text-2xl">&#9776;</button>
      </div>
    </header>
      
      
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
      <div className="w-full md:w-1/2 mt-8 md:mt-24 text-center md:text-left">
        <button className="bg-gray-700 text-white px-6 py-2 rounded-full mb-4 shadow-md">
          👋 Welcome to  Abytech Hub
        </button>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          I’m <span className="text-yellow-400">Prince Henry</span>
        </h1>
        <h2 className="text-yellow-400 text-2xl md:text-3xl font-semibold mt-2">
         CEO AbyTech
        </h2>
        <p className="text-gray-300 mt-4 max-w-md mx-auto md:mx-0 leading-relaxed">
            Since 2022,we are delivering softwares services and solutions towards new technology.
        </p>
        <button className="mt-6 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-md text-white font-bold transition duration-300 shadow-md">
          Connect To Us
        </button>
      </div>
    </section>
      
     
    </section>
  );
};

export default Home;
