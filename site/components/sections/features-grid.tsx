import { FeatureCard } from "@/components/cards/feature-card";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { apiFetch } from "@/lib/api";

interface Feature {
  title: string;
  description: string;
  icon?: string | React.ReactNode;
}

interface FeaturesGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export async function FeaturesGrid({
  title,
  subtitle,
  columns = 4,
}: FeaturesGridProps) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[columns];

  const features = await apiFetch("/api/apart", 30);

  return (
    <SectionWrapper className="py-16 md:py-24 bg-white">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top">
        <p className="text-sm font-semibold text-cyan-600 mb-3 uppercase tracking-wider">
          Why
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      {features?.length > 0 && (
        <div className={`grid grid-cols-1 ${gridClass} gap-6 md:gap-8 mb-16`}>
          {features.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="animate-in fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      )}

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* What Makes Us Different */}
        <div className="bg-white rounded-lg border border-gray-100 p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-[0_15px_45px_rgba(0,162,199,0.21)]">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">
            WHAT MAKES US DIFFERENT
          </p>
          <div className="space-y-10">
            {[
              {
                title: "Local presence in Bangladesh",
                desc: "We communicate directly with factories and monitor details that matter.",
              },
              {
                title: "Verified supplier network",
                desc: "We shortlist manufacturers based on capability, quality, and reliability.",
              },
              {
                title: "Quality-first process",
                desc: "Sampling + inspections reduce defects and protect your brand reputation.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="shrink-0 mt-1">
                  <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best For & Bangladesh Advantages */}
        <div className="bg-white rounded-lg border border-gray-100 p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-[0_15px_45px_rgba(0,162,199,0.21)]">
          <div className="mb-12">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              BEST FOR
            </p>
            <h4
              className="text-lg font-bold text-gray-800 mb-3"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Brands that want smooth sourcing, without surprises
            </h4>
            <p className="text-gray-500 leading-relaxed">
              If you need a dependable partner to manage product development,
              factory coordination, QC, and shipment support, this is built for
              you.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
              BANGLADESH ADVANTAGES
            </p>
            <div className="space-y-5">
              {[
                "Strong garment & textile manufacturing ecosystem",
                "Competitive pricing with scalable production capacity",
                "Improving compliance focus and modern facilities",
                "Flexible product range across apparel and home textiles",
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-center">
                  <div className="shrink-0">
                    <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
