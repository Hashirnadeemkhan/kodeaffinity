"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io"
import { services } from "@/app/data/services"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-md mx-auto top-4 w-[90%] lg:w-[85%] rounded-lg z-10">
      <div className="lg:px-16 px-10 flex justify-between items-center">
        <div className="flex items-center ">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" height={100} width={100} priority className="md:w-20 md:h-20"/>
          </Link>
        </div>

        <div className="hidden md:flex lg:space-x-16 md:space-x-3">
          <Link href="/" className="text-gray-800 hover:text-gray-600 ">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About us
          </Link>

          <div className="relative inline-block">
          <DropdownMenu open={open} onOpenChange={setOpen}>
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <DropdownMenuTrigger className="text-gray-800 hover:text-gray-600 flex items-center cursor-pointer gap-x-1">
            Services <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {services.map((service) => (
              <DropdownMenuItem key={service.id} onSelect={() => setOpen(false)}>
                <Link href={`/services/${service.slug}`} className="w-full">
                  {service.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
          </div>

          <Link href="/pricing" className="text-gray-800 hover:text-gray-600">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact us
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="/calendly"
            className="bg-transparent border border-red-500 text-black hover:text-white py-2 md:text-sm  md:px-5 lg:px-6 mx-1 rounded-full hover:bg-red-700 transition-all duration-300"
          >
            Calendly
          </Link>
          <Link
            href="/contact"
            className="bg-red-700 text-white py-2 px-7 mx-1 rounded-full hover:bg-red-600 transition-all md:text-sm  duration-300"
          >
            Call us
          </Link>
        </div>

        <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 text-center ">
          <Link href="/" className="block  text-gray-800 hover:text-gray-600 mb-2" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/about" className="block f text-gray-800 hover:text-gray-600 mb-2" onClick={handleLinkClick}>
            About us
          </Link>

          <div className="flex justify-center mb-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-800 hover:text-gray-600 flex items-center ">
                Services <IoIosArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service) => (
                  <DropdownMenuItem key={service.id}>
                    <Link href={`/services/${service.slug}`} className="w-full" onClick={handleLinkClick}>
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link href="/pricing" className="block text-gray-800 hover:text-gray-600 mb-2" onClick={handleLinkClick}>
            Pricing
          </Link>
          <Link href="/contact" className="block text-gray-800 hover:text-gray-600 mb-2" onClick={handleLinkClick}>
            Contact us
          </Link>

          <Link
            href="/contact"
            className="block bg-red-600 text-white py-2 px-4 rounded-full mt-4 hover:bg-red-700 transition-all duration-300"
            onClick={handleLinkClick}
          >
            Call us
          </Link>
          <Link
            href="/calendly"
            className="block bg-transparent border border-red-500 text-black hover:text-white py-2 px-4 rounded-full mt-4 hover:bg-red-700 transition-all duration-300"
            onClick={handleLinkClick}
          >
            Calendly
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar

