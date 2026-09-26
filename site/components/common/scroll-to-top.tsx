"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-30 right-6 z-50 
        
        flex items-center justify-center
        w-[50px] h-[50px] rounded-full 
        bg-black text-white overflow-hidden border-none
        shadow-[0px_0px_0px_4px_rgba(180,160,255,0.25)]
        
        transition-all duration-300 ease-in-out group
        
        hover:w-[140px] hover:rounded-[50px] hover:bg-[#00b8db]
        
        ${
          showButton
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
      aria-label="Back to top"
    >
      {/* The Icon: Slides up and out on hover */}
      <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[200%]">
        <ChevronUp className="w-5 h-5" strokeWidth={3} />
      </div>

      {/* The Text: Slides in from the bottom on hover */}
      <span className="absolute font-semibold text-[0px] opacity-0 transition-all duration-300 translate-y-10 group-hover:text-[13px] group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
        Back to Top
      </span>
    </button>
  );
}
