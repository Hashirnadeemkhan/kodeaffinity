import React from 'react';
import Image from 'next/image';

const OurProcess = () => {
  return (
    <div 
    className="bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 py-20 px-10 text-white"
    style={{
      backgroundImage: 'linear-gradient(to right, #7f1d1d, #6b21a8, #1e3a8a), url("/assets/bg.png")', // Gradient and image combined
      backgroundSize: 'cover', // Make the background image cover the entire section
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: 'no-repeat', // Prevent image repetition
      backgroundBlendMode: 'overlay', // Blend the gradient with the image
    }}
  >
    <div className=" text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1">
          <h5 className="text-white uppercase tracking-wide font-semibold mb-4">
            Our Proven Process:
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A Streamlined Approach That <span className="text-white italic">ensures success</span>
          </h1>
          <ul className="mt-6 space-y-4 text-gray-400">
            <li className="flex items-start">
              <span className="text-2xl mr-2">✔️</span>
              <div>
                <strong>Discovery:</strong> We truly understand your business to learn more.
              </div>
            </li>
            <li className="flex items-start">
              <span className=" text-2xl mr-2">✔️</span>
              <div>
                <strong>Strategy:</strong> Develop a plan that works for you.
              </div>
            </li>
            <li className="flex items-start">
              <span className=" text-2xl mr-2">✔️</span>
              <div>
                <strong>Design:</strong> Make forms that are easy to use and fun to use.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-2">✔️</span>
              <div>
                <strong>Development:</strong> Use cutting-edge technology to bring your ideas to life.
              </div>
            </li>
            <li className="flex items-start">
              <span className=" text-2xl mr-2">✔️</span>
              <div>
                <strong>Optimize:</strong> Make small changes to get the best results.
              </div>
            </li>
            <li className="flex items-start">
              <span className=" text-2xl mr-2">✔️</span>
              <div>
                <strong>Support:</strong> Help you can trust to keep your business growing.
              </div>
            </li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300">
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

    </div>
  );
};

export default OurProcess;
