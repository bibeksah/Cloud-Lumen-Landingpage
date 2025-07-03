"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { Service } from "@/lib/services-data"

interface ServiceCTAProps {
  service: Service
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-[#133644] p-8 text-white dark:bg-[#133644]/80"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="mb-4 text-2xl font-bold text-white">
          Ready to transform your business with our {service.title} solutions?
        </h3>
        <p className="mb-6 text-gray-200">
          Contact our team today to discuss how we can help you achieve your business goals.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Link href="/contact">
            <Button size="lg" className="bg-[#9AD3F1] text-[#133644] hover:bg-[#9AD3F1]/90">
              Contact Us
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Other Services
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
