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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h5 className="text-purple-300 uppercase tracking-wide font-semibold">
            Showcasing Our Expertise
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bringing Your <span className="text-purple-500 italic">vision to life</span>
          </h1>
          <p className="mt-4 text-base md:text-lg">
            At Intact One Solution, our portfolio highlights our commitment to quality and innovation. {`We've`} collaborated with clients from various industries, including technology, healthcare, and e-commerce, transforming their visions into successful outcomes. Explore our projects to see how our expertise can bring your ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
