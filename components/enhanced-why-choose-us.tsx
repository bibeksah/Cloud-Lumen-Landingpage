"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StaggeredGrid } from "@/components/ui/staggered-grid"
import { MorphingCard } from "@/components/ui/morphing-card"

const reasons = [
  {
    title: "Official Partner Network",
    description:
      "We maintain official partnerships with Microsoft, AWS, Salesforce, and other leading technology providers.",
  },
  {
    title: "Dedicated Support",
    description: "Our dedicated account managers and pre-sales architects ensure you receive personalized attention.",
  },
  {
    title: "Compliance & Security",
    description: "We maintain ISO & GDPR-compliant operations, ensuring your data is secure and protected.",
  },
]

export default function EnhancedWhyChooseUs() {
  return (
    <StaggeredGrid columns={3} staggerDelay={0.15}>
      {reasons.map((reason) => (
        <MorphingCard key={reason.title} className="h-full">
          <Card className="h-full border-2 border-gray-100 transition-all hover:border-[#9AD3F1]/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
            <CardHeader>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <CardTitle className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">{reason.title}</CardTitle>
              </motion.div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{reason.description}</p>
            </CardContent>
          </Card>
        </MorphingCard>
      ))}
    </StaggeredGrid>
  )
}
