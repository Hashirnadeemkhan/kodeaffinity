"use client";
import React from "react";
import Navbar from "../widgets/Navbar";
import Hero from "../widgets/Hero";
import "../../globals.css";

// Define an interface for the props
interface HomeLayoutProps {
  isAboutOnly: boolean;
  isReducedHeight: boolean;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ isAboutOnly, isReducedHeight }) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9)),url("/mainbg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Use fixed for larger screens
      }}
    >
      <div
        className={`min-h-[50vh] md:min-h-[30vh] ${
          isReducedHeight ? "lg:min-h-[50vh]" : "lg:min-h-screen"
        }`}
      >
        <div className="pt-6">
          <Navbar />
        </div>
        <Hero isAboutOnly={isAboutOnly} />
      </div>
    </div>
  );
};

export default HomeLayout;
