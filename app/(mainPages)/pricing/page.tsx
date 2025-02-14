import React from "react"
import Layout from "@/app/components/(private)/Layout"
import PricingSection from "@/app/components/widgets/PricingSection"

import Creativity from "@/app/components/widgets/Creativity-service"
import Companies from "@/app/components/widgets/Companies"

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

