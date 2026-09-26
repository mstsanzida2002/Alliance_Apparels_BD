"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { NAVIGATION, CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/common/language-switcher";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if a route is active
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top duration-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex animate-in fade-in slide-in-from-left duration-500">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item, index) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors animate-in fade-in duration-500 relative group ${
                    isActive
                      ? "text-cyan-600"
                      : "text-slate-700 hover:text-cyan-600"
                  }`}
                  style={{
                    fontFamily: "var(--font-inter)",
                    animationDelay: `${(index + 1) * 75}ms`,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}

          <a href={`mailto:${CONTACT_INFO.email}`} className="hidden md:block mb-2">
            <Button
              className="

      w-full mt-2 min-w-30 min-h-11 px-[1.4em] py-[0.9em] rounded-[0.5em] 
      text-white font-medium cursor-pointer border-none 
      bg-[linear-gradient(325deg,hsla(217,100%,56%,1)_0%,hsla(194,100%,69%,1)_55%,hsla(217,100%,56%,1)_90%)] bg-size-[280%_auto] bg-top-left shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)] transition-all duration-800 ease-in-out hover:bg-top-right focus:outline-none focus:shadow-[0_0_0_3px_#ffffff,0_0_0_6px_hsla(217,100%,56%,1)] active:shadow-[0_0_0_3px_#ffffff,0_0_0_6px_hsla(217,100%,56%,1)]
    "
            >
              Speak with us
            </Button>
          </a>

          {/* Mobile UI (Language Switcher + Menu Button) */}
          <div className="md:hidden flex items-center gap-3">
            {/* <LanguageSwitcher className="text-slate-700 border-slate-200 bg-slate-50 hover:bg-slate-100 text-[12px] px-2" /> */}
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {NAVIGATION.map((item) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-cyan-600 bg-cyan-50"
                      : "text-slate-600 hover:text-cyan-600 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={`tel:${CONTACT_INFO.phone}`}>
              <Button
                className="

      w-full mt-2 min-w-30 min-h-11 px-[1.4em] py-[0.9em] rounded-[0.5em] 
      text-white font-medium cursor-pointer border-none 
      bg-[linear-gradient(325deg,hsla(217,100%,56%,1)_0%,hsla(194,100%,69%,1)_55%,hsla(217,100%,56%,1)_90%)] bg-size-[280%_auto] bg-top-left shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)] transition-all duration-800 ease-in-out hover:bg-top-right focus:outline-none focus:shadow-[0_0_0_3px_#ffffff,0_0_0_6px_hsla(217,100%,56%,1)] active:shadow-[0_0_0_3px_#ffffff,0_0_0_6px_hsla(217,100%,56%,1)]
    "
              >
                Speak with us
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
