import Image from "next/image"
import { ArrowRight, CloudCog, Database, Shield, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const coreServices = [
  {
    title: "Cloud Migration Services",
    description: "Modernize infrastructure with zero downtime.",
    icon: CloudCog,
    image: "/cloud-migration-diagram.png",
  },
  {
    title: "Cloud Backup & DRaaS",
    description: "Full-stack backup and disaster recovery planning.",
    icon: Database,
    image: "/placeholder-dlngc.png",
  },
  {
    title: "Managed Security Services (MSSP)",
    description: "SOC-as-a-service, SIEM integration, and 24/7 monitoring.",
    icon: Shield,
    image: "/placeholder-exowv.png",
  },
  {
    title: "Cloud Cost Optimization",
    description: "Slash cloud waste and optimize spend with AI-powered insights.",
    icon: TrendingDown,
    image: "/cloud-cost-optimization-dashboard.png",
  },
]

export default function CoreServices() {
  return (
    <section id="core-services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#133644] sm:text-4xl">Core Managed Services</h2>
          <p className="mt-4 text-lg text-gray-700">Bespoke offerings designed to transform your IT infrastructure</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {coreServices.map((service) => (
            <Card key={service.title} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#133644]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                  <service.icon className="h-5 w-5" />
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-4 text-gray-800">{service.description}</p>
                <Button variant="ghost" className="group p-0 text-[#133644]">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
