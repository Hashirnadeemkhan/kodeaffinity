import React from "react"
import Image from "next/image"
import Button from "../shared/Button"
import Link from "next/link"

const Creativity = () => {
  return (
    <div className="relative px-4 mt-28 mb-20">
      <div className="relative w-full bg-gradient-to-b from-red-800 via-red-600 to-red-400 rounded-xl max-w-7xl mx-auto">
        <div className="px-4 pt-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="relative z-10 md:pl-10 flex-1">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 ">
                Craft creativity with our <span className="italic">Digital Experts.</span>
              </h1>
              <button className="text-lg px-8 py-3 rounded-xl bg-white text-black hover:bg-red-50">
                Get started free
              </button>
            </div>

            {/* Right Content */}
            <div className="relative flex-1 w-full">
              {/* Main Image */}
              <div className="relative w-full h-[350px] md:h-[280px] lg:h-[300px] lg:-mt-20 lg:-mb-12 md:-mb-20 md:-mt-28  rounded-xl z-20 overflow-hidden">
                <Image
                  src="/assets/creativity-img.webp"
                  alt="Digital Expert at Work"
                  fill
                  className="object-contain absolute rounded-xl z-10 lg:pl-52 mt-8 md:mt-0"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creativity

