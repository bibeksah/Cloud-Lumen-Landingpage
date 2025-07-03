"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Service } from "@/lib/services-data"

interface ServiceCategoryTabsProps {
  services: Service[]
  activeServiceId: string
  onTabChange: (serviceId: string) => void
}

export function ServiceCategoryTabs({ services, activeServiceId, onTabChange }: ServiceCategoryTabsProps) {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex min-w-max space-x-2 p-1">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onTabChange(service.id)}
            className={cn(
              "relative flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
              activeServiceId === service.id
                ? "bg-[#133644] text-white dark:bg-[#9AD3F1] dark:text-[#133644]"
                : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
            )}
          >
            <service.icon
              className={cn(
                "h-4 w-4 transition-colors",
                activeServiceId === service.id ? "text-white dark:text-[#133644]" : "text-gray-700 dark:text-gray-300",
              )}
            />
            <span>{service.title}</span>
            {activeServiceId === service.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-lg bg-[#133644] dark:bg-[#9AD3F1]"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
