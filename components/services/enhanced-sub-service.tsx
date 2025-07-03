"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import type { SubService } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/lib/services-data"

// Get all icons from the services data to use for sub-services
const getIconForSubService = (subServiceId: string) => {
  // Find which service contains this sub-service
  for (const service of servicesData) {
    const subService = service.subServices.find((sub) => sub.id === subServiceId)
    if (subService) {
      // Return the parent service icon
      return service.icon
    }
  }
  // Default icon if not found
  return ExternalLink
}

interface EnhancedSubServiceProps {
  subService: SubService
  index: number
}

export function EnhancedSubService({ subService, index }: EnhancedSubServiceProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = getIconForSubService(subService.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div
        className={cn(
          "relative mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300",
          "hover:border-[#9AD3F1]/50 hover:shadow-lg",
          "dark:border-gray-700 dark:bg-gray-800 dark:hover:border-[#9AD3F1]/30",
          isExpanded && "border-[#9AD3F1]/50 shadow-lg dark:border-[#9AD3F1]/30",
        )}
      >
        {/* Gradient background effect */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-[#9AD3F1]/5 via-transparent to-[#9AD3F1]/5 opacity-0 transition-opacity duration-500",
            "group-hover:opacity-100",
            isExpanded && "opacity-100",
          )}
        />

        {/* Header section */}
        <div
          className="relative flex cursor-pointer items-center justify-between p-6"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full",
                "bg-[#9AD3F1]/10 transition-all duration-300",
                "group-hover:bg-[#9AD3F1]/20 group-hover:shadow-md",
                isExpanded && "bg-[#9AD3F1]/20 shadow-md",
              )}
            >
              <Icon className="h-6 w-6 text-[#133644] dark:text-[#9AD3F1]" />
            </div>
            <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">{subService.title}</h3>
          </div>
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              "bg-gray-100 text-gray-500 transition-all duration-300",
              "group-hover:bg-[#9AD3F1]/20 group-hover:text-[#133644]",
              "dark:bg-gray-700 dark:text-gray-400 dark:group-hover:text-[#9AD3F1]",
              isExpanded && "bg-[#9AD3F1]/20 text-[#133644] rotate-180 dark:text-[#9AD3F1]",
            )}
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>
        </div>

        {/* Expanded content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t border-gray-100 p-6 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left side - Text and Key Features */}
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">{subService.description}</p>

                {/* Key Features Section */}
                <div>
                  <h4 className="text-lg font-semibold text-[#133644] dark:text-[#9AD3F1] mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#9AD3F1] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-400">Advanced cloud infrastructure management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#9AD3F1] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-400">24/7 monitoring and support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#9AD3F1] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-400">Scalable solutions for enterprise needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#9AD3F1] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-400">Industry-leading security protocols</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right side - Image Placeholder */}
              <div className="flex items-center justify-center">
                <img 
                src={subService.image}
                className="w-full h-55 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                size="sm"
                variant="outline"
                className="border-[#133644] text-[#133644] hover:bg-[#133644]/10 dark:border-[#9AD3F1] dark:text-[#9AD3F1]"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
