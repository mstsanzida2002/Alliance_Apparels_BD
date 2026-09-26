'use client'
import Image from "next/image";
import { JSX, useEffect, useRef, useState } from "react";

// ── JSON DATA ──────────────────────────────────────────────
const howWeWorkData = {
  label: "Process",
  heading: "How we work",
  cta: {
    text: "Discuss",
    href: "#",
  },
};

// ── TYPES ──────────────────────────────────────────────────
interface Step {
  id: number;
  title: string;
  image: string;
  description: string;
  icon: string;
}

// ── STEP ITEM COMPONENT ────────────────────────────────────
const StepItem = ({ step, isLast }: { step: Step; isLast: boolean }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex gap-5 sm:gap-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${step.id * 0.1}s, transform 0.5s ease ${step.id * 0.1}s`,
      }}
    >
      {/* Icon + vertical line */}
      <div className="flex flex-col items-center shrink-0" style={{ minWidth: "52px" }}>
        <div
          className="flex items-center justify-center rounded-full bg-orange-50 shrink-0"
          style={{ width: 52, height: 52 }}
        >
          {step?.image && (
            <Image src={step.image} alt="Step background" width={52} height={52} className="absolute" />
          )}
        </div>
        {!isLast && (
          <div className="flex-1 mt-2 w-px bg-gray-200" style={{ minHeight: "40px" }} />
        )}
      </div>

      {/* Text content */}
      <div className={`pt-1.5 ${isLast ? "pb-0" : "pb-10 sm:pb-12"}`}>
        <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-2 leading-tight tracking-tight">
          {step.title}
        </h3>
        <p className="text-sm sm:text-[15px] text-gray-500 leading-relaxed max-w-sm">
          {step.description}
        </p>
      </div>
    </div>
  );
};

// ── MAIN COMPONENT ─────────────────────────────────────────
export default function HowWeWork({ steps }: { steps: Step[] }) {
  const { label, heading, cta } = howWeWorkData;

  if (!steps || steps.length === 0) return null;

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 xl:px-0 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">

        {/* LEFT */}
        <div className="md:sticky md:top-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-800 mb-4">
            {label}
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-none mb-8 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
            {heading}
          </h2>

          <a
            href={cta.href}
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 bg-transparent transition-all duration-200 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50"
          >
            {cta.text}
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">
          {steps?.map((step, i) => (
            <StepItem key={i} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>

      </div>
    </section>
  );
}