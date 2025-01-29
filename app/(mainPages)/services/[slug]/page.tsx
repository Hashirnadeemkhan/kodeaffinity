import { notFound } from "next/navigation"
import { services } from "@/app/data/services"
import Image from "next/image"
import FAQSection from "@/app/components/widgets/Faqs"
import Footer from "@/app/components/widgets/Footer"
import Creativity from "@/app/components/widgets/Creativity-service"
import ServiceLayout from "@/app/components/(private)/ServiceLayout"
import Companies from "@/app/components/widgets/Companies"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() { 
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div>
      <ServiceLayout service={service} />
      <section className="bg-gray-50 text-black py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-500 text-sm uppercase tracking-widest font-semibold">{service.title}</p>
          <h1 className="md:text-4xl text-2xl font-bold mt-2">
            Cutting-Edge <span className="text-red-600">{service.description}</span> for Digital Success
          </h1>
          <p className="mt-4 text-black text-sm">{service.information}</p>
        </div>
        <div className="flex justify-center mt-8">
          <Image
            src="/assets/service-web.svg"
            alt="Web design illustration"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      <FAQSection />
      <Companies/>
      <Creativity />
      <Footer />
    </div>
  )
}

