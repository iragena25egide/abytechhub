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
              <p className="text-gray-400 text-sm">Temporary ullamcorper id diam vestibulum suspendisse.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaClipboardList className="text-orange-400 text-2xl" />
            <div>
              <h3 className="font-semibold">Requirement Gathering</h3>
              <p className="text-gray-400 text-sm">Gravida egestas sit nisi nulla laoreet non sit enim.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-orange-400 text-2xl" />
            <div>
              <h3 className="font-semibold">Final Approval</h3>
              <p className="text-gray-400 text-sm">Bibendum sit massa gravida justo id nulla enim.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-1/3 bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-400">Customize</h3>
        <h3 className="text-xl font-semibold">Order</h3>
        <div className="mt-4">
          <p className="text-sm">Word Count:</p>
          <div className="flex items-center bg-gray-700 px-3 py-2 rounded-md">
            <button onClick={() => setWordCount((prev) => Math.max(100, prev - 100))}>-</button>
            <span className="mx-4 text-yellow-400">{wordCount}</span>
            <button onClick={() => setWordCount(prev => prev + 100)}>+</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm">Number of Pages:</p>
          <div className="flex items-center bg-gray-700 px-3 py-2 rounded-md">
            <button onClick={() => setPages(prev => Math.max(1, prev - 1))}>-</button>
            <span className="mx-4 text-yellow-400">{pages}</span>
            <button onClick={() => setPages(prev => prev + 1)}>+</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm">Your Email:</p>
          <input type="email" className="w-full bg-gray-700 px-3 py-2 rounded-md" placeholder="Email Address" />
        </div>
        <div className="mt-4 bg-gray-700 p-4 rounded-md flex justify-between">
          <span>Order Total:</span>
          <span className="font-bold text-lg">${totalCost}</span>
        </div>
        <button className="mt-4 w-full bg-orange-400 text-white py-2 rounded-md">Order Now</button>
      </div>
    </div>
  );
}
