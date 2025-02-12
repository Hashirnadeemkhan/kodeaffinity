"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io"
import { services } from "@/app/data/services"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const handleLinkClick = () => {
    setIsOpen(false)
    setMobileServicesOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top
        setIsSticky(window.scrollY > 40)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      ref={navRef}
      className={`${isSticky ? "fixed top-0 pt-5 left-0 right-0" : ""} z-50 transition-all duration-300`}
    >
      <nav
        className={`bg-white shadow-md mx-auto ${
          isSticky ? "top-0" : ""
        } w-[90%] lg:w-[85%] rounded-lg transition-all duration-300 ease-in-out`}
      >
        <div className="lg:px-16 px-10 flex justify-between items-center">
          <div className="flex items-center ">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" height={100} width={100} priority className="md:w-20 md:h-20" />
            </Link>
          </div>

          <div className="hidden lg:flex lg:space-x-16">
            <Link href="/" className="text-black hover:text-gray-800 ">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600">
              About us
            </Link>

            <div className="relative inline-block">
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                  <DropdownMenuTrigger className="text-black hover:text-gray-800 flex items-center cursor-pointer gap-x-1">
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

            <Link href="/pricing" className="text-black hover:text-gray-600">
              Pricing
            </Link>
            <Link href="/blog" className="text-black hover:text-gray-600">
              Blogs
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600">
              Contact us
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link
              href="/calendly"
              className="bg-transparent border border-red-500 text-black hover:text-white py-2  lg:px-6 mx-1 rounded-full hover:bg-red-700 transition-all duration-300"
            >
              Calendly
            </Link>
            <Link
              href="/contact"
              className="bg-red-700 text-white py-2 px-7 mx-1 rounded-full hover:bg-red-600 transition-all  duration-300"
            >
              Call us
            </Link>
          </div>

          <button className="lg:hidden text-3xl" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            &#9776;
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg px-6  text-center">
            <Link href="/" className="block text-black hover:text-gray-800 mb-2" onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/about" className="block text-black hover:text-gray-800 mb-2" onClick={handleLinkClick}>
              About us
            </Link>

            <div className="mb-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-black hover:text-gray-800 flex items-center justify-center"
              >
                Services{" "}
                <IoIosArrowDown
                  className={`ml-1 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileServicesOpen ? "max-h-96" : "max-h-0"}`}
              >
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="block py-2 px-4 text-black hover:bg-gray-100"
                    onClick={handleLinkClick}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/pricing" className="block text-black hover:text-gray-800 mb-2" onClick={handleLinkClick}>
              Pricing
            </Link>
            <Link href="/blog" className="block text-black hover:text-gray-800 mb-2" onClick={handleLinkClick}>
              Blogs
            </Link>
            <Link href="/contact" className="block text-black hover:text-gray-800 mb-2" onClick={handleLinkClick}>
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
    </div>
  )
}

export default Navbar

