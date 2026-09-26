import Image from 'next/image';
import { SectionWrapper } from '@/components/common/section-wrapper';

interface ImageTextSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  features?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  backgroundColor?: string;
}

export function ImageTextSection({
  title,
  description,
  image,
  imageAlt,
  imagePosition = 'left',
  features,
}: ImageTextSectionProps) {
  return (
    <SectionWrapper className={`py-16 md:py-24`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div
          className={`relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden ${
            imagePosition === 'right' ? 'md:order-2' : ''
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className={imagePosition === 'right' ? 'md:order-1' : ''}>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            {title}
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {description}
          </p>

          {/* Features List */}
          {features && (
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl text-cyan-500">
                    {feature.icon}
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
  );
}
