 import Navbar from '@/app/components/widgets/Navbar'
import React from 'react'
import Journey from "@/app/components/widgets/Journey";
import CoreValue from '@/app/components/widgets/CoreValue';
import Expertise from '@/app/components/widgets/Expertise';
import OurProcess from '@/app/components/widgets/OurProcess';
import Testimonals from '@/app/components/widgets/Testimonals';
import PricingSection from '@/app/components/widgets/PricingSection';
import FAQSection from '@/app/components/widgets/Faqs';
import Companies from '@/app/components/widgets/Companies';
import Layout from "../../components/(private)/Layout";

const page = () => {
  return (
    <div>
        <Layout isAboutOnly={true} isReducedHeight={true}/>
      <Journey/>
      <CoreValue/>
      <Expertise/>
      <OurProcess/>
      <PricingSection/>
      <FAQSection/>
      <Testimonals/>
      <Companies/>

    </div>
  )
}

export default page
