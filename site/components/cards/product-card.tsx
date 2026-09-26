interface ProductCardProps {
  name: string;
  description: string;
  image?: string;
}

export function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200">
      {image && (
        <div className="h-56 bg-slate-100 overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-5">
        <h3 
          className="font-semibold text-slate-900 mb-2 text-lg"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {name}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
