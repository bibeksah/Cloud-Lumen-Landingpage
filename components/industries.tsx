import { HeartPulse, Building2, Landmark, Truck, ShoppingBag, Factory } from "lucide-react"

const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Government", icon: Building2 },
  { name: "BFSI", icon: Landmark },
  { name: "Logistics", icon: Truck },
  { name: "Retail", icon: ShoppingBag },
  { name: "Manufacturing", icon: Factory },
]

export default function Industries() {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#133644] sm:text-4xl">Industries We Serve</h2>
          <p className="mt-4 text-lg text-gray-700">
            We support digital transformation across regulated and high-growth sectors
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {industries.map((industry) => (
            <div key={industry.name} className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#133644]/10 p-4">
                <industry.icon className="h-10 w-10 text-[#133644]" />
              </div>
              <h3 className="mt-4 text-center text-lg font-medium text-gray-800">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
