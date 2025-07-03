"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import type { Service } from "@/lib/services-data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import SubServiceItem from "./sub-service-item"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  service: Service
  isExpanded?: boolean
  onToggle?: () => void
}

export default function ServiceCard({ service, isExpanded = false, onToggle }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleToggle = () => {
    if (onToggle) {
      onToggle()
    } else {
      setIsHovered(!isHovered)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full"
    >
      <Card
        className={cn(
          "overflow-hidden border-2 transition-all duration-300",
          isExpanded ? "border-[#9AD3F1] shadow-lg shadow-[#9AD3F1]/10" : "border-gray-100 dark:border-gray-700",
          "hover:border-[#9AD3F1]/50 hover:shadow-lg hover:shadow-[#9AD3F1]/10",
          "dark:bg-gray-800/90 dark:hover:border-[#9AD3F1]/30 dark:hover:shadow-[#9AD3F1]/5",
          "w-full",
        )}
      >
        <CardHeader className="flex cursor-pointer flex-row items-center justify-between p-6" onClick={handleToggle}>
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className={cn(
                "flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-300",
                isExpanded ? "bg-[#9AD3F1]/20 shadow-md shadow-[#9AD3F1]/20" : "bg-[#133644]/10 dark:bg-[#9AD3F1]/10",
                isHovered && !isExpanded ? "bg-[#9AD3F1]/20 shadow-md shadow-[#9AD3F1]/20" : "",
              )}
            >
              <service.icon
                className={cn(
                  "h-8 w-8 transition-all duration-300",
                  "text-[#133644] dark:text-[#9AD3F1]",
                  isHovered ? "scale-110" : "",
                )}
              />
            </motion.div>
            <div>
              <h3
                className={cn(
                  "text-2xl font-bold transition-colors duration-300",
                  "text-[#133644] dark:text-[#9AD3F1]",
                  isHovered ? "text-[#133644]/90 dark:text-[#9AD3F1]/90" : "",
                )}
              >
                {service.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {service.subServices.length} sub-services available
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
              isExpanded
                ? "bg-[#9AD3F1]/20 text-[#133644] dark:text-[#9AD3F1]"
                : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400",
              "hover:bg-[#9AD3F1]/30 hover:text-[#133644] dark:hover:text-[#9AD3F1]",
            )}
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </motion.div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <CardContent className="px-6 pb-6">
                <div className="mb-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-700/30">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-white/80">{service.description}</p>
                </div>

                <div className="mb-6 space-y-4">
                  <h4 className="flex items-center text-xl font-semibold text-[#133644] dark:text-[#9AD3F1]">
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#9AD3F1]"></span>
                    Available Sub-Services
                  </h4>
                  <div className="divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800/80">
                    {service.subServices.map((subService) => (
                      <SubServiceItem key={subService.id} subService={subService} />
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link href={`/services/${service.id}`}>
                    <Button
                      variant="outline"
                      className="group flex items-center gap-2 border-[#133644] text-[#133644] hover:bg-[#133644]/10 dark:border-[#9AD3F1] dark:text-[#9AD3F1]"
                    >
                      View Details
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}
