import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMdArrowRoundUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


const FooterContent = () => {
  return (
    <footer className="bg-[#0F1015] text-white py-16 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-10">
        {/* Left Section */}
        <div className="text-left max-w-lg">
          <h2 className="text-5xl font-bold">
            Let’s Work <br /> <span className="text-[#FFD44D]">Together</span>
          </h2>
          <div className="flex items-center mt-6">
            <img
              src="/logo.png"
              alt="Biogi Logo"
              className="w-10 h-10 rounded-full bg-[#FFD44D] p-2"
            />
            <span className="text-xl font-semibold ml-3">Biogi</span>
          </div>
          <p className="mt-4 text-gray-400">
            Neque vitae sit commodo posuere. Ut euismod nec magna senectus
            vestibulum libero. Nec risus pellentesque cursus in turpis.
          </p>
          <nav className="mt-6 flex space-x-6 text-lg">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>

        {/* Right Section - Image and Call to Action */}
        <div className="relative flex items-center justify-center mt-10 lg:mt-0">
          <img
            src="/person.png"
            alt="Person"
            className="w-96 grayscale"
          />
          <div className="absolute bg-[#FF9078] w-28 h-28 flex items-center justify-center rounded-full text-white text-sm font-semibold">
            <span className="rotate-[-30deg]">GET IN TOUCH - LET'S WORK</span>
            <IoMdArrowRoundUp className="text-2xl absolute" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-700 py-6">
        <p className="text-gray-400 text-sm">
          © 2024 Biogi - All Rights Reserved by The_Krishna
        </p>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-10 right-10 flex space-x-4">
        <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
        <RxCross2 className="text-gray-400 hover:text-white cursor-pointer" />
        <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
      </div>

      {/* Scroll to Top */}
      <button className="fixed bottom-6 right-6 bg-[#FFD44D] p-3 rounded-full shadow-md hover:bg-yellow-500 transition">
        <IoMdArrowRoundUp className="text-black text-xl" />
      </button>
    </footer>
  );
};

export default FooterContent;
