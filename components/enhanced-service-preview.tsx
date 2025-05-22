"use client"

import { StaggeredGrid } from "@/components/ui/staggered-grid"
import EnhancedServiceCard from "@/components/enhanced-service-card"
import { servicesData } from "@/lib/services-data"

export default function EnhancedServicePreview() {
  return (
    <StaggeredGrid columns={3} staggerDelay={0.15}>
      {servicesData.map((service) => (
        <div key={service.id} className="group">
          <EnhancedServiceCard
            title={service.title}
            description={service.description}
            icon={service.icon}
            href={`/services/${service.id}`}
          />
        </div>
      ))}
    </StaggeredGrid>
  )
}
