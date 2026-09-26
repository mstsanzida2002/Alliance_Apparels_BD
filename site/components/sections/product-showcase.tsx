import { apiFetch } from "@/lib/api";
import { groupProducts } from "@/lib/product";
import Image from "next/image";

type Product = {
  category: string;
  subcategory: string;
  product: string;
  imageURL: string;
};

export async function ProductShowcase() {
  const data = await apiFetch("/api/products", 10);
  if (!data || data.length === 0) return null;
  const grouped = groupProducts(data);

  return (
    <div className="">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top">
        <h2
          className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Products
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore our wide range of high-quality products across different
          categories and subcategories.
        </p>
      </div>
      <div className="space-y-12 max-w-7xl mx-auto px-5">
        {Object.entries(grouped).map(([category, subcats]) => (
          <div key={category}>
            <h2 className="text-3xl font-bold mb-6">{category}</h2>

            {Object.entries(subcats).map(([subcat, items]) => (
              <div key={subcat} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: "var(--font-syne)" }}>{subcat}</h3>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="group relative bg-white rounded-xl border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
                    >
                      {/* Image Container with fixed Aspect Ratio */}
                      <div className="relative aspect-4/5 overflow-hidden bg-slate-50">
                        {item.imageURL && (
                          <Image
                            src={item.imageURL}
                            alt={item.product}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          />
                        )}
                        
                        {/* Subtle Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                      </div>

                      {/* Content Area */}
                      <div className="p-4 text-center">
                        <p className="text-sm font-semibold text-slate-700 line-clamp-1 group-hover:text-cyan-600 transition-colors duration-300">
                          {item?.product}
                        </p>
                        <div className="mt-2 w-8 h-0.5 bg-cyan-500/30 mx-auto transition-all duration-500 group-hover:w-16 group-hover:bg-cyan-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
