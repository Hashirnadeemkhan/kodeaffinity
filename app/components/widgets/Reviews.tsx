"use client"
import React, { useEffect, useState } from 'react';

const Reviews = () => {
  // States to hold the current counts
  const [onTimeDelivery, setOnTimeDelivery] = useState(0);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);
  const [repeatBusiness, setRepeatBusiness] = useState(0);

  // Function to animate the counter
  const animateCounter = (target:any, setValue:any) => {
    let currentValue = 0;
    const increment = Math.ceil(target / 100); // Divide target value by 100 for smoother animation
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= target) {
        currentValue = target;
        clearInterval(interval);
      }
      setValue(currentValue);
    }, 20); // Adjust the interval timing for speed of the animation
  };

  useEffect(() => {
    // Animate each counter to the target value
    animateCounter(98, setOnTimeDelivery);
    animateCounter(99, setCustomerSatisfaction);
    animateCounter(100, setRepeatBusiness);
  }, []);

  return (
    <div>
      <div className='flex flex-col md:flex-row px-5 gap-10  justify-around w-full bg-gradient-to-r from-[#981127] via-[#652046] to-[#24346D] text-white text-center py-10'>
        {/* <!-- On Time Delivery --> */}
        <div className='flex flex-col justify-center items-center'>
          <h2 className="text-5xl font-bold">{onTimeDelivery}%</h2>
          <p className="lg:text-lg md:text-xl mt-2 font-semibold">ON TIME DELIVERY</p>
          <p className="text-sm mt-1 max-w-sm text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        {/* <!-- Customer Satisfaction --> */}
        <div className="flex flex-col justify-center items-cente">
          <h2 className="text-5xl font-bold">{customerSatisfaction}%</h2>
          <p className="text-lg mt-2 font-semibold">CUSTOMER SATISFACTION</p>
          <p className="text-sm mt-1 max-w-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        {/* <!-- Repeat Business --> */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold">{repeatBusiness}%</h2>
          <p className="lg:text-lg md:text-xl mt-2 font-semibold">REPEAT BUSINESS</p>
          <p className="text-sm mt-1 max-w-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
