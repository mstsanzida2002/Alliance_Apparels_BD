import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ArrowRight } from "lucide-react";


interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
}

export function CTASection({
  title,
  subtitle,
  primaryButton,
  backgroundImage,
}: CTASectionProps) {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed overflow-hidden"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : { backgroundColor: "#0C97D5" }
      }
    >
      {/* Overlay: Multi-layer gradient for depth and clarity */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
      <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="max-w-5xl mx-auto relative">
        <SectionWrapper className="py-8 px-6 md:px-12 relative text-center md:text-left md:border-l-4 border-cyan-500 bg-white/5 backdrop-blur-md rounded-r-2xl overflow-hidden shadow-2xl">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-[1.1] animate-in fade-in slide-in-from-left-8 duration-700"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {title}
            </h2>

            {subtitle && (
              <p className="text-sm md:text-md text-white/80 max-w-2xl mb-6 animate-in fade-in slide-in-from-left-8 duration-700 delay-100 leading-relaxed font-light">
                {subtitle}
              </p>
            )}

            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <a
                href={primaryButton.href}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
              >
                <Button className="group bg-white hover:bg-cyan-500 text-slate-900 hover:text-white px-8 py-2 text-base h-auto font-bold rounded-full transition-all duration-500 shadow-xl hover:shadow-cyan-500/25 flex items-center gap-3">
                  {primaryButton.label}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
