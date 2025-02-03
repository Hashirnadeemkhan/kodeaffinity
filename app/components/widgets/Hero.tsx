"use client";
import Image from "next/image";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


// Define the type for the component props
interface HeroProps {
  isAboutOnly?: boolean
  isPricingOnly?: boolean
}

const Hero: React.FC<HeroProps> = ({ isAboutOnly, isPricingOnly }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (isAboutOnly || isPricingOnly) {
    // Render only the About or Pricing heading when the prop is passed
    const title = isAboutOnly ? "About Us" : "Pricing"
    const breadcrumbPage = isAboutOnly ? "About" : "Pricing"

    return (
      <Wrapper>
        <section className="flex flex-col gap-y-5 justify-center items-center mt-20">
          <h1 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#981127] via-[#652046] to-[#24346D] bg-clip-text text-transparent ">
            {title}
          </h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <BreadcrumbPage>{breadcrumbPage}</BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <section className="flex flex-col lg:flex-row items-center mt-14">
        <div className="container px-6 mt-10">
          <div
            className={`max-w-xl transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="font-normal text-black">Hello there!</h4>
            <h1 className="text-4xl md:text-6xl  font-normal text-gray-800 leading-tight ">
            Empowering Businesses with Cutting-Edge IT Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-600 ">
            At Kode Affinity, we turn your vision into reality with innovative, scalable, and tailored IT solutions. From stunning websites to dynamic mobile apps and strategic branding, we’re here to help your business thrive in a digital-first world.
            </p>
            <div className="mt-5 transition-opacity duration-1000 delay-500 mb-10">
              <Button text="Get Started Now"></Button>
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