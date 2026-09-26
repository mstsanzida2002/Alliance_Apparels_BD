import { getWeWorks } from "@/lib/weWork"
import HowWeWork from "./HowWeWork"

export default async function HowWeWorkSection() {
  const steps = await getWeWorks()
  return (
    <div>
      <HowWeWork steps={steps} />
    </div>
  )
}