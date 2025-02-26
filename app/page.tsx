
// import Hero from "./components/widgets/Hero";
import Reviews from "./components/widgets/Reviews";
import AboutUs from "./components/widgets/AboutUs";
import Services from "./components/widgets/Services";
import Choose from "./components/widgets/Choose";
import Faqs from "./components/widgets/Faqs";
import Layout from "./components/(private)/Layout";
import Contact from "./components/widgets/Contact";
import Insights from "./components/widgets/Insights";
import Companies from "./components/widgets/Companies";
import Testimonals from "./components/widgets/Testimonals";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Kode Affinity | Innovative IT Solutions & Web Development Services",
  description:
    "Discover cutting-edge IT services with Kode Affinity. We offer custom web development, mobile app solutions, SEO, branding, and more to grow your business.",
};

export default function Home() {
  return (
    <div>
    
    <Layout isAboutOnly={false} isReducedHeight={false} />
      <Reviews/>
      <AboutUs/>
      <Services/>
      <Choose/>
      <Faqs/>
      <Contact/>
      <Insights/>
      <Testimonals/>
      <Companies/>
    
    </div>

  );
}
