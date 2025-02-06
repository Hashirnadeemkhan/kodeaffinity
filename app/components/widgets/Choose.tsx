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

const Choose = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

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
          className="flex flex-col-reverse md:flex-row items-center justify-center p-10  md:gap-x-10 bg-white overflow-hidden"
          ref={ref}
        >
      

          <motion.div
            className="mt-8 md:mt-0 flex-1 "
            initial="hidden"
            animate={textControls}
            variants={textAnimation}
          >
            <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-2 ">
              Why Choose Us
            </h3>
            <h2 className="md:text-5xl text-3xl font-bold leading-tigh ">
              Why{" "}
              <span className="bg-gradient-to-r from-[#981127] via-[#652046] to-[#24346D] bg-clip-text text-transparent">
                KodeAffinity <br />
              </span>{" "}
              Stands Out?
            </h2>
            <p className="mt-4 text-gray-600 lg:text-lg text-sm mb-5">
            At Kode Affinity, we’re not just service providers—we’re your digital partners. We combine creativity, technical expertise, and strategic thinking to deliver solutions that align with your business goals. Our focus is on helping you succeed in a competitive digital landscape.

            </p>
            {/* <Button text={"Learn more"} /> */}
          </motion.div>
          <motion.div
          
          initial="hidden"
          animate={imageControls}
          variants={imageAnimation}
        >
          <Image
            src="/assets/about3.png"
            alt="about"
            height={500}
            width={500}
         className="lg:w-[600px]  md:w-[300px]"
            // layout="responsive" // Make the image responsive
            // objectFit="contain" // Scale the image properly
          />
        </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Choose;
