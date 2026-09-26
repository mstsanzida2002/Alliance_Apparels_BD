import { Service } from "@/lib/types";
import Image from "next/image";

interface ServiceCardProps extends Service {}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-[0px_0px_10px_rgba(0,0,0,0.08)] hover:bg-[#0C97D5]  transition-all duration-300 hover:shadow-[0px_0px_15px_rgba(0,162,199,0.5)] ">
      <div className="p-4 ">
        <div className="text-3xl xl:text-4xl mb-6 text-cyan-500">
          <Image src={image} alt={title} width={48} height={48} />
        </div>
        <h3 
          className="text-md font-semibold text-slate-900 group-hover:text-white mb-1"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {title}
        </h3>
        <p className="text-slate-600 group-hover:text-white leading-relaxed text-xs">{description}</p>
      </div>
    </div>
  );
}
