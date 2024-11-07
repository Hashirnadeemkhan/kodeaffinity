// "use client"
// import React, { useEffect } from 'react';
// import Wrapper from '../shared/Wrapper';
// import { CountUp } from 'countup.js';

// const OurApproch = () => {
//   useEffect(() => {
//     const animateNumbers = () => {
//       // Select all elements with the 'count-up' class
//       const numberElements = document.querySelectorAll('.count-up');
      
//       // Set up Intersection Observer to trigger animation when the elements come into view
//       const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const el = entry.target;
//             const start = 0;
//             const end = parseInt(el.getAttribute('data-end'));
//             const duration = 2; // Duration of the animation in seconds
//             const options = { startVal: start, endVal: end, duration: duration };

//             // Initialize CountUp for each number element
//             const countUpInstance = new CountUp(el, options.endVal, options);
//             if (countUpInstance.error) {
//               console.error(countUpInstance.error);
//             } else {
//               countUpInstance.start();
//             }

//             // Stop observing the element after the animation starts
//             observer.unobserve(el);
//           }
//         });
//       }, { threshold: 0.5 }); // Trigger when 50% of the element is in the viewport

//       // Observe all number elements
//       numberElements.forEach(el => {
//         observer.observe(el);
//       });
//     };

//     // Trigger the animateNumbers function when the component mounts
//     animateNumbers();
//   }, []);

//   return (
//     <Wrapper>
//       <section className="flex flex-col lg:flex-row justify-between items-center px-40 py-16 bg-gray-50">
//         {/* Left Side - Text Content */}
//         <div className="w-full lg:w-1/2">
//           <h3 className="text-[#569acc] font-semibold uppercase">Our Approach</h3>
//           <h2 className="text-3xl font-bold mt-2">
//             We believe in a comprehensive approach to digital marketing
//           </h2>
//           <p className="text-gray-600 mt-4">
//             Our process begins with getting to know our clients and understanding
//             their business goals. We conduct thorough research to identify the
//             best digital marketing strategies for their industry, target audience,
//             and budget.
//           </p>

//           <h3 className="text-[#569acc] font-semibold uppercase mt-12">
//             Industry Experiences
//           </h3>
//           <h2 className="text-3xl font-bold mt-2">
//             Where Technology & Strategy Converge
//           </h2>
//           <p className="text-gray-600 mt-4">
//             At Bonjo Tech, we take pride in being a data-driven and results-oriented
//             agency. We have a team of experienced digital marketing experts who stay
//             up-to-date with the latest industry trends and technologies.
//           </p>

//           <ul className="mt-6 space-y-2 text-blue-800">
//             <li className="flex items-center">
//               <span className="mr-2">+</span> Best Tools & Strategies
//             </li>
//             <li className="flex items-center">
//               <span className="mr-2">+</span> Transparency and Communication
//             </li>
//             <li className="flex items-center">
//               <span className="mr-2">+</span> Personalized Solutions
//             </li>
//           </ul>
//         </div>

//         {/* Right Side - Stats Boxes */}
//         <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-lg mt-10 lg:mt-0">
//           <div className="text-center">
//             <h3 className="text-4xl font-bold count-up" data-end="19">0</h3>
//             <p className="text-gray-500">Total Top Services</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-4xl font-bold count-up" data-end="27">0</h3>
//             <p className="text-gray-500">Countries</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-4xl font-bold count-up" data-end="98">0</h3>
//             <p className="text-gray-500">Positive Feedback</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-4xl font-bold count-up" data-end="2664">0</h3>
//             <p className="text-gray-500">Usual Users</p>
//           </div>
//         </div>
//       </section>
//     </Wrapper>
//   );
// };

// export default OurApproch;
