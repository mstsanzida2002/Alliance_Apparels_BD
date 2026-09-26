'use client'

// ── JSON DATA ──────────────────────────────────────────────
const productsData = {
  label: "Catalog",
  heading: "Factory and Machinery Capabilities",
  description:
    "We work with modern facilities equipped for precision production. Our network includes mills and factories with the latest technology.",
  cta: {
    text: "Details",
    href: "#",
  },
  image: {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    alt: "Clothing rack with colorful garments",
  },
  categories: [
    {
      id: 1,
      title: "Garment production support",
      description: "Full-scale manufacturing with quality control at each stage.",
      icon: "knitwear",
    },
    {
      id: 2,
      title: "Maintenance and technical support",
      description: "Our team keeps machines running smoothly year-round.",
      icon: "denim",
    },
    {
      id: 3,
      title: "Machinery supply and installation",
      description: "We source and install equipment tailored to your needs.",
      icon: "woven",
    },
    {
      id: 4,
      title: "Production optimization",
      description: "We improve efficiency and reduce waste on every line.",
      icon: "accessories",
    },
  ],
};

// ── ICONS ──────────────────────────────────────────────────
const CategoryIcon = ({ name }: { name: string }) => {
  const cls = "w-8 h-8 text-blue-500";

  switch (name) {
    case "knitwear":
      return (
        <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="10" width="24" height="16" rx="2" />
          <path d="M4 14 C8 11 12 13 16 11 C20 9 24 11 28 14" />
          <path d="M10 10 L8 4 M22 10 L24 4" />
        </svg>
      );
    case "denim":
      return (
        <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="8" x2="28" y2="8" />
          <line x1="4" y1="13" x2="28" y2="13" />
          <line x1="4" y1="18" x2="28" y2="18" />
          <line x1="4" y1="23" x2="28" y2="23" />
          <rect x="4" y="6" width="24" height="20" rx="2" />
        </svg>
      );
    case "woven":
      return (
        <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="24" height="24" rx="2" />
          <line x1="4" y1="11" x2="28" y2="11" />
          <line x1="4" y1="17" x2="28" y2="17" />
          <line x1="4" y1="23" x2="28" y2="23" />
          <line x1="11" y1="4" x2="11" y2="28" />
          <line x1="17" y1="4" x2="17" y2="28" />
          <line x1="23" y1="4" x2="23" y2="28" />
        </svg>
      );
    case "accessories":
      return (
        <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="16" r="5" />
          <circle cx="10" cy="16" r="2" />
          <path d="M15 16 H28" />
          <circle cx="22" cy="10" r="3" />
          <circle cx="22" cy="22" r="3" />
        </svg>
      );
    default:
      return null;
  }
};

// ── TYPES ──────────────────────────────────────────────────
interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// ── CATEGORY CARD ──────────────────────────────────────────
const CategoryCard = ({ category }: { category: Category }) => (
  <div className="flex gap-3 group">
    <div className="mt-0.5 shrink-0 w-9 h-9 flex items-center justify-center rounded-md bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
      <CategoryIcon name={category.icon} />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">
        {category.title}
      </h4>
      <p className="text-sm text-gray-500 leading-relaxed">
        {category.description}
      </p>
    </div>
  </div>
);

// ── MAIN COMPONENT ─────────────────────────────────────────
export default function FactoryAndMachinery() {
  const { label, heading, description, cta, image, categories } = productsData;

  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* RIGHT — Content */}
          <div className="flex flex-col gap-6">

            {/* Label */}
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-800">
              {label}
            </p>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 leading-tight tracking-tight -mt-2">
              {heading}
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed max-w-md">
              {description}
            </p>

            {/* Categories grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {categories.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={cta.href}
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 bg-transparent transition-all duration-200 hover:border-gray-800 hover:bg-gray-50"
              >
                {cta.text}
              </a>
            </div>

          </div>

          {/* LEFT — Image */}
          <div className="w-full overflow-hidden rounded-2xl aspect-4/5 sm:aspect-3/4 md:aspect-auto md:h-[520px]">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}