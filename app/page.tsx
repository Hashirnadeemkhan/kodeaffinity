
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
import Footer from "./components/widgets/Footer";




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
      <Companies/>
      <Testimonals/>
      <Footer/>
    </div>

  );
}
