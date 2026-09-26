import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { CTASection } from "@/components/sections/cta-section";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { VALUES, CONTACT_INFO } from "@/lib/constants";
import HowWeWork from "@/components/sections/HowWeWork";
import { apiFetch } from "@/lib/api";
import Image from "next/image";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";

export const metadata: Metadata = {
  title: "About Alliance Sourcing BD | Our Story & Values",
  description:
    "Learn about Alliance Sourcing BD, our mission to revolutionize the apparel industry through ethical practices and manufacturing excellence.",
  openGraph: {
    title: "About Alliance Sourcing BD",
    description:
      "Professional buying & sourcing services with decades of collective expertise.",
  },
};

export default async function AboutPage() {
  const data = await apiFetch("/api/established-excellence", 30)
  const story = data?.[0]
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="About Alliance Sourcing BD"
        subtitle="Your premier partner in seamless garment sourcing and social manufacturing excellence"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Story Section */}
      {story && (
        <SectionWrapper className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Image */}
            <div>
              {story?.image && (
                <Image
                  width={600}
                  height={400}
                  src={story.image}
                  alt={story?.title}
                  className="rounded-lg shadow-lg w-full"
                />
              )}
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {story?.title}
              </h2>

              <h3 className="text-xl font-semibold text-slate-700 mb-4">
                {story?.subtitle}
              </h3>

              {story?.paragraphs?.map((para: string, index: number) => (
                <p
                  key={index}
                  className="text-slate-600 mb-4 leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

          </div>
        </SectionWrapper>
      )}

      {/* Values Section */}
      <div className="bg-slate-50">
        <FeaturesGrid title="What sets us apart" features={VALUES} columns={4} />
      </div>

      {/* Process Section */}
      <HowWeWorkSection />

      {/* CTA */}
      <CTASection
        title="Ready to partner with us?"
        subtitle="Let's discuss how we can help bring your vision to life"
        primaryButton={{
          label: "Contact Us",
          href: `mailto:${CONTACT_INFO.email}`,
        }}
        backgroundImage="https://i.postimg.cc/3NcsYzxX/multi-colored-garments-hanging-coathangers-boutique-store-generated-by-ai.jpg"
      />
    </>
  );
}
