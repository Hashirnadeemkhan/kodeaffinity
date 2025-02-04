// app/about.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Wrapper from "@/app/components/shared/Wrapper";
import Image from "next/image";
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

const About = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
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
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      imageControls.start("visible");
      textControls.start("visible");
    } else {
      imageControls.start("hidden");
      textControls.start("hidden");
    }
  }, [isIntersecting, imageControls, textControls]);

  return (
    <div>
      <Wrapper>
        <div
          className="flex flex-col md:flex-row items-center justify-center mt-10 bg-white overflow-hidden"
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
            />
          </motion.div>

          <motion.div
            className="mt-8 md:mt-0 flex-1"
            initial="hidden"
            animate={textControls}
            variants={textAnimation}
          >
            <motion.h4 className="md:text-xl text-lg font-semibold text-red-600 mb-2">
             Our Journey
            </motion.h4>

            <motion.h2 className="md:text-5xl text-3xl  leading-tight">
              Empowering your <br />
              Business Through <br />
              Innovation
            </motion.h2>

            <motion.p className="mt-4 text-gray-600 lg:text-lg text-sm mb-5">
              At Intact One Solution, our journey began with a passion for digital transformation and a commitment to delivering cutting-edge solutions. Since our inception, we’ve embraced innovation and AI-driven technology, helping businesses across industries thrive in the ever-evolving digital landscape. Our mission is to bridge the gap between businesses and technological advancements, crafting solutions that are both forward-thinking and impactful.
            </motion.p>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
