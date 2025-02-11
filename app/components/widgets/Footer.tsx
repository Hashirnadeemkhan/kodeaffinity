import Image from "next/image"

import Link from "next/link"

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-white pt-8"
      style={{
        backgroundImage: 'linear-gradient(to right, #7f1d1d, #6b21a8, #1e3a8a), url("/assets/bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-start">
          {/* Logo and Description */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
            <div className="flex justify-start mb-4">
              <Image src="/whitelogo.png" width={100} height={100} alt="Logo"   style={{ width: "auto", height: "auto" }} />
            </div>
            <div className="flex justify-start space-x-4 items-start mb-4">
              <span>
             
                <Link href={""}><FaFacebookF size={20} /></Link>
              </span>
              <span>
              <Link href={""}><FaInstagram size={20} /></Link>
              </span>
              <span>
              <Link href={""}><FaTiktok size={20} /></Link>
              </span>
              <span>
              <Link href={""}><FaYoutube size={20} /></Link>
              </span>
            </div>
            <p className="text-sm">
              At Kode Affinity, we turn your vision into reality with innovative, scalable, and tailored IT solutions.
              From stunning websites to dynamic mobile apps and strategic branding, {`we're`} here to help your business
              thrive in a digital-first world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 px-4">
            <h3 className="font-bold mb-4 text-xl lg:text-2xl">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  Pricings
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 px-4">
            <h3 className="font-bold mb-4 text-xl lg:text-2xl">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 px-4">
            <h3 className="font-bold mb-4 text-xl lg:text-2xl">Contact</h3>
            <ul className="space-y-2">
              <li>
                <i className="fas fa-phone-alt"></i> +92 123456789
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@abc.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Abc Road, Street No 01
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 border-t border-gray-500 pt-4 bg-black w-full pb-3">
        <p>© 2024 KodeAffinity All Rights Reserved.</p>
      </div>
    </footer>
  )
}

