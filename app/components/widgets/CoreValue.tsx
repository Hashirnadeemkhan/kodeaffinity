"use client"
import React from 'react';
import Wrapper from '../shared/Wrapper';

const CoreValue = () => {
  return (
    
    <div className='bg-gray-50 pt-1 pb-14'>
      <Wrapper>
        <div className='text-center md:space-y-6 space-y-2 md:mt-10 lg:mt-20 '>
          {/* Title Section */}
          <h3 className='text-red-600 font-semibold tracking-wide text-sm mt-10'>Our Mission</h3>
          <h2 className='text-black md:text-5xl text-3xl font-bold'>
            Building a <span className='bg-gradient-to-r from-[#981127] via-[#652046] to-[#24346D] bg-clip-text text-transparent'>Foundation</span> <br />
            for Enduring Success
          </h2>

          {/* Values Section */}
          <div className='flex flex-col md:flex-row justify-center items-start text-white gap-x-8 gap-y-8'>
            {/* Box 1 */}
            <div className='bg-white shadow-md hover:shadow-md p-8 rounded-lg w-full md:w-1/3 transition-transform hover:scale-[1.02]'>
              <div className='text-indigo-400 text-5xl mb-4'>👥</div>
              <h4 className='text-2xl font-semibold mb-3 bg-gradient-to-r from-custom-red via-custom-purple to-custom-blue bg-clip-text text-transparent '>Integrity</h4>
              <p className='text-black text-sm lg:text-lg'>
              We believe in building trust through transparent and ethical business practices.

              </p>
            </div>

            {/* Box 2 */}
            <div className='bg-red-500 shadow-md hover:shadow-md p-8 rounded-lg w-full md:w-1/3 transition-transform hover:scale-[1.02]'>
              <div className='text-white text-5xl mb-4'>💡</div>
              <h4 className='text-2xl font-semibold mb-3 '>Innovation</h4>
              <p className='text-gray-100 text-sm lg:text-lg'>
              Constantly evolving, we bring fresh ideas and advanced technology to the table.

              </p>
            </div>

            {/* Box 3 */}
            <div className='bg-white shadow-md hover:shadow-md p-8 rounded-lg w-full md:w-1/3 transition-transform hover:scale-[1.02]'>
              <div className='text-indigo-400 text-5xl mb-4'>🎯</div>
              <h4 className='text-2xl font-semibold mb-3 bg-gradient-to-r from-custom-red via-custom-purple to-custom-blue bg-clip-text text-transparent'>	Excellence</h4>
              <p className='text-black text-sm lg:text-lg'>
              We take pride in delivering high-quality solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CoreValue;
