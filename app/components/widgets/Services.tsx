import React from 'react';
import Image from 'next/image';
import Button from '../shared/Button';

const services = [
  {
    title: 'Website Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    image: '/assets/web.png',
  },
  {
    title: 'Search Engine Optimization',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    image: '/assets/seo.png',
  },
  {
    title: 'Branding',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    image: '/assets/brand.png',
  },
  {
    title: 'Pay Per Click (PPC)',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    image: '/assets/ppc.png',
  },
  {
    title: 'Social Media Marketing',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    image: '/assets/social.png',
  },
];

const ServicesSection = () => {
  return (
    <div
      className="bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 py-20 px-10 text-white"
      style={{
        backgroundImage: 'linear-gradient(to right, #7f1d1d, #6b21a8, #1e3a8a), url("/assets/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="lg:text-3xl text-2xl font-bold mb-4">WHAT WE DO</h2>
          <h3 className="lg:text-5xl text-4xl font-bold mb-4">OUR SERVICES INCLUDE:</h3>
          <p className="text-lg mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s,
          </p>
          <button className="bg-white text-red-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-start items-center w-full bg-opacity-[24%] bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image with consistent layout */}
              <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4"> {/* Adjust margin for spacing */}
                <Image src={service.image} alt={service.title} width={200} height={200} className="rounded-lg" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
                <p className="text-sm mb-4">{service.description}</p>
                <Button text='Learn more' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
