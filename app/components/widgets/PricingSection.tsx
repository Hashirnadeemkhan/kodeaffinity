"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("All")
  const [expandedPackage, setExpandedPackage] = useState<{ [key: string]: string | null }>({})

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    setExpandedPackage({}) // Reset expanded state when changing tabs
  }

  const togglePackageExpansion = (category: string, packageName: string) => {
    setExpandedPackage((prev) => ({
      ...prev,
      [category]: prev[category] === packageName ? null : packageName,
    }))
  }

  const packages = [
    {
      name: "Web Development Startup Package",
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
      name: "Web Development Silver Package",
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
      name: "Web Development Gold Package",
      price: "699.50",
      features: [
        "15-page custom website.",
        "Custom forms and payment integration.",
        "Advanced SEO setup.",
        "3 months support and updates.",
      ],
    },
    {
      name: "App Development Startup Package",
      price: "499.50",
      features: ["Basic app functionality.", "Up to 5 screens.", "Basic UI/UX design.", "1-month support."],
    },
    {
      name: "App Development Silver Package",
      price: "749.50",
      features: [
        "Advanced app functionality.",
        "Up to 10 screens.",
        "Custom UI/UX design.",
        "2 months support and updates.",
      ],
    },
    {
      name: "App Development Gold Package",
      price: "1299.50",
      features: [
        "Complex app functionality.",
        "Unlimited screens.",
        "Premium UI/UX design.",
        "3 months support and updates.",
        "App store submission assistance.",
      ],
    },
    {
      name: "Logo Design Startup Package",
      price: "99.50",
      features: ["2 initial concepts.", "2 revisions.", "Final files in various formats."],
    },
    {
      name: "Logo Design Silver Package",
      price: "199.50",
      features: ["4 initial concepts.", "3 revisions.", "Final files in various formats.", "Basic brand guidelines."],
    },
    {
      name: "Logo Design Gold Package",
      price: "349.50",
      features: [
        "6 initial concepts.",
        "Unlimited revisions.",
        "Final files in all formats.",
        "Comprehensive brand guidelines.",
        "Social media kit.",
      ],
    },
    {
      name: "Animation Startup Package",
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
      name: "Animation Silver Package",
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
      name: "Animation Gold Package",
      price: "699.50",
      features: [
        "15-page custom website.",
        "Custom forms and payment integration.",
        "Advanced SEO setup.",
        "3 months support and updates.",
      ],
    },
    {
      name: "Illustration Startup Package",
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
      name: "Illustration Silver Package",
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
      name: "Illustration Gold Package",
      price: "699.50",
      features: [
        "15-page custom website.",
        "Custom forms and payment integration.",
        "Advanced SEO setup.",
        "3 months support and updates.",
      ],
    },
    {
      name: "Branding Startup Package",
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
      name: "Branding Silver Package",
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
      name: "Branding Gold Package",
      price: "699.50",
      features: [
        "15-page custom website.",
        "Custom forms and payment integration.",
        "Advanced SEO setup.",
        "3 months support and updates.",
      ],
    },
    {
      name: "SaaS Startup Package",
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
      name: "SaaS Silver Package",
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
      name: "SaaS Gold Package",
      price: "699.50",
      features: [
        "15-page custom website.",
        "Custom forms and payment integration.",
        "Advanced SEO setup.",
        "3 months support and updates.",
      ],
    },
    {
      name: "SEO Startup Package",
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
      name: "SEO Silver Package",
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
      name: "SEO Gold Package",
      price: "699.50",
      features: [
        "15-page custom website.",
        "Custom forms and payment integration.",
        "Advanced SEO setup.",
        "3 months support and updates.",
      ],
    },
    {
      name: "SMM Startup Package",
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
      name: "SMM Silver Package",
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
      name: "SMM Gold Package",
      price: "699.50",
      features: [
        "15-page custom website.",
        "Custom forms and payment integration.",
        "Advanced SEO setup.",
        "3 months support and updates.",
      ],
    },
  ]

  const services = [
    "All",
    "Web Development",
    "App Development",
    "Logo Design",
    "Animation",
    "Illustration",
    "Branding",
    "SaaS",
    "SEO",
    "SMM",
  ]

  const filteredPackages = activeTab === "All" ? packages : packages.filter((pkg) => pkg.name.includes(activeTab))

  return (
    <div className="bg-gray-50 text-black p-8 lg:p-20">
      <h2 className=" text-lg font-bold mb-2 text-red-600">Our Pricing</h2>
      <h3 className=" text-xl md:text-3xl lg:text-4xl mb-4 md:mb-5">
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
          className="grid gap-6 md:gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 border "
        >
          {filteredPackages.map((pkg, index) => {
            const category = pkg.name.split(" ")[0] + " " + pkg.name.split(" ")[1] // Extract category (e.g., "Web Development")
            const isExpanded = expandedPackage[category] === pkg.name

            return (
              <motion.div
                key={index}
                className="rounded-lg p-6 flex flex-col  py-12 shadow-lg border border-red-600"
                layout
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-4xl md:text-5xl font-semibold mb-4">${pkg.price}</p>
                <button
                  className="hover:text-white py-3 underline px-4 rounded-md mb-4 hover:bg-red-500 text-red-500 transition duration-300 border"
                  onClick={() => togglePackageExpansion(category, pkg.name)}
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
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex  text-gray-600 mb-2">
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
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default PricingSection

