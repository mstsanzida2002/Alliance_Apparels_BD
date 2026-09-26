import { apiFetch } from "@/lib/api";
import Image from "next/image";

// ── TYPES ──────────────────────────────────────────────────
interface MachineImage {
  id: number;
  label: string;
  image: string;
  alt: string;
}

// ── MACHINE CARD ───────────────────────────────────────────
const MachineCard = ({ machine }: { machine: MachineImage }) => (
  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-200 cursor-pointer">
    {/* Image */}
    {machine.image && (
      <Image
        src={machine.image}
        alt={machine.label}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        width={400}
        height={300}
      />
    )}

    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

    {/* Label */}
    <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
      <span className="text-white text-sm sm:text-base font-semibold tracking-widest uppercase">
        {machine.label}
      </span>
    </div>
  </div>
);

// ── MAIN COMPONENT ─────────────────────────────────────────
export default async function MachineGallery() {
  const machines = await apiFetch("/api/advance-machinery", 30)

  if (!machines || machines.length === 0) return null

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {machines.map((machine: MachineImage, i:number) => (
            <MachineCard key={i} machine={machine} />
            ))}
        </div>
      </div>
    </section>
  );
}