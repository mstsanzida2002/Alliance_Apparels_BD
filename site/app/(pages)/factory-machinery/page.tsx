import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CTASection } from "@/components/sections/cta-section";
import { MACHINERY, CONTACT_INFO } from "@/lib/constants";
import MachineryInventory from "./Machenary";
import MachineGallery from "./MachenaryGallary";
import { apiFetch } from "@/lib/api";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Factory & Machinery | Alliance Sourcing BD",
  description:
    "State-of-the-art manufacturing facilities with advanced machinery including CAD/CAM cutting, automatic sewing, embroidery, and finishing systems.",
  openGraph: {
    title: "Our Manufacturing Excellence",
    description:
      "Advanced machinery and technology for high-quality garment production.",
  },
};

export default async function FactoryMachineryPage() {
  const data = await apiFetch("/api/factory-info", 30)
  const factoryInfo = data?.[0]
  const [machinery, gallery] = await Promise.all([
    apiFetch("/api/machinery-inventory", 30),
    apiFetch("/api/advance-machinery", 30),
  ])
  const hasMachinery = machinery.length > 0 || gallery.length > 0
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Our Manufacturing Excellence"
        subtitle="State-of-the-art facilities meeting the highest global ethical and quality standards through innovation and precision"
        backgroundImage="https://i.postimg.cc/ZR5YYj7X/Header.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Factory & Machinery" },
        ]}
      />

      {/* Open Factory Section */}
      {factoryInfo && (
        <SectionWrapper className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {factoryInfo?.title}
              </h2>
              <h3 className="text-xl font-semibold text-slate-700 mb-4">
                {factoryInfo?.subtitle}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {factoryInfo?.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={factoryInfo?.actions}
                  className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span className="mr-2">📄</span>
                  Download PDF
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  View PDF
                </a>
              </div>
            </div>
            {/* Image */}
            <div>
              {factoryInfo?.image && (
                <Image
                  src={factoryInfo.image}
                  alt="Our factory"
                  className="rounded-lg shadow-lg w-full"
                  width={600}
                  height={400}
                />
              )}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Machinery Section */}
      {hasMachinery && (
        <SectionWrapper className="py-12 md:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 text-center">
            Advanced Machinery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center mb-12">
            We invest in the latest industry 4.0 technology to reduce waste and maximize efficiency
          </p>

          <MachineGallery />

          <MachineryInventory />
        </SectionWrapper>
      )}

      {/* CTA Section */}
      <CTASection
        title="Interested in our capabilities?"
        subtitle="Let's discuss your manufacturing needs and how we can help"
        primaryButton={{
          label: "Contact Us",
          href: `mailto:${CONTACT_INFO.email}`,
        }}
        backgroundImage="https://i.postimg.cc/3NcsYzxX/multi-colored-garments-hanging-coathangers-boutique-store-generated-by-ai.jpg"
      />
    </>
  );
}
