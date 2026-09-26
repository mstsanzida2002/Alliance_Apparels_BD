import Image from 'next/image';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { CheckCircle2 } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface ServicesSectionData {
  _id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  features: Feature[];
}

export function ServicesSection({ data }: { data: ServicesSectionData[] }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, index) => {
        // To slightly distinguish multiple sections if there are many, we can alternate background
        const bgColor = index % 2 === 0 ? "bg-blue-50" : "bg-white";

        return (
          <div key={section._id} className={bgColor}>
            <SectionWrapper className={`py-16 md:py-24`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div
                  className={`relative h-[300px] sm:h-[400px] md:h-full min-h-[400px] rounded-2xl overflow-hidden ${
                    section.imagePosition === 'right' ? 'md:order-2' : ''
                  }`}
                >
                  {section.image && (
                    <Image
                      src={section.image}
                      alt={section.imageAlt || section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </div>

                {/* Text Content */}
                <div className={section.imagePosition === 'right' ? 'md:order-1' : ''}>
                  <h2
                    className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {section.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed whitespace-pre-wrap">
                    {section.description}
                  </p>

                  {/* Features List */}
                  {section.features && section.features.length > 0 && (
                    <div className="space-y-4">
                      {section.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex gap-4">
                          <div className="shrink-0 mt-1 text-cyan-500">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <div>
                            <h4
                              className="font-semibold text-slate-900 mb-1"
                              style={{ fontFamily: 'var(--font-syne)' }}
                            >
                              {feature.title}
                            </h4>
                            <p className="text-slate-600 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </SectionWrapper>
          </div>
        );
      })}
    </>
  );
}
