import { Metadata } from "next";
import { BannerCarousel } from "@/components/sections/banner-carousel";
import { StatusSection } from "@/components/sections/status-section";
import { SourcingSection } from "@/components/sections/sourcing-section";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTASection } from "@/components/sections/cta-section";
import { CheckCircle2 } from "lucide-react";
import { VALUES, CONTACT_INFO } from "@/lib/constants";
import HowWeWork from "@/components/sections/HowWeWork";
import { getBannerSlides } from "@/lib/banner";
import { getWeWorks } from "@/lib/weWork";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import { getCatalogs } from "@/lib/catalog";
import CatalogSection from "@/components/sections/CatalogSection";
import { getServicesSections } from "@/lib/services";

export const metadata: Metadata = {
  title: "Alliance Sourcing BD | Professional Buying & Sourcing Services",
  description:
    "Your premier partner in seamless garment sourcing and social manufacturing excellence. We specialize in apparel, knitwear, woven, and denim products.",
  openGraph: {
    title: "Alliance Sourcing BD | Professional Buying & Sourcing Services",
    description:
      "Professional buying & sourcing services for apparel and garment manufacturing.",
    type: "website",
  },
};

export default async function Home() {
  const slides = await getBannerSlides();
  const steps = await getWeWorks();
  const catalogs = await getCatalogs();
  const services = await getServicesSections();
  return (
    <>
      {/* Banner Carousel */}
      <BannerCarousel slides={slides} />
      <StatusSection />
      <SourcingSection />

      {/* What Sets Us Apart Section */}
      <FeaturesGrid title="What sets us apart" features={VALUES} columns={4} />

      <HowWeWorkSection />
      {/* Dynamic Services Section pulled from Admin DB */}
      <ServicesSection data={services} />

      {/* Buying House Services Section */}
      <ServicesGrid
        title="End-to-end sourcing solutions"
        subtitle="We manage every step of your sourcing journey with precision"
      />

      <CatalogSection catalogs={catalogs} />

      {/* CTA Section */}
      <CTASection
        title="Ready to start sourcing?"
        subtitle="Let us help you find the perfect manufacturing partners for your apparel needs"
        primaryButton={{
          label: "Contact Us",
          href: `mailto:${CONTACT_INFO.email}`,
        }}
        backgroundImage="https://i.postimg.cc/3NcsYzxX/multi-colored-garments-hanging-coathangers-boutique-store-generated-by-ai.jpg"
      />
    </>
  );
}
