import { apiFetch } from "@/lib/api"

/* ───────────────── TYPES ───────────────── */
interface Machine {
  category: string
  name: string
  brand: string
  quantity: number
}

interface Category {
  id: number
  name: string
  machines: Machine[]
}

/* ───────────────── HELPERS ───────────────── */
const padQty = (n: number) => String(n).padStart(2, "0")

const groupMachines = (machines: Machine[]): Category[] => {
  const map: Record<string, Machine[]> = {}

  machines.forEach((machine) => {
    if (!map[machine.category]) map[machine.category] = []
    map[machine.category].push(machine)
  })

  return Object.entries(map).map(([name, machines], index) => ({
    id: index + 1,
    name,
    machines
  }))
}

/* ───────────────── CATEGORY TABLE ───────────────── */
const CategoryTable = ({ category }: { category: Category }) => {
  const total = category.machines.reduce((sum, m) => sum + m.quantity, 0)

  return (
    <div className="mb-14 last:mb-0">

      <h3 className="text-center text-lg font-medium text-gray-700 mb-5 tracking-wide">
        {category.name}
      </h3>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3.5 px-6 text-left font-semibold text-gray-700 w-24">SL No.</th>
                <th className="py-3.5 px-6 text-left font-semibold text-gray-700">Machine Name</th>
                <th className="py-3.5 px-6 text-left font-semibold text-gray-700 w-56">Brand</th>
                <th className="py-3.5 px-6 text-right font-semibold text-gray-700 w-36">Quantity</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {category.machines.map((machine, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="py-3.5 px-6 text-gray-500 tabular-nums">{i+1}</td>
                  <td className="py-3.5 px-6 text-gray-800">{machine.name}</td>
                  <td className="py-3.5 px-6 text-gray-600">{machine.brand}</td>
                  <td className="py-3.5 px-6 text-right text-gray-800 tabular-nums">
                    {padQty(machine.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td colSpan={2}></td>
                <td className="py-3.5 px-6 text-right font-semibold text-gray-800">
                  Total {category.name}
                </td>
                <td className="py-3.5 px-6 text-right font-bold text-gray-900">
                  {total}
                </td>
              </tr>
            </tfoot>

          </table>
        </div>
      </div>

    </div>
  )
}

/* ───────────────── MAIN COMPONENT ───────────────── */
export default async function MachineryInventory() {
  const machines = await apiFetch("/api/machinery-inventory", 30)

  if (!machines || machines.length === 0) return null

  const categories = groupMachines(machines)

  const grandTotal = machines.reduce((sum: number, m: Machine) => sum + m.quantity, 0)

  return (
    <section className="w-full bg-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">

        <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 text-center mb-14">
          Our Machinery Inventory
        </h1>

        {categories.map((cat) => (
          <CategoryTable key={cat.id} category={cat} />
        ))}

        <div className="mt-10 flex justify-end">
          <div className="flex items-center gap-6 border border-gray-200 rounded-xl px-8 py-4 bg-gray-50">
            <span className="text-sm font-semibold text-gray-700">
              Grand Total Machines
            </span>
            <span className="text-2xl font-bold text-gray-900">
              {grandTotal}
            </span>
          </div>
        </div>

      </div>

    </section>
  )
}