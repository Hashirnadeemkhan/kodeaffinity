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
          'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)),url("/mainbg.png")', // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Keep background fixed
        minHeight: isReducedHeight ? "50vh" : "100vh", // Adjust height dynamically
      }}
    >
      <div className="pt-6">
        <Navbar />
      </div>
      <Hero isAboutOnly={isAboutOnly} />
    </div>
  );
};

export default HomeLayout;