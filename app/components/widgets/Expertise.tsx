import React from 'react';
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="bg-white text-black py-12 px-6 lg:mt-20 mt-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h5 className="text-red-500 uppercase tracking-wide font-semibold">
            Showcasing Our Expertise
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bringing Your <span className="bg-gradient-to-r from-[#981127] via-[#652046] to-[#24346D] bg-clip-text text-transparent italic">vision to life</span>
          </h1>
          <p className="mt-4 text-base md:text-lg">
          At Kode Affinity, our mission is to help businesses unlock their full potential through technology. We are dedicated to providing end-to-end IT solutions that drive growth, efficiency, and long-term success.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
