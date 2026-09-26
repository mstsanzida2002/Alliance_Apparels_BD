import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
}


export function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="flex flex-col p-5 rounded-lg bg-white hover:bg-gray-100 transition-shadow duration-300 border border-gray-200">
      {image && (
        <div className="mb-10">
          <div className="text-3xl text-cyan-500">
            <Image src={image} alt={title} width={48} height={48} />
          </div>
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}