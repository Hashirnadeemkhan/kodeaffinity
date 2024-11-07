"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (  
    <nav className="bg-white shadow-md mx-auto top-4 w-[90%] lg:w-[85%]  rounded-lg z-10 ">
      <div className="lg:px-16 px-10 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" height={100} width={100} className="w-24" />
        </div>
        <div className="hidden md:flex lg:space-x-16 md:space-x-7">
          <Link href="/" className="text-gray-00 hover:text-gray-600">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">About us</Link>
          <Link href="/services" className="text-gray-800 hover:text-gray-600">Services</Link>
          <Link href="/blogs" className="text-gray-800 hover:text-gray-600">Blogs</Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact us</Link>
        </div>
        <a href="#call" className="hidden md:inline-block bg-red-700 text-white py-2 px-5 md:mx-1 rounded-full hover:bg-red-500">Call us</a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-3xl">&#9776;</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 text-center">
          <Link href="#home" className="block text-gray-800 hover:text-gray-600 mb-2">Home</Link>
          <Link href="#about" className="block text-gray-800 hover:text-gray-600 mb-2">About us</Link>
          <Link href="#services" className="block text-gray-800 hover:text-gray-600 mb-2">Services</Link>
          <Link href="#blogs" className="block text-gray-800 hover:text-gray-600 mb-2">Blogs</Link>
          <Link href="#contact" className="block text-gray-800 hover:text-gray-600 mb-2">Contact us</Link>
          <a href="#call" className="block bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-500 mt-4">Call us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
