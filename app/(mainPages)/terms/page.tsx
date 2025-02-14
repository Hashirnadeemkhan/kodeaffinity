import React from "react"
import TermLayout from "@/app/components/(private)/TermLayout"
import Creativity from "@/app/components/widgets/Creativity-service"
import Companies from "@/app/components/widgets/Companies"

// Define the BreadcrumbItem type
type BreadcrumbItem = 
  | { type: "link"; label: string; href: string }
  | { type: "page"; label: string; href?: undefined }

const Terms = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { type: "link", label: "Home", href: "/" },
    { type: "page", label: "Terms and Services" },
  ]

  return (
    <div>
      {/* Layout for header and breadcrumb */}
      <TermLayout title="Terms and Services" breadcrumb={breadcrumbItems} />
      <section className="max-w-screen-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">
          Your Privacy Matters to Us
        </h2>
        <p className="text-gray-700 mb-6">
          At [Your Company Name], we are committed to protecting your personal
          information. This Privacy Policy outlines how we collect, use, and
          safeguard your data while providing our services.
        </p>

        <h3 className="text-xl font-semibold text-purple-700 mb-2">
          1. Information We Collect
        </h3>
        <p className="text-gray-700 mb-4">
          We collect personal information that you provide to us when you use
          our website, such as your name, email address, and any messages you
          send to us. We may also collect technical data like your IP address,
          browser type, and device information.
        </p>

        <h3 className="text-xl font-semibold text-purple-700 mb-2">
          2. How We Use Your Information
        </h3>
        <p className="text-gray-700 mb-4">
          Your information is used to improve our services, communicate with
          you, and enhance your overall experience on our platform. We also use
          it to ensure security and prevent fraud.
        </p>

        {/* Add more dummy sections as needed */}
        <h3 className="text-xl font-semibold text-purple-700 mb-2">
          3. Sharing Your Information
        </h3>
        <p className="text-gray-700 mb-4">
          We do not sell or share your information with third parties without
          your consent, except for legal or regulatory reasons.
        </p>

        <h3 className="text-xl font-semibold text-purple-700 mb-2">
          4. Your Rights
        </h3>
        <p className="text-gray-700 mb-4">
          You have the right to access, modify, or delete your personal
          information at any time. To exercise these rights, contact our
          support team.
        </p>
      </section>
      {/* Render other components */}
      <Companies />
      <Creativity />
    </div>
  )
}

export default Terms
