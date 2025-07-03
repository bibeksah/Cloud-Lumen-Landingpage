"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EnhancedHero() {
  return (
    <section className="relative overflow-hidden bg-[#133644] py-16 dark:bg-gray-900/95 sm:py-24">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/abstract-digital-network.png"
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Modern Software. <br />
            Smarter Work. <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#9AD3F1] dark:text-[#7BBFE6]"
            >
              Scalable Infrastructure.
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 text-lg text-gray-100 dark:text-gray-100"
          >
            From office productivity to enterprise-grade cloud and security – we help businesses scale with the best
            global SaaS, IaaS, and DR solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <MagneticButton strength={40}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#9AD3F1] text-[#0A2029] hover:bg-[#9AD3F1]/90 dark:bg-[#7BBFE6] dark:text-[#0A2029]"
                >
                  Get a Custom Quote
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton strength={40}>
              <Link href="https://wa.me/message/UOCR5VDF5GMKO1">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 dark:border-[#7BBFE6] dark:text-[#7BBFE6] dark:hover:bg-[#7BBFE6]/20 dark:hover:text-white"
                >
                  Talk to a Solution Expert
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
