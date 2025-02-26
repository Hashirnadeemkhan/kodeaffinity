import React from "react"
import Layout from "@/app/components/(private)/Layout"
import PricingSection from "@/app/components/widgets/PricingSection"

import Creativity from "@/app/components/widgets/Creativity-service"
import Companies from "@/app/components/widgets/Companies"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing for IT Services | Kode Affinity",
  description:
    "Find the best pricing for Kode Affinity’s web development, mobile apps, SEO, and more. Explore our flexible packages designed to fit your business needs and budget.",
};

const PricingPage = () => {
  return (
    <div>
      <Layout isPricingOnly={true} isReducedHeight={true} />
      <PricingSection />
      <Companies/>
      <Creativity/>
  
    </div>
  )
}

export default PricingPage

