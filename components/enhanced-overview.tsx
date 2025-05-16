"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Button } from "@/components/ui/button"
import { PinnedSection } from "@/components/ui/pinned-section"

export default function EnhancedOverview() {
  const pinnedContent = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="lg:sticky lg:top-24"
    >
      <h2 className="text-3xl font-bold tracking-tight text-[#133644] sm:text-4xl">
        Your Partner for Enterprise Cloud Solutions
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16"
      >
        <Link href="/about">
          <MagneticButton>
            <Button variant="outline" className="border-[#133644] text-[#133644] hover:bg-[#133644]/10">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </MagneticButton>
        </Link>
      </motion.div>
    </motion.div>
  )

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PinnedSection pinnedContent={pinnedContent} pinnedWidth="40%">
          <div className="space-y-8 lg:pl-12">
            <div className="h-12 invisible lg:block" aria-hidden="true"></div>
            {[
              "Cloud Lumen is a cloud solutions and software distribution firm enabling smarter IT purchasing for enterprises.",
              "We combine top-tier vendor relationships with local support to deliver tailored solutions that drive growth and innovation.",
              "Our team of experts brings decades of combined experience in cloud computing, cybersecurity, and enterprise software.",
              "We work with businesses of all sizes, from startups to large enterprises, to help them leverage the power of cloud technology.",
              "Our mission is to simplify the complex world of cloud technology, making it accessible and beneficial for businesses of all sizes.",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg text-gray-600"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </PinnedSection>
      </div>
    </section>
  )
}
