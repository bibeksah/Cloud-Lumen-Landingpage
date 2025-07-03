import type { Metadata } from "next"
import { servicesData } from "@/lib/services-data"

interface ServicePageProps {
  params: {
    serviceId: string
  }
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.id === params.serviceId)

  if (!service) {
    return {
      title: "Service Not Found - Cloud Lumen",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: `${service.title} - Cloud Lumen`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, cloud services, IT solutions, ${service.subServices.map((s) => s.title.toLowerCase()).join(", ")}`,
  }
}
