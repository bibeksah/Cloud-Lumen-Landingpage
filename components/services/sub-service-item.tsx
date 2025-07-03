"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { SubService } from "@/lib/services-data"
import { motion, AnimatePresence } from "framer-motion"

interface SubServiceItemProps {
  subService: SubService
}

export default function SubServiceItem({ subService }: SubServiceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-b-0 dark:border-gray-700">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9AD3F1]/50 focus:ring-offset-2 dark:hover:bg-gray-700/50"
        aria-expanded={isExpanded}
      >
        <h4 className="font-medium text-[#133644] dark:text-[#9AD3F1]">{subService.title}</h4>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500 dark:text-gray-400"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50 p-4 dark:bg-gray-700/30">
              <p className="text-gray-700 dark:text-white/80">{subService.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
