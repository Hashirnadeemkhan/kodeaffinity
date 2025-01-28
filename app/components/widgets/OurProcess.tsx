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
    <div className=" text-white ">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1">
          <h5 className="text-white lg:text-xl text-sm uppercase tracking-wide font-semibold mb-2">
            Our Proven Process:
          </h5>
          <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold leading-tight">
            A Streamlined Approach That <span className="text-white italic">ensures success</span>
          </h1>
          <ul className="mt-6 space-y-4 text-gray-400">
            <li className="flex items-start">
              <span className="lg:text-2xl text-lg mr-2">✔️</span>
              <div className='text-sm lg:text-lg'>
                <strong>Discovery:</strong> We truly understand your business to learn more.
              </div>
            </li>
            <li className="flex items-start">
              <span className=" lg:text-2xl text-lg mr-2">✔️</span>
              <div className='text-sm lg:text-lg'>
                <strong>Strategy:</strong> Develop a plan that works for you.
              </div>
            </li>
            <li className="flex items-start">
              <span className=" lg:text-2xl text-lg mr-2">✔️</span>
              <div className='text-sm lg:text-lg'>
                <strong>Design:</strong> Make forms that are easy to use and fun to use.
              </div>
            </li>
            <li className="flex items-start">
              <span className="lg:text-2xl text-lg mr-2">✔️</span>
              <div className='text-sm lg:text-lg'>
                <strong>Development:</strong> Use cutting-edge technology to bring your ideas to life.
              </div>
            </li>
            <li className="flex items-start">
              <span className="lg:text-2xl text-lg mr-2">✔️</span>
              <div className='text-sm lg:text-lg'>
                <strong>Optimize:</strong> Make small changes to get the best results.
              </div>
            </li>
            <li className="flex items-start">
              <span className=" lg:text-2xl text-lg mr-2">✔️</span>
              <div className='text-sm lg:text-lg'>
                <strong>Support:</strong> Help you can trust to keep your business growing.
              </div>
            </li>
          </ul>
          <button className="lg:mt-8 mt-3 lg:px-6 px-3 lg:py-3 py-2 ml-4 text-sm lg:text-lg  bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300">
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
