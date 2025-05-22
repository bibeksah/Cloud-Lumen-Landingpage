"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Service } from "@/lib/services-data"

interface ServiceFAQProps {
  service: Service
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Generate FAQs based on the service
  const faqs = [
    {
      question: `What is included in your ${service.title} offering?`,
      answer: `Our ${service.title} offering includes comprehensive solutions tailored to your business needs. We provide end-to-end services from initial consultation and planning to implementation, ongoing management, and support. Our team of experts ensures that your systems are optimized for performance, security, and reliability.`,
    },
    {
      question: `How quickly can you implement ${service.title} solutions?`,
      answer: `Implementation timelines for our ${service.title} solutions vary depending on the complexity and scope of your project. Typically, basic implementations can be completed within 2-4 weeks, while more complex enterprise solutions may take 1-3 months. We work closely with your team to establish a realistic timeline and ensure minimal disruption to your operations.`,
    },
    {
      question: `Do you offer support for existing ${service.title} infrastructure?`,
      answer: `Yes, we offer comprehensive support for existing ${service.title} infrastructure. Our team can assess your current setup, identify areas for improvement, and provide ongoing management and support services. We work with all major platforms and technologies to ensure seamless integration and optimal performance.`,
    },
    {
      question: `How do you ensure security in your ${service.title} solutions?`,
      answer: `Security is a top priority in all our ${service.title} solutions. We implement industry-leading security practices, including encryption, access controls, regular security audits, and compliance with relevant regulations. Our team stays up-to-date with the latest security threats and vulnerabilities to ensure your systems remain protected.`,
    },
  ]

  return (
    <div className="mb-12">
      <h3 className="mb-6 text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <button
              className="flex w-full items-center justify-between p-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-[#133644] dark:text-[#9AD3F1]">{faq.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-gray-500 transition-transform dark:text-gray-400",
                  openIndex === index && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
