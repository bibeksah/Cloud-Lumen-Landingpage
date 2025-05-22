"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Service } from "@/lib/services-data"

interface ServiceStatisticsProps {
  service: Service
}

export function ServiceStatistics({ service }: ServiceStatisticsProps) {
  // Generate some statistics based on the service
  const statistics = [
    {
      value: "99.9%",
      label: "Uptime guarantee",
      color: "bg-blue-500",
    },
    {
      value: "24/7",
      label: "Support availability",
      color: "bg-green-500",
    },
    {
      value: `${service.subServices.length}+`,
      label: "Available solutions",
      color: "bg-purple-500",
    },
    {
      value: "100+",
      label: "Satisfied clients",
      color: "bg-amber-500",
    },
  ]

  return (
    <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {statistics.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="overflow-hidden rounded-xl bg-white p-6 text-center shadow-md dark:bg-gray-800"
        >
          <div className={cn("mx-auto mb-4 h-2 w-16 rounded-full", stat.color)} />
          <div className="text-3xl font-bold text-[#133644] dark:text-[#9AD3F1]">{stat.value}</div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
