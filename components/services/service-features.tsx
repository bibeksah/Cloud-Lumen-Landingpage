"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import type { Service } from "@/lib/services-data"

interface ServiceFeaturesProps {
  service: Service
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  // Generate some generic features based on the service
  const features = [
    `Enterprise-grade ${service.title.toLowerCase()} solutions`,
    `24/7 monitoring and support for all ${service.title.toLowerCase()} services`,
    `Seamless integration with existing infrastructure`,
    `Scalable solutions that grow with your business`,
    `Dedicated account management and technical support`,
  ]

  return (
    <div className="mb-12 rounded-xl bg-[#133644]/5 p-8 dark:bg-gray-800/30">
      <h3 className="mb-6 text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Key Features & Benefits</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-start"
          >
            <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-[#9AD3F1] dark:text-[#9AD3F1]" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
