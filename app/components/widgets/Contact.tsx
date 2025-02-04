"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [controls]);

  return (
    <div className="flex items-center justify-center bg-white mt-10 mb-10" ref={ref}>
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

      
        <motion.div className="relative mb-4 px-3" variants={formVariants}>
          <button
            type="button"
            className="w-full px-4 py-3 border rounded-full border-red-800 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 flex justify-between items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {"Type Service"}
            <FaChevronDown className={`transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`} />
          </button>
          {dropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 w-full mt-2 bg-white border border-red-800 rounded-lg shadow-lg"
            >
              {["Web Development", "Mobile App Development", "Digital Marketing", "IT Consulting"].map((service) => (
                <li
                  key={service}
                  className="px-4 py-2 hover:bg-red-700 hover:text-white cursor-pointer"
                  onClick={() => { setDropdownOpen(false); }}
                >
                  {service}
                </li>
              ))}
            </motion.ul>
          )}
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
