"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null); // Specify ref type

  // Animation variants for form elements
  const formVariants = {
    hidden: { opacity: 0, y: 20 }, // Start position: 20px down and fully transparent
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }, // Animate to original position
    },
  };

  // Observe when the component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
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
  }, [controls]);

  return (
    <div className="flex items-center justify-center bg-white" ref={ref}>
      <motion.form
        className="w-full max-w-3xl p-8"
        initial="hidden"
        animate={controls}
        variants={formVariants}
      >
        <h2 className="lg:text-6xl text-4xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-900">
          Get in Touch
        </h2>

        <div className="flex flex-wrap items-center mb-4 w-full">
          <motion.div className="w-full md:w-1/2 px-3 mb-4 md:mb-0" variants={formVariants}>
            <input
              className="w-full px-4 py-3 border rounded-full border-red-800 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              type="text"
              placeholder="Your Name"
            />
          </motion.div>

          <motion.div className="w-full md:w-1/2 px-3" variants={formVariants}>
            <input
              className="w-full px-4 py-3 border rounded-full border-red-800 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              type="email"
              placeholder="Email Address"
            />
          </motion.div>
        </div>

        <div className="flex flex-wrap mb-4">
          <motion.div className="w-full md:w-1/2 px-3 mb-4 md:mb-0" variants={formVariants}>
            <input
              className="w-full px-4 py-3 border rounded-full border-red-800 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              type="text"
              placeholder="Phone No"
            />
          </motion.div>

          <motion.div className="w-full md:w-1/2 px-3" variants={formVariants}>
            <input
              className="w-full px-4 py-3 border rounded-full border-red-800 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              type="text"
              placeholder="Company"
            />
          </motion.div>
        </div>

        <motion.div className="mb-4 px-3" variants={formVariants}>
          <select
            className="w-full px-4 py-3 border rounded-full border-red-800 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          >
            <option>Type Service</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>Digital Marketing</option>
            <option>IT Consulting</option>
          </select>
        </motion.div>

        <motion.div className="mb-4 px-3" variants={formVariants}>
          <textarea
            className="w-full px-4 py-3 border rounded-3xl border-red-800 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            placeholder="Type Message"
          ></textarea>
        </motion.div>

        <motion.div className="px-3" variants={formVariants}>
          <button
            className="w-full py-3 text-white rounded-full bg-gradient-to-r from-red-700 to-blue-900 hover:from-red-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500"
            type="submit"
          >
            Submit
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Contact;
