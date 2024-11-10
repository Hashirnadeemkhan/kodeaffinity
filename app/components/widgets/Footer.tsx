import React from 'react';
import Image from 'next/image';
import facebook from '/public/assets/facebook.png'
import instagram from '/public/assets/instagram.png';
import tiktok from '/public/assets/tiktok.png'
import youtube from '/public/assets/Youtube.png'

export default function Footer() {
  return (
    <footer className="text-white pt-8"
      style={{
        backgroundImage: 'linear-gradient(to right, #7f1d1d, #6b21a8, #1e3a8a), url("/assets/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-wrap justify-center md:justify-between w-full">
          {/* Logo and Description */}
          <div className="w-full md:w-1/5 text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center  mb-4">
              <Image src="/whitelogo.png" width={100} height={100} alt="Logo" /> {/* Replace with your logo */}
            </div>
            <div className="flex justify-center  space-x-4 items-center mb-4">
              <span><Image src={facebook} alt="fb" height={10} width={10} /></span>
              <span><Image src={instagram} alt="ins" height={10} width={10} /></span>
              <span><Image src={tiktok} alt="tiktok" height={10} width={10} /></span>
              <span><Image src={youtube} alt="yt" height={10} width={10} /></span>
            </div>
            <p className="text-sm text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryss standard dummy text since the 1500s.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/5 text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-bold mb-4 lg:text-2xl text-xl">Quick Links</h3>
            <ul className="space-y-5">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Pricings</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-bold mb-4 lg:text-2xl text-xl">Resources</h3>
            <ul className="space-y-5">
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="font-bold mb-4 lg:text-2xl text-xl">Contact</h3>
            <ul className="space-y-5">
              <li><i className="fas fa-phone-alt"></i> +92 123456789</li>
              <li><i className="fas fa-envelope"></i> info@abc.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Abc Road, Street No 01</li>
              <li><i className="fas fa-map-marker-alt"></i> Karachi, Pakistan</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 border-t border-gray-500 pt-4 bg-black h-full w-full pb-3">
        <p>© 2024 KodeAffinity All Rights Reserved.</p>
      </div>
    </footer>
  );
}
