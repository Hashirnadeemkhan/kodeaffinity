"use client";
import React, { useEffect, useRef } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Button from "../shared/Button";
import { motion, useAnimation } from "framer-motion";

const imageAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const textAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const AboutUs = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageControls.start("visible");
          textControls.start("visible");
        } else {
          imageControls.start("hidden");
          textControls.start("hidden");
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [imageControls, textControls]);

  return (
    <div>
      <Wrapper>
        <div
          className="flex flex-col-reverse md:flex-row items-center justify-center p-10 gap-y-10  md:gap-x-10  bg-white overflow-hidden"
          ref={ref}
        >
      

          <motion.div
            className="mt-8 md:mt-0 flex-1"
            initial="hidden"
            animate={textControls}
            variants={textAnimation}
          >
            <motion.h4 className="lg:text-xl text-lg font-semibold text-gray-700 mb-2 text-start">
            Who We Are
            </motion.h4>

            <motion.h2 className="lg:text-5xl text-2xl font-bold leading-tight ">
              Empowering your <br />
              <span className="text-red-600">Business</span>
            </motion.h2>

            <motion.p className="mt-4 text-gray-600 lg:text-lg text-sm mb-5 ">
            At Kode Affinity, we are your trusted partner in navigating the ever-evolving digital landscape. Specializing in custom software development, IT consultancy, and digital transformation solutions, we empower businesses to achieve their goals with innovative technology. Backed by years of experience and a team of skilled professionals, our vision is to drive success for our clients by delivering tailored solutions that are as unique as their businesses. With Kode Affinity, innovation meets reliability.


            </motion.p>
      

            <Button text={'Learn More'} />
      
          </motion.div>
          <motion.div
          
          initial="hidden"
          animate={imageControls}
          variants={imageAnimation}
        >
          <Image
            src="/assets/about2.png"
            alt="about"
            height={500}
            width={500}
         className="lg:w-[600px]  md:w-[300px]"

          />
        </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutUs;
