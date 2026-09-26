import Link from "next/link";
import Image from "next/image";

function LogoItem({ src, title, subtitle }: { src: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-2 notranslate" translate="no">
      <div className="w-10 h-10 relative shrink-0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain rounded-md"
        />
      </div>

      <div className="hidden sm:flex flex-col">
        <span
          className="text-xs font-bold leading-none"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {title}
        </span>
        <span
          className="text-[10px] font-semibold leading-none"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 hover:opacity-80 transition-opacity duration-300"
    >
      <LogoItem
        src="/logo2.png"
        title="ALLIANCE"
        subtitle="APPARELS LTD."
      />
      
      {/* Divider */}
      <div className="h-8 w-px bg-gray-300"></div>
      <LogoItem
        src="/logo.jpg"
        title="ALLIANCE"
        subtitle="SOURCING BD"
      />
      
    </Link>
  );
}