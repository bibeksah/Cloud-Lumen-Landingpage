"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TileCardProps {
  children: React.ReactNode
  className?: string
  depth?: number
  glareOpacity?: number
}

export const TileCard = ({ children, className, depth = 20, glareOpacity = 0.1 }: TileCardProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    setRotation({ x: -y * depth, y: x * depth })
    setGlarePosition({ x: e.clientX - left, y: e.clientY - top })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden transition-all perspective-1000", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
    >
      <div className="relative h-full w-full">
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}px ${glarePosition.y}px, rgba(255, 255, 255, ${glareOpacity}), transparent 50%)`,
              zIndex: 2,
            }}
          />
        )}
        <motion.div
          className="h-full w-full"
          animate={{
            translateZ: isHovered ? depth : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  )
}
