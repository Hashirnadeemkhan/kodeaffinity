// AnimatedServiceSection.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

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

const AnimatedServiceSection = ({ service }: { service: any }) => {
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const ref = useRef(null);

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
    <section ref={ref} className="bg-gray-50 text-black py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          className="max-w-2xl space-y-5"
          initial="hidden"
          animate={textControls}
          variants={textAnimation}
        >
          <p className="text-red-500 text-sm uppercase tracking-widest font-semibold">
            {service.title}
          </p>
          <h1 className="lg:text-5xl md:text-4xl text-2xl mt-2 ">
            Cutting-Edge{" "}
            <span className="bg-gradient-to-r font-bold from-[#981127] via-[#652046] to-[#24346D] bg-clip-text text-transparent">
              {service.description}
            </span>{" "}
            for Digital Success
          </h1>
          <p className="mt-4 text-black lg:text-lg text-sm">{service.information}</p>
        </motion.div>
        <motion.div
          className="flex-shrink-0"
          initial="hidden"
          animate={imageControls}
          variants={imageAnimation}
        >
          <Image
            src="/assets/1.png"
            alt="Web design illustration"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedServiceSection;
