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
          className="flex flex-col md:flex-row items-center justify-center p-10 bg-white overflow-hidden"
          ref={ref}
        >
          <motion.div
            className="flex-1"
            initial="hidden"
            animate={imageControls}
            variants={imageAnimation}
          >
            <Image
              src="/assets/about.png"
              alt="about"
              height={450}
              width={450}
              // layout="responsive" // Make the image responsive
              // objectFit="contain" // Scale the image properly
            />
          </motion.div>

          <motion.div
            className="mt-8 md:mt-0 flex-1"
            initial="hidden"
            animate={textControls}
            variants={textAnimation}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Why Choose Us
            </h3>
            <h2 className="text-5xl font-bold leading-tight">
              Why{" "}
              <span className="bg-gradient-to-r from-[#981127] via-[#652046] to-[#24346D] bg-clip-text text-transparent">
                KodeAffinity
              </span>{" "}
              Stands Out?
            </h2>
            <p className="mt-4 text-gray-600 lg:text-lg text-sm mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <Button text={"Learn more"} />
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Choose;
