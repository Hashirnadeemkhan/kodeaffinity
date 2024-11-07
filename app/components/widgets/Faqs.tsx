"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: 'Lorem Ipsum Is Simply Dummy Text Of The Printing?', answer: 'Answer to FAQ 1' },
  { question: 'Lorem Ipsum Is Simply Dummy Text Of The Printing?', answer: 'Answer to FAQ 2' },
  { question: 'Lorem Ipsum Is Simply Dummy Text Of The Printing?', answer: 'Answer to FAQ 3' },
  { question: 'Lorem Ipsum Is Simply Dummy Text Of The Printing?', answer: 'Answer to FAQ 4' },
  { question: 'Lorem Ipsum Is Simply Dummy Text Of The Printing?', answer: 'Answer to FAQ 5' },
  { question: 'Lorem Ipsum Is Simply Dummy Text Of The Printing?', answer: 'Answer to FAQ 6' },
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 py-20 px-10 text-white"
      style={{
        backgroundImage: 'linear-gradient(to right, #7f1d1d, #6b21a8, #1e3a8a), url("/assets/bg.png")', // Gradient and image combined
        backgroundSize: 'cover', // Make the background image cover the entire section
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent image repetition
        backgroundBlendMode: 'overlay', // Blend the gradient with the image
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="lg:text-3xl text-2xl font-medium mb-4">Frequently Asked Questions</h2>
        <h3 className="lg:text-5xl text-3xl font-medium">We’ve Got Your Questions Answered</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-400 pb-4 cursor-pointer hover:text-gray-300 transition duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-xl">{faq.question}</h4>
              <span className="text-xl font-bold">
                {openFAQ === index ? '-' : '+'}
              </span>
            </div>

            <AnimatePresence>
              {openFAQ === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} // Initial state for the answer
                  animate={{ height: "auto", opacity: 1 }} // Animate to full height and visible
                  exit={{ height: 0, opacity: 0 }} // Exit animation
                  transition={{ duration: 0.3 }} // Transition duration
                  className="overflow-hidden mt-2"
                >
                  <p className="text-sm transition duration-300">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
