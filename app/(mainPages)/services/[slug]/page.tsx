// ServicePage.tsx
import { notFound } from "next/navigation";
import { services } from "@/app/data/services";
import FAQSection from "@/app/components/widgets/Faqs";
import Creativity from "@/app/components/widgets/Creativity-service";
import ServiceLayout from "@/app/components/(private)/ServiceLayout";
import Companies from "@/app/components/widgets/Companies";
import AnimatedServiceSection from "@/app/components/widgets/AnimatedServiceSection";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <ServiceLayout service={service} />
      <AnimatedServiceSection service={service} />
      <FAQSection />
      <Companies />
      <Creativity />
    </div>
  );
}
