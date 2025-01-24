"use client";
import Image from "next/image";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import { useEffect, useState } from "react";

// Define the type for the component props
interface HeroProps {
  isAboutOnly: boolean;
}

const Hero: React.FC<HeroProps> = ({ isAboutOnly }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (isAboutOnly) {
    // Render only the About heading when the prop is passed
    return (
      <Wrapper>
        <section className="flex justify-center items-center mt-20">
          <h1 className="text-7xl md:text-6xl font-semibold bg-gradient-to-r from-[#981127] via-[#652046] to-[#24346D] bg-clip-text text-transparent ">
            About US
          </h1>
        </section>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <section className="flex flex-col lg:flex-row items-center mt-14">
        <div className="container mx-auto px-6 mt-10">
          <div
            className={`max-w-xl transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="font-normal text-black">Hello there!</h4>
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 leading-tight">
              Empowering your Business with IT Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              quia laborum voluptate repellat perferendis labore magnam est
              excepturi. Vel quas soluta nostrum et ullam quod, sed laborum sit,
              in id reprehenderit mollitia. Repellat iste, odio praesentium est
              quo non nesciunt iusto ab labore voluptatum assumenda.
            </p>
            <div className="mt-5 transition-opacity duration-1000 delay-500 mb-10">
              <Button text="About us"></Button>
            </div>
          </div>
        </div>
        <div className="px-20 mb-10 hidden md:block">
          <Image
            src={"/assets/Hero.png"}
            alt="hero"
            height={300}
            width={300}
            className={`transition-all duration-1000 ease-in-out transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;