import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white px-10 md:px-20 lg:px-32 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-gray-900 p-8 rounded-lg relative">
          <h2 className="text-3xl font-bold text-yellow-400">Why Choose <span className="text-white">Our Services</span></h2>
          <p className="text-gray-300 mt-4">
            Consequat libero dui elit nulla fermentum nam cras proin facilisi. Vitae tempor odio arcu blandit in suspendisse massa. Habitant sollicitudin ut maecenas nunc sit dui morbi vitae leo. Quis pellentesque adipiscing.
          </p>
          <div className="mt-6 relative">
            <img src="/woman-working.jpg" alt="Working Woman" className="rounded-lg" />
            <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black px-3 py-1 font-bold rotate-90">150+ PROJECT DONE</span>
          </div>
          <p className="mt-4 font-bold text-white">Find More Services! <span className="text-red-400">Click Here</span></p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <img src="/seo-icon.svg" alt="SEO" className="w-10 h-10" />
            <div>
              <p className="text-gray-400 text-sm">GET SEO OPTIMIZED CONTENT</p>
              <h3 className="text-xl font-bold">SEO Optimized</h3>
              <p className="text-gray-300">Pretium non faucibus morbi diam felis bibendum in.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src="/content-icon.svg" alt="Original Content" className="w-10 h-10" />
            <div>
              <p className="text-gray-400 text-sm">FRESH AUTHENTIC CONTENT</p>
              <h3 className="text-xl font-bold">Original Content</h3>
              <p className="text-gray-300">Commodo molestie sit etiam commodo nunc.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src="/delivery-icon.svg" alt="Quick Delivery" className="w-10 h-10" />
            <div>
              <p className="text-gray-400 text-sm">DELIVERY WITHIN 7 DAYS</p>
              <h3 className="text-xl font-bold">Quick Delivery Time</h3>
              <p className="text-gray-300">Sed tortor et ultrices sit arcu.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src="/revision-icon.svg" alt="Unlimited Revisions" className="w-10 h-10" />
            <div>
              <p className="text-gray-400 text-sm">REVISION & CUSTOMER SUPPORT</p>
              <h3 className="text-xl font-bold">Unlimited Revisions</h3>
              <p className="text-gray-300">Ipsum montes sit tortor sollicitudin tempus nulla turpis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
