import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CTASection } from "@/components/sections/cta-section";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ContactForm from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Alliance Sourcing BD",
  description:
    "Get in touch with Alliance Sourcing BD. We're here to answer your questions and discuss your sourcing needs.",
  openGraph: {
    title: "Contact Us",
    description: "Reach out to discuss your garment sourcing requirements.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Get in Touch"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg"
        subtitle="We're here to answer your questions and discuss your sourcing needs"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* Contact Section */}
      <SectionWrapper className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Email */}
          <div className="group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors duration-300">
              <Mail className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-syne)" }}>Email</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">Our friendly team is here to help.</p>
            {/* <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm inline-flex items-center gap-2 group/link"
            >
              {CONTACT_INFO.email}
              <div className="w-4 h-px bg-cyan-600 transition-all duration-300 group-hover/link:w-8"></div>
            </a> */}
            <div className="flex flex-col gap-3">
              {CONTACT_INFO.email.split(',').map((mail, index) => (
                <a
                  key={index}
                  href={`mailto:${mail.trim()}`}
                  className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm inline-flex items-center gap-2 group/link w-fit"
                >
                  {mail.trim()}
                  {/* <div className="w-4 h-px bg-cyan-600 transition-all duration-300 group-hover/link:w-8"></div> */}
                </a>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors duration-300">
              <Phone className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-syne)" }}>Phone</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">Mon-Fri from 9am to 6pm.</p>
            <div className="flex flex-col gap-3">
              {CONTACT_INFO.phone.split(',').map((num, index) => (
                <a
                  key={index}
                  href={`tel:${num.trim()}`}
                  className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm inline-flex items-center gap-2 group/link w-fit"
                >
                  {num.trim()}
                  {/* <div className="w-4 h-px bg-cyan-600 transition-all duration-300 group-hover/link:w-8"></div> */}
                </a>
              ))}
            </div>
          </div>

          {/* Office */}
          <div className="group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors duration-300">
              <MapPin className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-syne)" }}>Office</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">{CONTACT_INFO.address}</p>
            <a
              href={CONTACT_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm inline-flex items-center gap-2 group/link"
            >
              Get directions
              <div className="w-4 h-px bg-cyan-600 transition-all duration-300 group-hover/link:w-8"></div>
            </a>
          </div>
        </div>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-5 pb-10 lg:pb-20">
        <ContactForm />

        <iframe
          src={CONTACT_INFO.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* CTA Section */}
      <CTASection
        title="Ready to get started?"
        subtitle="Connect with us today to discuss your apparel sourcing requirements"
        primaryButton={{
          label: "Contact Us",
          href: `mailto:${CONTACT_INFO.email}`,
        }}
        backgroundImage="https://i.postimg.cc/3NcsYzxX/multi-colored-garments-hanging-coathangers-boutique-store-generated-by-ai.jpg"
      />
    </>
  );
}
