"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Service } from "@/lib/services-data"

interface ServiceCaseStudiesProps {
  service: Service
}

export function ServiceCaseStudies({ service }: ServiceCaseStudiesProps) {
  // Generate case studies based on the service
  const caseStudies = [
    {
      title: `${service.title} Transformation for Enterprise Client`,
      description: `How we helped a Fortune 500 company modernize their ${service.title.toLowerCase()} infrastructure, resulting in 40% cost savings and improved performance.`,
      image: "/images/case-studies/enterprise-transformation.jpg",
      imageUrl: "/enterprise-digital-transformation.png",
    },
    {
      title: `Scaling ${service.title} for Fast-Growing Startup`,
      description: `A case study on how our ${service.title.toLowerCase()} solutions helped a startup scale from 10 to 200 employees without any service disruptions.`,
      image: "/images/case-studies/Serverroom2.webp",
      imageUrl: "/Serverroom2.webp",
    },
  ]

  return (
    <div className="mb-12">
      <h3 className="mb-6 text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Case Studies</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full overflow-hidden border-none shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={caseStudy.imageUrl || "/placeholder.svg"}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="mb-2 text-lg font-bold text-[#133644] dark:text-[#9AD3F1]">{caseStudy.title}</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{caseStudy.description}</p>
                <Button variant="ghost" className="group p-0 text-[#133644] dark:text-[#9AD3F1]">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
