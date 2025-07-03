"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Button } from "@/components/ui/button"

export default function EnhancedCTA() {
  return (
    <section className="bg-[#133644] py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold tracking-tight text-white dark:text-white sm:text-4xl"
          >
            Ready to transform your tech stack?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 text-lg text-gray-100 dark:text-gray-100"
          >
            Get in touch with our experts to discuss your specific needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Link href="/contact">
              <MagneticButton strength={40}>
                <Button variant="secondary" size="lg">
                  Contact Us Today
                </Button>
              </MagneticButton>
            </Link>
            <Link href="/services">
              <MagneticButton strength={40}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 dark:border-[#7BBFE6] dark:text-[#7BBFE6]"
                >
                  Explore Our Services
                </Button>
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
