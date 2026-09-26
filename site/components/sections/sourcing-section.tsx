import Image from "next/image";
import { Button } from "../ui/button";

const sourcingItems = [
  {
    title: "Knitwear",
    description: "T-shirts, polos, hoodies, jersey knitwear, and activewear.",
    image: "https://i.postimg.cc/52BfSNtD/1672.jpg",
  },
  {
    title: "Woven",
    description: "Oxford shirts, chinos, blazers, and formal woven garments.",
    image: "https://i.postimg.cc/rsRk0q32/close-up-flannel-shirt-detail.jpg",
  },
  {
    title: "Denim",
    description: "Raw indigo denim, trucker jackets, jeans, and denim shorts.",
    image:
      "https://i.postimg.cc/4NtYjGdz/wide-assortment-jeans-hanging-store.jpg",
  },
  {
    title: "Sweaters",
    description: "Cardigans, pullovers, and seasonal knit sweaters.",
    image: "https://i.postimg.cc/kgvBXyWh/2148312122.jpg",
  },
];

export function SourcingSection() {
  return (
    <section className="py-20 pt-64 bg-gray-50/50 -mt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-wider text-cyan-600 uppercase mb-2">
            PRODUCTS
          </h3>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            What we source
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Core categories with flexible customization, fabrics, trims,
            packaging, and compliance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sourcingItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl  border border-gray-100 overflow-hidden  shadow-[0px_0px_10px_rgba(0,0,0,0.08)] hover:shadow-[0px_0px_15px_rgba(0,0,0,0.2)] hover:-mt-3 transition-all duration-500"
            >
              <div className="relative  w-full p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="rounded-lg "
                />
              </div>
              <div className="p-6 pt-1">
                <h4
                  className="text-xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <a href="/buying-house">
            <Button
              className="
          
                w-full mt-2 min-w-[120px] min-h-[44px] px-[1.4em] py-[0.9em] rounded-[0.5em] 
                text-white font-medium cursor-pointer border-none 
                bg-[linear-gradient(325deg,hsla(217,100%,56%,1)_0%,hsla(194,100%,69%,1)_55%,hsla(217,100%,56%,1)_90%)] bg-size-[280%_auto] bg-top-left shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)] transition-all duration-800 ease-in-out hover:bg-top-right focus:outline-none focus:shadow-[0_0_0_3px_#ffffff,0_0_0_6px_hsla(217,100%,56%,1)] active:shadow-[0_0_0_3px_#ffffff,0_0_0_6px_hsla(217,100%,56%,1)]
              "
            >
              Explore our catalog
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
