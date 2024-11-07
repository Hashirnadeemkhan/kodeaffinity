import React from 'react';
import Image from 'next/image';

const OurProcess = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1">
          <h5 className="text-purple-300 uppercase tracking-wide font-semibold mb-4">
            Our Proven Process:
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A Streamlined Approach That <span className="text-purple-500 italic">ensures success</span>
          </h1>
          <ul className="mt-6 space-y-4 text-gray-400">
            <li className="flex items-start">
              <span className="text-purple-500 text-2xl mr-2">✔️</span>
              <div>
                <strong>Discovery:</strong> We truly understand your business to learn more.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 text-2xl mr-2">✔️</span>
              <div>
                <strong>Strategy:</strong> Develop a plan that works for you.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 text-2xl mr-2">✔️</span>
              <div>
                <strong>Design:</strong> Make forms that are easy to use and fun to use.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 text-2xl mr-2">✔️</span>
              <div>
                <strong>Development:</strong> Use cutting-edge technology to bring your ideas to life.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 text-2xl mr-2">✔️</span>
              <div>
                <strong>Optimize:</strong> Make small changes to get the best results.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 text-2xl mr-2">✔️</span>
              <div>
                <strong>Support:</strong> Help you can trust to keep your business growing.
              </div>
            </li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition duration-300">
            Know More
          </button>
        </div>
        
        {/* Image Section */}
        <div className="flex-1">
          <Image 
            src="/assets/process.webp" 
            alt="Streamlined Approach" 
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
