"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface PinnedSectionProps {
  children: React.ReactNode
  className?: string
  pinnedContent: React.ReactNode
  pinnedSide?: "left" | "right"
  pinnedWidth?: string
}

export const PinnedSection = ({
  children,
  className,
  pinnedContent,
  pinnedSide = "left",
  pinnedWidth = "40%",
}: PinnedSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8])

  return (
    <div ref={containerRef} className={cn("relative flex flex-col lg:flex-row", className)}>
      <motion.div
        className={cn("h-fit", pinnedSide === "left" ? "lg:mr-8" : "lg:ml-8 lg:order-last", "lg:sticky lg:top-24")}
        style={{
          width: pinnedWidth,
          opacity,
          scale,
        }}
      >
        {pinnedContent}
      </motion.div>
      <div className={cn("flex-1", pinnedSide === "right" && "lg:order-first")}>{children}</div>
    </div>
  )
}
