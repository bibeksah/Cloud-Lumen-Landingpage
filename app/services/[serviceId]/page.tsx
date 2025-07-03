"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/lib/services-data"
import { ServiceCategoryTabs } from "@/components/services/service-category-tabs"
import { EnhancedSubService } from "@/components/services/enhanced-sub-service"
import { ServiceFeatures } from "@/components/services/service-features"
import { ServiceStatistics } from "@/components/services/service-statistics"
import { ServiceCaseStudies } from "@/components/services/service-case-studies"
import { ServiceFAQ } from "@/components/services/service-faq"
import { ServiceCTA } from "@/components/services/service-cta"

export default function ServicePage() {
  const params = useParams()
  const router = useRouter()
  const serviceId = params.serviceId as string

  const [service, setService] = useState(() => servicesData.find((s) => s.id === serviceId))

  useEffect(() => {
    const foundService = servicesData.find((s) => s.id === serviceId)
    if (foundService) {
      setService(foundService)
    } else {
      router.push("/services")
    }
  }, [serviceId, router])

  if (!service) {
    return null
  }

  const handleTabChange = (newServiceId: string) => {
    router.push(`/services/${newServiceId}`)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#133644] py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <Image src="/abstract-digital-network.png" alt="Background Pattern" fill className="object-cover" priority />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10"
            >
              <service.icon className="h-10 w-10 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-lg text-gray-300"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* Back button */}
            <div className="mb-8">
              <Link href="/services">
                <Button variant="ghost" className="text-[#133644] dark:text-[#9AD3F1]">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Button>
              </Link>
            </div>

            {/* Service Category Tabs */}
            <ServiceCategoryTabs services={servicesData} activeServiceId={service.id} onTabChange={handleTabChange} />

            {/* Service Statistics */}
            <ServiceStatistics service={service} />

            {/* Service Features */}
            <ServiceFeatures service={service} />

            {/* Sub-Services */}
            <div className="mb-12">
              <h2 className="mb-8 text-2xl font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-3xl">
                Available Solutions
              </h2>
              <div className="space-y-6">
                {service.subServices.map((subService, index) => (
                  <EnhancedSubService key={subService.id} subService={subService} index={index} />
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <ServiceCaseStudies service={service} />

            {/* FAQ Section */}
            <ServiceFAQ service={service} />

            {/* CTA Section */}
            <ServiceCTA service={service} />
          </div>
        </div>
      </section>
    </main>
  )
}
