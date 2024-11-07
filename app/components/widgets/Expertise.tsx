import React from 'react';
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Expertise = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-black text-white py-12 px-6 ">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h5 className="text-purple-300 uppercase tracking-wide font-semibold">
            Showcasing Our Expertise
          </h5>
          <h1 className="text-5xl font-bold leading-tight">
            Bringing Your <span className="text-purple-500 italic">vision to life</span>
          </h1>
          <p className="mt-4 text-lg">
            At Intact One Solution, our portfolio highlights our commitment to quality and innovation. Weve collaborated with clients from various industries, including technology, healthcare, and e-commerce, transforming their visions into successful outcomes. Explore our projects to see how our expertise can bring your ideas to life.
          </p>
        </div>

        {/* Slider/Carousel */}
        {/* <Slider {...settings}>
          <div className="p-4">
            <div className="bg-white rounded-lg p-4">
              <Image 
                src="/swingfire.png" 
                alt="Swingfire Project" 
                width={500}
                height={400}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-black">Swingfire</h3>
              <p className="text-gray-700">A project we worked on for mobile solutions.</p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white rounded-lg p-4">
              <Image 
                src="/lead.png" 
                alt="Lead Project" 
                width={500}
                height={400}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-black">LEAD Project</h3>
              <p className="text-gray-700">Collaborative project for enhancing action and leadership.</p>
            </div>
          </div>
          {/* Add more slides as needed */}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Expertise;
