import React from "react"
import Layout from "@/app/components/(private)/Layout"
import PricingSection from "@/app/components/widgets/PricingSection"

import Creativity from "@/app/components/widgets/Creativity-service"

const PricingPage = () => {
  return (
    <div>
      <Layout isPricingOnly={true} isReducedHeight={true} />
      <PricingSection />
      <Creativity/>
  
    </div>
  )
}

export default PricingPage

