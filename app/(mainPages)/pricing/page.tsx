import React from "react"
import Layout from "@/app/components/(private)/Layout"
import PricingSection from "@/app/components/widgets/PricingSection"
import Footer from "@/app/components/widgets/Footer"
import Creativity from "@/app/components/widgets/Creativity-service"

const PricingPage = () => {
  return (
    <div>
      <Layout isPricingOnly={true} isReducedHeight={true} />
      <PricingSection />
      <Creativity/>
   
      <Footer />
    </div>
  )
}

export default PricingPage

