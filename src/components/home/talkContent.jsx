
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

export default function ContentSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-8 flex items-center justify-center">
      <div className="max-w-6xl flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img src="../image/footer.png" alt="Woman with Laptop" className="w-[80%] md:w-[90%]" />
          <div className="absolute bottom-6 left-6 bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-3">
           
          </div>
        </div>
        <div className="w-full md:w-1/2 text-left mt-10 md:mt-0 md:ml-8">
          <h2 className="text-4xl font-bold">
            Packages <span className="text-yellow-400">Softwares</span>,Sells For You.
          </h2>
          <p className="mt-4 text-gray-300">
           We Delivery Packages of software and web application with high quality of functionality.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center"><FaRegCheckCircle className="text-yellow-400 mr-2" /> We Create Software Application.</li>
            <li className="flex items-center"><FaRegCheckCircle className="text-yellow-400 mr-2" /> We Delivery Software Services.</li>
            <li className="flex items-center"><FaRegCheckCircle className="text-yellow-400 mr-2" /> We Deliver On Time.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
