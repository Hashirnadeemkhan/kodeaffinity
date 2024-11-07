"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";

const Insights = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null); // Specify ref type

  // Animation variants for the image and text
  const imageAnimation = {
    hidden: { x: -100, opacity: 0 }, // Image starts from the left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }, // Animate to original position
    },
  };

  const textAnimation = {
    hidden: { x: 100, opacity: 0 }, // Text starts from the right
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }, // Animate to original position
    },
  };

  // Observe when the component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageControls.start("visible");
          textControls.start("visible");
        } else {
          imageControls.start("hidden");
          textControls.start("hidden");
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is in view
      }
    );

    const currentRef = ref.current; // Copy ref.current to a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the variable in cleanup
      }
    };
  }, [imageControls, textControls]);

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
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <h2 className="lg:text-5xl text-3xl font-bold text-center text-white mb-5">Latest Insights.</h2>
        <p className="text-center text-white mb-10 lg:text-xl text-sm">
          Hot Off the Press: Your First Choice for the Most Recent Technology Trends and Best Practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#280A15] rounded-lg shadow-lg overflow-hidden max-w-lg">
            <motion.div
              initial="hidden"
              animate={imageControls}
              variants={imageAnimation}
              className='p-7'
            >
              <Image
                src="/blog.png" 
                alt="Insight 1" 
                height={200}
                width={200}
                className="w-full"
              />
            </motion.div>
            <div className="p-4 flex flex-col items-center justify-center">
              <motion.h3
                initial="hidden"
                animate={textControls}
                variants={textAnimation}
                className="lg:text-4xl text-2xl font-bold text-gradient mb-2 bg-gradient-to-r from-custom-red via-custom-purple to-custom-blue bg-clip-text text-transparent"
              >
                Lorem ipsum Lorem
              </motion.h3>
              <p className="text-white mb-4 text-center lg:text-lg text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s.
              </p>
              <a href="#" className="text-gradient mb-2 bg-gradient-to-r from-custom-red via-custom-purple to-custom-blue bg-clip-text text-transparent font-semibold text-center text-lg">Read More</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#280A15] rounded-lg shadow-lg overflow-hidden max-w-lg">
            <motion.div
              initial="hidden"
              animate={imageControls}
              variants={imageAnimation}
              className='p-7'
            >
              <Image 
                src="/blog.png"  // Make sure this path is correct
                alt="Insight 2" 
                height={200} // Set the height
                width={200}  // Set the width
                className="w-full "
              />
            </motion.div>
            <div className="p-4 flex flex-col items-center justify-center">
              <motion.h3
                initial="hidden"
                animate={textControls}
                variants={textAnimation}
                className="lg:text-4xl text-2xl font-bold text-gradient mb-2 bg-gradient-to-r from-custom-red via-custom-purple to-custom-blue bg-clip-text text-transparent"
              >
                Lorem ipsum Lorem
              </motion.h3>
              <p className="mb-4 text-center lg:text-lg text-sm text-gradient">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s.
              </p>
              <a href="#" className="text-gradient mb-2 bg-gradient-to-r from-custom-red via-custom-purple to-custom-blue bg-clip-text text-transparent font-semibold text-center text-lg">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
