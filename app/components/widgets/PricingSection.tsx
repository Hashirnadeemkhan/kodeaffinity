"use client"

import { useState } from "react"
import pricingData from "@/app/data/pricingData"
import { motion, AnimatePresence } from "framer-motion"

interface Package {
  name: string
  price: string
  features: string[]
  category: string
}

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("All")
  const [expandedPackage, setExpandedPackage] = useState<Record<string, string | null>>({})

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    setExpandedPackage({}) // Reset expanded states when changing tabs
  }

  const togglePackageExpansion = (category: string, packageName: string) => {
    setExpandedPackage((prev) => ({
      ...prev,
      [category]: prev[category] === packageName ? null : packageName,
    }))
  }

  const packages: Package[] = pricingData().map((pkg) => ({
    ...pkg,
    category: pkg.name.split(" ")[0],
  }))

  const services = ["All", "Web", "App", "Logo", "Animation", "Illustration", "Branding", "SaaS", "SEO", "SMM"]

  const filteredPackages =
    activeTab === "All" ? packages : packages.filter((pkg) => pkg.category.toLowerCase() === activeTab.toLowerCase())

  // Split packages into columns
  const columns = [
    filteredPackages.filter((_, index) => index % 3 === 0),
    filteredPackages.filter((_, index) => index % 3 === 1),
    filteredPackages.filter((_, index) => index % 3 === 2),
  ]

  return (
    <div className="bg-gray-50 text-black p-8 lg:p-20">
      <h2 className="text-lg font-bold mb-2 text-red-600 md:text-center text-start">Our Pricing</h2>
      <h3 className="text-xl md:text-3xl lg:text-4xl mb-4 md:mb-5 md:text-center text-start">
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
          className="grid gap-6 md:gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        >
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-6">
              {column.map((pkg) => {
                const isExpanded = expandedPackage[pkg.category] === pkg.name

                return (
                  <motion.div
                    key={pkg.name}
                    className="rounded-lg p-6 flex flex-col py-12 shadow-lg border border-red-600"
                    layout
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{pkg.name}</h3>
                    <p className="text-4xl md:text-5xl font-semibold mb-4">${pkg.price}</p>
                    <button
                      className="hover:text-white py-3 underline px-4 rounded-md mb-4 hover:bg-red-500 text-red-500 transition duration-300 border"
                      onClick={() => togglePackageExpansion(pkg.category, pkg.name)}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                          animate={{ height: "auto", opacity: 1, marginBottom: 16 }}
                          exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-left w-full"
                          style={{ overflow: "hidden" }}
                        >
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex text-gray-600 mb-2">
                              <span className="text-red-500 mr-2">✔</span>
                              {feature}
                            </li>
                          ))}
                          <button className="hover:text-white py-3 w-full border border-red-500 px-4 rounded-md mt-auto hover:bg-red-500 text-black transition duration-300">
                            Get Started
                          </button>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default PricingSection

