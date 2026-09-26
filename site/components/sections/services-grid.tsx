import { Service } from "@/lib/types";
import { ServiceCard } from "@/components/cards/service-card";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { apiFetch } from "@/lib/api";

interface ServicesGridProps {
  title: string;
  subtitle?: string;
}

export async function ServicesGrid({
  title,
  subtitle,
}: ServicesGridProps) {
  const services = await apiFetch("/api/buying-house", 30)
  if (!services || services.length === 0) return null;
  return (
    <SectionWrapper className="py-16 md:py-24 bg-white">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top">
        <p className="text-sm font-semibold text-cyan-600 mb-3 uppercase tracking-wider">
          Buying house services
        </p>
        <h2 
          className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service: Service, index: number) => (
          <div
            key={index}
            className="animate-in fade-in hover:-mt-2 transition-all duration-500 "
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
