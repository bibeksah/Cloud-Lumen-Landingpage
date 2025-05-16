"use client"

import { useState } from "react"
import { servicesData } from "@/lib/services-data"
import ServiceCard from "./service-card"
import { motion } from "framer-motion"

export default function ServiceList() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const handleToggle = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      {servicesData.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <ServiceCard
            service={service}
            isExpanded={service.id === expandedService}
            onToggle={() => handleToggle(service.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
