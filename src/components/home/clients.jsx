import React from "react";


const ClientsSection = () => {
    const clients = [
      "Allianz", "GUCCI", "CHANEL", "PHILIPS", "Santander",
      "ORACLE", "SIEMENS", "Google", "Microsoft", "TOYOTA"
    ];
  
    return (
      <section className="bg-[#0f1115] py-12 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Clients I've <span className="text-yellow-400">Worked With</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-gray-800 p-4 rounded-md text-gray-400 text-xl font-semibold"
            >
              {client}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ClientsSection;
  