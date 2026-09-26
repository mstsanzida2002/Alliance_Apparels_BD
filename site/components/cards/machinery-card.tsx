import { Machinery } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface MachineryCardProps extends Machinery {}

export function MachineryCard({
  name,
  function: functionDesc,
  manufacturer,
}: MachineryCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-slate-200 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-slate-900 mb-2">{name}</h3>
      <p className="text-slate-600 text-sm mb-2">{functionDesc}</p>
      <p className="text-slate-500 text-xs mb-4">Manufacturer: {manufacturer}</p>
      <Button
        variant="outline"
        size="sm"
        className="text-cyan-600 border-cyan-600 hover:bg-cyan-50 w-full"
      >
        Contact us
      </Button>
    </div>
  );
}
