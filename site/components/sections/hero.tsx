import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section
      className="relative py-20 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : { backgroundColor: "rgb(30, 41, 59)" }
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <a href={primaryCta.href}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-base h-auto">
                  {primaryCta.label}
                </Button>
              </a>
              
            )}
            {secondaryCta && (
              <a href={secondaryCta.href}>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 text-base h-auto"
                >
                  {secondaryCta.label}
                </Button>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
