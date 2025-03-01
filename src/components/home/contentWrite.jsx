import { FaPencilRuler } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDraw } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import React from "react";
import { useNavigate } from "react-router-dom";


const services = [
  { title: "Web Copywriter", icon: <FaPencilRuler size={50} className="text-orange-400" /> },
  { title: "Brochure", icon: <IoDocumentTextSharp size={50} className="text-orange-400" /> },
  { title: "Digital", icon: <MdOutlineDraw size={50} className="text-orange-400" /> },
  { title: "Email Copywriting", icon: <AiOutlineMail size={50} className="text-orange-400" /> },
];

export default function ContentWriteServices() {
  const navigate =  useNavigate()
  return (
    <section className="bg-[#0D0F1A] w-full text-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold">
        Our <span className="text-yellow-400">Content Write</span> Services
      </h2>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        Pharetra elementum risus quam et adipiscing ac tempor. Donec gravida sagittis elit ullamcorper sed
        phasellus tincidunt velit ultricies commodo.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-[#151726] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            onClick={()=> navigate(`/service/1`) }
          >
            {service.icon}
            <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
      <button
        className="fixed bottom-6 right-6 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
        aria-label="Scroll to Top"
      >
        ↑
      </button>
    </section>
  );
}
