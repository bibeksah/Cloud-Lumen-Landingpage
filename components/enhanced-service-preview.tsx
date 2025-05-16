"use client"

import Link from "next/link"
import { Cloud, Server, Shield, Code } from "lucide-react"
import { StaggeredGrid } from "@/components/ui/staggered-grid"
import EnhancedServiceCard from "@/components/enhanced-service-card"

const servicePreview = [
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    icon: Cloud,
    description: "Private, public, and hybrid cloud solutions to meet your business needs.",
  },
  {
    id: "data-center",
    title: "Data Center as a Service",
    icon: Server,
    description: "Reliable infrastructure ensuring your critical systems and data are always available.",
  },
  {
    id: "security",
    title: "Security as a Service",
    icon: Shield,
    description: "Comprehensive protection against evolving cyber threats, safeguarding your data.",
  },
  {
    id: "tech-service",
    title: "Tech Service",
    icon: Code,
    description: "Custom web, mobile, AI, cybersecurity, and design solutions for your digital needs.",
  },
]

export default function EnhancedServicePreview() {
  return (
    <StaggeredGrid columns={4} staggerDelay={0.15}>
      {servicePreview.map((service) => (
        <Link href={`/services/${service.id}`} key={service.id} className="group">
          <EnhancedServiceCard title={service.title} description={service.description} icon={service.icon} />
        </Link>
      ))}
    </StaggeredGrid>
  )
}
