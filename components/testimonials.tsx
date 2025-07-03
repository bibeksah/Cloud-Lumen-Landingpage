"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "They helped us consolidate licensing, migrate to Azure, and reduce costs by 30% in 6 months.",
    author: "CIO, Logistics Company",
    logo: "/logistics-company-logo.png",
  },
  {
    quote: "Cloud Lumen's security solutions have significantly improved our threat detection capabilities.",
    author: "CISO, Healthcare Provider",
    logo: "/healthcare-company-logo.png",
  },
  {
    quote:
      "Their managed services team is responsive and proactive, allowing our IT staff to focus on strategic initiatives.",
    author: "IT Director, Manufacturing Firm",
    logo: "/manufacturing-company-logo.png",
  },
  {
    quote: "The cloud migration was seamless and their ongoing support has been exceptional.",
    author: "CTO, Financial Services",
    logo: "/financial-services-logo.png",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-16 sm:py-24 bg-[#133644]/5 dark:bg-gray-800/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#133644] dark:text-white sm:text-4xl">
            Trusted by Teams Like Yours
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            See what our clients have to say about working with Cloud Lumen
          </p>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <Card className="relative mx-auto max-w-4xl border-none bg-white shadow-lg dark:bg-gray-800">
            <CardContent className="p-8 sm:p-12">
              <Quote className="absolute left-8 top-8 h-12 w-12 text-[#9AD3F1]/30 dark:text-[#7BBFE6]/30" />
              <div className="relative z-10">
                <p className="text-center text-xl font-medium italic text-gray-800 dark:text-gray-100 sm:text-2xl">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="mt-8 flex flex-col items-center">
                  <p className="font-semibold text-[#0A2029] dark:text-[#7BBFE6]">
                    {testimonials[currentIndex].author}
                  </p>
                  <div className="mt-4 h-12 w-24">
                    <Image
                      src={testimonials[currentIndex].logo || "/placeholder.svg"}
                      alt="Company logo"
                      width={120}
                      height={60}
                      className="h-full w-full object-contain dark:brightness-200 dark:contrast-200 dark:invert"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-[#133644] text-[#133644] dark:border-[#7BBFE6] dark:text-[#7BBFE6]"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`h-2 w-2 rounded-full p-0 ${
                  index === currentIndex ? "bg-[#133644] dark:bg-[#7BBFE6]" : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-[#133644] text-[#133644] dark:border-[#7BBFE6] dark:text-[#7BBFE6]"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
