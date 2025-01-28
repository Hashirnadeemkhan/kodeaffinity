"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const packages = [
    {
      name: "Startup Package",
      price: "249.50",
      features: [
        "5-page website.",
        "5 stock photos.",
        "Responsive design (Mobile-friendly).",
        "Basic SEO setup.",
        "1-month maintenance support.",
      ],
    },
    {
      name: "Silver Package",
      price: "374.50",
      features: [
        "10-page website.",
        "CMS (Content Management System).",
        "8 stock photos.",
        "On-page SEO optimization.",
        "2 months maintenance.",
      ],
    },
    {
      name: "Gold Package",
      price: "699.50",
      features: [
        "15-page custom website.",
        "Custom forms and payment integration.",
        "Advanced SEO setup.",
        "3 months support and updates.",
      ],
    },
 
  ];

  const services = [
    "Web Development",
    "App Development",
    "Logo Design",
    "Animation",
    "Illustration",
    "Branding",
    "SaaS",
    "SEO",
    "SMM",
  ];

  return (
    <div className="bg-white text-black p-8  lg:p-20">
      <h2 className="text-center text-lg font-bold mb-2 text-red-600">
        Our Pricing
      </h2>
      <h3 className="text-center text-xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-5">
        You can find a{" "}
        <span className="bg-gradient-to-r from-[#981127] via-[#652046] to-[#24346D] bg-clip-text text-transparent italic">
          cheap plan
        </span>{" "}
        that works for your business
      </h3>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 md:mb-10 border border-red-700 rounded-xl py-2">
        {services.map((service) => (
          <button
            key={service}
            className={`px-3 md:px-5 py-2 m-1 rounded-lg ${
              activeTab === service ? "bg-red-500 text-white" : "text-black"
            } hover:bg-red-700 hover:text-white transition duration-300`}
            onClick={() => handleTabClick(service)}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid gap-6 md:gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="rounded-lg p-6 flex flex-col items-start py-12  shadow-lg"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 ">
                {pkg.name}
              </h3>
              <p className="text-4xl md:text-5xl font-semibold mb-4 ">
                ${pkg.price}
              </p>
              <button className=" hover:text-white py-3 w-full border border-red-500 px-4 rounded-md mb-4 hover: bg-transparent hover:bg-red-500 text-black transition duration-300">
                Get Started
              </button>
              <ul className="text-left">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600 mb-2"
                  >
                    <span className="text-red-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PricingSection;
