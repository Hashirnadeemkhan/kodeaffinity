import React from "react"
import ServiceLayout from "@/app/components/(private)/ServiceLayout"
import ServicesSection from "@/app/components/widgets/Services"
import Creativity from "@/app/components/widgets/Creativity-service"
import Companies from "@/app/components/widgets/Companies"

// Define the BreadcrumbItem type with specific type constraints
type BreadcrumbItem = 
  | { type: "link"; label: string; href: string }
  | { type: "page"; label: string; href?: undefined }

const Service = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { type: "link", label: "Home", href: "/" },
    { type: "page", label: "Services" },
  ]

  return (
    <div>
      {/* Service layout for header/breadcrumb */}
      <ServiceLayout title={"Services"} breadcrumb={breadcrumbItems} />

      {/* Service section rendered separately */}
      <ServicesSection />
      <Companies />
      <Creativity />
    </div>
  )
}

export default Service