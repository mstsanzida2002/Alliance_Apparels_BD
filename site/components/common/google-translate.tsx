"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export function GoogleTranslate() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Re-trigger translation check on route change
  useEffect(() => {
    if (mounted) {
      const gtCombo = document.querySelector(
        ".goog-te-combo",
      ) as HTMLSelectElement;
      if (gtCombo) {
        // If the cookie is set to Japanese, make sure the combo matches
        const match = document.cookie.match(/googtrans=\/en\/(ja|en)/);
        if (match && gtCombo.value !== match[1]) {
          gtCombo.value = match[1];
          gtCombo.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }
  }, [pathname, mounted]);

  if (!mounted) return null;

  return (
    <>
      <div
        id="google_translate_element"
        style={{
          position: "fixed",
          top: "-1000px",
          left: "-1000px",
          opacity: 0,
          pointerEvents: "none",
        }}
        suppressHydrationWarning
      ></div>
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.googleTranslateElementInit = function() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,ja',
                autoDisplay: false,
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            };
          `,
        }}
      />
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
