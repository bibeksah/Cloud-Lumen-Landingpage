"use client"

import Link from "next/link"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { ParallaxSection } from "@/components/ui/parallax-section"
import EnhancedHero from "@/components/enhanced-hero"
import EnhancedOverview from "@/components/enhanced-overview"
import EnhancedServicePreview from "@/components/enhanced-service-preview"
import EnhancedWhyChooseUs from "@/components/enhanced-why-choose-us"
import EnhancedTestimonialPreview from "@/components/enhanced-testimonial-preview"
import EnhancedCTA from "@/components/enhanced-cta"

export default function Home() {
  // Load Framer Motion animations
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <main className="min-h-screen">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Hero Section */}
      <EnhancedHero />

      {/* Company Overview */}
      <EnhancedOverview />

      {/* Services Preview */}
      <ParallaxSection
        className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900/50"
        backgroundImage="/images/abstract-digital-network.png"
        speed={0.2}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#9AD3F1] sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-white/90">
              Comprehensive cloud and software solutions tailored to your business needs
            </p>
          </motion.div>
          <div className="mt-16">
            <EnhancedServicePreview />
            <div className="mt-8">
              <div className="mt-12 text-center">
                <Link href="/services">
                  <Button size="lg" className="group bg-[#133644] hover:bg-[#1c4d5e] text-white">
                    <span>View All Services</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Cloud Lumen?</h2>
            <p className="mt-4 text-lg">We deliver enterprise-grade solutions with personalized service</p>
          </motion.div>
          <div className="mt-12">
            <EnhancedWhyChooseUs />
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <ParallaxSection className="bg-[#133644]/5 py-16 sm:py-24 dark:bg-gray-800/30" speed={0.3} direction="down">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Teams Like Yours</h2>
            <p className="mt-4 text-lg">See what our clients have to say about working with Cloud Lumen</p>
          </motion.div>
          <div className="mt-16">
            <EnhancedTestimonialPreview />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12 text-center"
            >
              <Link href="/testimonials">
                <Button>
                  View All Testimonials <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <EnhancedCTA />
    </main>
  )
}
