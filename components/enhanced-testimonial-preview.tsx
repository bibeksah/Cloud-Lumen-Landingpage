"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { MorphingCard } from "@/components/ui/morphing-card"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "They helped us consolidate licensing, migrate to Azure, and reduce costs by 30% in 6 months.",
    author: "CIO, Logistics Company",
    logo: "/images/clients/global-logistics.png",
  },
  {
    quote: "Cloud Lumen's security solutions have significantly improved our threat detection capabilities.",
    author: "CISO, Healthcare Provider",
    logo: "/images/clients/medtech-healthcare.png",
  },
]

export default function EnhancedTestimonialPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="flex flex-col items-center">
      <MorphingCard className="w-full max-w-4xl">
        <Card className="relative mx-auto border-none bg-white shadow-lg dark:bg-gray-800">
          <CardContent className="p-8 sm:p-12">
            <Quote className="absolute left-8 top-8 h-12 w-12 text-[#9AD3F1]/30 dark:text-[#7BBFE6]/30" />
            <div className="relative z-10 min-h-[180px] flex flex-col justify-center">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <p className="text-center text-xl font-medium italic text-gray-700 dark:text-gray-300 sm:text-2xl">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div className="mt-8 flex flex-col items-center">
                    <p className="font-semibold text-[#133644] dark:text-[#9AD3F1]">
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
                </motion.div>
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </MorphingCard>
      <div className="mt-8 flex items-center justify-center space-x-2">
        <MagneticButton
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#133644] text-[#133644] dark:border-[#7BBFE6] dark:text-[#7BBFE6]"
          onClick={handlePrev}
          strength={50}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </MagneticButton>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full p-0 ${index === currentIndex ? "bg-[#133644] dark:bg-[#7BBFE6]" : "bg-gray-300 dark:bg-gray-600"}`}
            onClick={() => {
              setAutoplay(false)
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
          >
            <span className="sr-only">Testimonial {index + 1}</span>
          </button>
        ))}
        <MagneticButton
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#133644] text-[#133644] dark:border-[#7BBFE6] dark:text-[#7BBFE6]"
          onClick={handleNext}
          strength={50}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </MagneticButton>
      </div>
    </div>
  )
}
