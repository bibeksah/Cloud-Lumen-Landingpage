"use client"

import type React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  glowColor?: string
  glowOpacity?: number
  glowSize?: number
}

export function GlowingCard({
  children,
  className,
  glowColor = "#9AD3F1",
  glowOpacity = 0.15,
  glowSize = 250,
  ...props
}: GlowingCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, ${glowColor}${Math.round(
              glowOpacity * 255,
            )
              .toString(16)
              .padStart(2, "0")} 0%, transparent 70%)`,
            opacity: isHovering ? 1 : 0,
          }}
        />
      )}
      {children}
    </div>
  )
}
