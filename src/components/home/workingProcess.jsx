import React, { useState } from "react";
import { FaRocket, FaClipboardList, FaCheckCircle } from "react-icons/fa";


export default function WorkProcess() {
  const [wordCount, setWordCount] = useState(100);
  const [pages, setPages] = useState(10);
  const pricePerWord = 0.1;
  const totalCost = (wordCount * pages * pricePerWord).toFixed(2);

  return (
    <div className="bg-gray-900 text-white p-10 flex justify-between items-center">
      {/* Left Section */}
      <div className="w-2/5">
        <h2 className="text-3xl font-semibold">
          Our <span className="text-yellow-400">Working</span> Process
        </h2>
        <p className="text-gray-400 mt-3">
          Hendrerit facilisi habitasse arcu urna bibendum. Cursus in mattis nunc pretium amet dignissim.
        </p>
        <div className="mt-5 space-y-6">
          <div className="flex items-start gap-3">
            <FaRocket className="text-orange-400 text-2xl" />
            <div>
              <h3 className="font-semibold">Get Started</h3>
              <p className="text-gray-400 text-sm">Start To Boost Your Business With Softwares.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaClipboardList className="text-orange-400 text-2xl" />
            <div>
              <h3 className="font-semibold">Requirement Gathering</h3>
              <p className="text-gray-400 text-sm">Software Requirement Gathering To Be Done.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-orange-400 text-2xl" />
            <div>
              <h3 className="font-semibold">Final Approval</h3>
              <p className="text-gray-400 text-sm">Approve What We Are Commited to Focus On.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 p-6 rounded-lg">
      <img src="../image/bg1.png" />
        </div>
    </div>
  );
}
