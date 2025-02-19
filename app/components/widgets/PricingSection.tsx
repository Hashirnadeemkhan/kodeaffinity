"use client"

import type React from "react"
import Link from "next/link"
import { useState, useRef } from "react"
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
  const [expandedPackages, setExpandedPackages] = useState<string[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    setExpandedPackages([]) // Clear expanded packages when switching tabs
  }

  const togglePackageExpansion = (packageName: string) => {
    setExpandedPackages(
      (prev) =>
        prev.includes(packageName)
          ? prev.filter((name) => name !== packageName) // Remove if already expanded
          : [...prev, packageName], // Add if not expanded
    )
  }

  const packages: Package[] = pricingData().map((pkg) => ({
    ...pkg,
    category: pkg.name.split(" ").slice(0, 2).join(" ").toLowerCase(),
  }))

  const services = [
    "All",
    "Web Design & Development",
    "Mobile Application Development",
    "Logo",
    "Animation",
    "Illustration",
    "Branding",
    "SaaS",
    "SEO",
    "SMM",
  ]

  const filteredPackages =
    activeTab === "All"
      ? packages
      : packages.filter((pkg) => pkg.category.includes(activeTab.toLowerCase().split(" ")[0]))

  // Hardcoded columns for large screens (3 columns) and medium screens (2 columns)
  const column1 = filteredPackages.filter((_, index) => index % 3 === 0)
  const column2 = filteredPackages.filter((_, index) => index % 3 === 1)
  const column3 = filteredPackages.filter((_, index) => index % 3 === 2)

  let isDragging = false
  let startX = 0
  let scrollLeft = 0

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return
    isDragging = true
    startX = e.pageX - scrollRef.current.offsetLeft
    scrollLeft = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = "grabbing"
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // Speed factor
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    isDragging = false
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab"
    }
  }

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

      {/* Draggable Horizontal Scroll for Service Tabs */}
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200 mb-8 md:mb-10 border border-red-700 rounded-xl py-2 px-2 scroll-smooth cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove as unknown as React.MouseEventHandler<HTMLDivElement>}
      >
        <div className="flex w-max lg:w-full space-x-2 items-center justify-center">
          {services.map((service) => (
            <button
              key={service}
              className={`px-3 text-sm font-semibold md:px-5 py-2 rounded-lg flex items-center justify-center ${
                activeTab === service ? "bg-red-500 text-white" : "text-black"
              } hover:bg-red-700 hover:text-white transition duration-300`}
              onClick={() => handleTabClick(service)}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid gap-6 md:gap-8 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1"
        >
          {/* Column 1 */}
          <div className="space-y-6">
            {column1.map((pkg) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                isExpanded={expandedPackages.includes(pkg.name)}
                togglePackageExpansion={togglePackageExpansion}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {column2.map((pkg) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                isExpanded={expandedPackages.includes(pkg.name)}
                togglePackageExpansion={togglePackageExpansion}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {column3.map((pkg) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                isExpanded={expandedPackages.includes(pkg.name)}
                togglePackageExpansion={togglePackageExpansion}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// PackageCard Component
const PackageCard = ({
  pkg,
  isExpanded,
  togglePackageExpansion,
}: {
  pkg: Package
  isExpanded: boolean
  togglePackageExpansion: (packageName: string) => void
}) => {
  return (
    <motion.div className="rounded-lg p-6 flex flex-col py-12 shadow-lg border border-red-600" layout>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{pkg.name}</h3>
      <p className="text-4xl md:text-5xl font-semibold mb-4">${pkg.price}</p>
      <button
        className="hover:text-white py-3 underline px-4 rounded-md mb-4 hover:bg-red-500 text-red-500 transition duration-300 border"
        onClick={() => togglePackageExpansion(pkg.name)}
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
            <Link href={"/contact"}>
            <button className="hover:text-white py-3 w-full border border-red-500 px-4 rounded-md mt-auto hover:bg-red-500 text-black transition duration-300">
              Get Started
            </button></Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default PricingSection

