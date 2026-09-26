"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

export function LanguageSwitcher({ className }: { className?: string }) {
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const getLangFromCookie = () => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; googtrans=`);
      if (parts.length === 2) {
        const langValue = parts.pop()?.split(";").shift();
        const lang = langValue?.split("/").pop();
        if (lang === "ja" || lang === "en") return lang;
      }
      return "en";
    };
    
    setCurrentLang(getLangFromCookie());
  }, []);

  const toggleLanguage = () => {
    const targetLang = currentLang === "en" ? "ja" : "en";
    
    // Set the cookie (the most reliable way)
    document.cookie = `googtrans=/en/${targetLang}; path=/`;
    document.cookie = `googtrans=/en/${targetLang}; path=/; domain=${window.location.hostname}`;
    
    // Refresh the page to apply the translation
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 transition-colors font-medium border px-3 py-1 rounded-full cursor-pointer notranslate ${className}`}
      translate="no"
    >
      <Languages size={14} />
      <span>{currentLang === "en" ? "日本語" : "English"}</span>
    </button>
  );
}
