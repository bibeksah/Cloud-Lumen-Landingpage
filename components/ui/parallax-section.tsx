"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  backgroundImage?: string
  speed?: number
  direction?: "up" | "down"
}

export const ParallaxSection = ({
  children,
  className,
  backgroundImage,
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const { scrollY } = useScroll()

  // Calculate the element's position relative to the viewport
  useEffect(() => {
    if (!ref.current) return

    const setValues = () => {
      setElementTop(ref.current?.offsetTop || 0)
      setClientHeight(window.innerHeight)
    }

    setValues()
    window.addEventListener("resize", setValues)

    return () => window.removeEventListener("resize", setValues)
  }, [ref])

  const transformValue = direction === "up" ? [0, -speed * 100] : [0, speed * 100]

  const y = useTransform(scrollY, [elementTop - clientHeight, elementTop + clientHeight], transformValue)

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            willChange: "transform",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
