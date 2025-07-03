import { Cloud, Server, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const servicePreview = [
  {
    title: "Cloud Computing",
    icon: Cloud,
    description: "Private, public, and hybrid cloud solutions to meet your business needs.",
  },
  {
    title: "Data Center as a Service",
    icon: Server,
    description: "Reliable infrastructure ensuring your critical systems and data are always available.",
  },
  {
    title: "Security as a Service",
    icon: Shield,
    description: "Comprehensive protection against evolving cyber threats, safeguarding your data.",
  },
]

export default function ServicePreview() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {servicePreview.map((service) => (
        <Card
          key={service.title}
          className="border-2 border-gray-100 transition-all hover:border-[#9AD3F1]/50 hover:shadow-md"
        >
          <CardHeader className="pb-2">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#133644]/10">
              <service.icon className="h-6 w-6 text-[#133644]" />
            </div>
            <CardTitle className="text-xl font-bold text-[#133644]">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
