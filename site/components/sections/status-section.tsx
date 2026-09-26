import Image from "next/image";

const statusItems = [
  {
    image: "/factory.avif",
    text: "Factory sourcing, negotiation & order placement",
  },
  {
    image: "/qc-inspection.avif",
    text: "In-line + final QC inspections before shipment",
  },
  {
    image: "/sample-approval.avif",
    text: "Sampling, revisions & pre-production approvals",
  },
  {
    image: "/shipping.avif",
    text: "Production tracking, updates & shipping coordination",
  },
];

export function StatusSection() {
  return (
    <section className="relative   z-30 px-4 md:px-8 -mt-24 md:-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 rounded-2xl shadow-xl overflow-hidden px-6 md:px-10 py-4 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {statusItems.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={item.image}
                    alt={item.text}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm  text-white leading-relaxed max-w-[200px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
