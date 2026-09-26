"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface BannerSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  cta: {
    text: string;
    href: string;
  };
}

export function BannerCarousel({ slides }: { slides: BannerSlide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || !slides?.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides?.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) return null;

  const slide = slides[currentSlide] ?? slides[0];

  return (
    <div
      className="relative w-full h-125 md:h-150  xl:h-[calc(100vh-60px)] overflow-hidden group"
      // onMouseEnter={() => setIsAutoPlay(false)}
      // onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Slides */}
      {slides.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col mt-12 md:mt-26 banner-content-container items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="text-center">
            <h1
              key={`title-${currentSlide}`}
              className="text-2xl md:text-5xl 2xl:text-6xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {slide.title}
            </h1>
            <p
              className="text-sm  2xl:text-xl text-white/90 mb-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {slide.description}
            </p>
            <div className="flex gap-4 justify-center">
              
              <Link href={slide.cta.href} className="mb-2">
                <Button
                  className="

      w-full mt-2 min-w-[120px] min-h-[44px] px-[1.4em] py-[0.9em] rounded-[0.5em] 
      text-white font-medium cursor-pointer border-none 
      bg-[linear-gradient(325deg,hsla(217,100%,56%,1)_0%,hsla(194,100%,69%,1)_55%,hsla(217,100%,56%,1)_90%)] bg-size-[280%_auto] bg-top-left shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)] transition-all duration-800 ease-in-out hover:bg-top-right focus:outline-none focus:shadow-[0_0_0_3px_#ffffff,0_0_0_6px_hsla(217,100%,56%,1)] active:shadow-[0_0_0_3px_#ffffff,0_0_0_6px_hsla(217,100%,56%,1)]
    "
                >
                  {slide.cta.text}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
