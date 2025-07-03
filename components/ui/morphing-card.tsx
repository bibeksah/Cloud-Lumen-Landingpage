"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MorphingCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  rotateStrength?: number
}

export const MorphingCard = ({ children, className, hoverScale = 1.02, rotateStrength = 1.5 }: MorphingCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [elementDimensions, setElementDimensions] = useState({ width: 0, height: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5

    setMousePosition({ x, y })
    setElementDimensions({ width, height })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      className={cn("relative overflow-hidden transition-all", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isHovered ? hoverScale : 1,
        rotateX: isHovered ? -mousePosition.y * rotateStrength : 0,
        rotateY: isHovered ? mousePosition.x * rotateStrength : 0,
        boxShadow: isHovered
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="h-full w-full"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${mousePosition.y * 100 + 50}%, rgba(154, 211, 241, 0.1), transparent 50%)`
            : "none",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
