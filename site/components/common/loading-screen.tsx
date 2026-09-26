"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.documentElement.style.overflow = "hidden";

    // Start fade out after 3 seconds
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
      document.documentElement.style.overflow = "unset";
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      document.documentElement.style.overflow = "unset";
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      onAnimationEnd={(e) => {
        // Only remove if the fade-out animation finished
        if (e.animationName === "fade-out-loader") {
          setShouldRender(false);
        }
      }}
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white transition-all duration-700 ${
        !isVisible ? "animate-fade-out-loader pointer-events-none" : ""
      }`}
    >
      <div className="relative flex flex-col items-center gap-4">
        <div className="flex  items-center gap-6 md:gap-10 animate-bounce-soft">
          <div className="relative w-10 h-10 md:w-14 md:h-14">
            <Image
              src="/logo2.png"
              alt="Alliance Apparels Ltd."
              fill
              className="object-contain rounded-xl shadow-xl"
              priority
            />
          </div>

          <div className="h-10 md:h-14 w-px bg-slate-200" />

          <div className="relative w-10 h-10 md:w-14 md:h-14">
            <Image
              src="/logo.jpg"
              alt="Alliance Sourcing BD"
              fill
              className="object-contain rounded-xl shadow-xl"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <h1
            className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900 mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ALLIANCE
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-4 bg-cyan-500" />
            <p className="text-[6px] md:text-[10px]  font-bold tracking-[0.4em] text-cyan-600 uppercase">
              Group of Companies
            </p>
            <div className="h-px w-4 bg-cyan-500" />
          </div>
        </div>
      </div>

      {/* Subtle background detail */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />

      {/* Loading indicator line at bottom */}
      <div
        className="absolute bottom-0 left-0 h-1.5 bg-cyan-500 transition-all duration-[3000ms] ease-linear"
        style={{ width: isVisible ? "100%" : "100%" }}
      ></div>
    </div>
  );
}
