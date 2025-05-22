"use client"

import React, { useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

interface StaggeredGridProps {
  children: React.ReactNode
  className?: string
  itemClassName?: string
  columns?: number
  staggerDelay?: number
  once?: boolean
  gap?: "small" | "medium" | "large"
  singleColumn?: boolean
}

export const StaggeredGrid = ({
  children,
  className,
  itemClassName,
  columns = 3,
  staggerDelay = 0.1,
  once = true,
  gap = "medium",
  singleColumn = false,
}: StaggeredGridProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })
  const controls = useAnimation()

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  // If singleColumn is true, always use grid-cols-1, otherwise use responsive columns
  const gridTemplateColumns = singleColumn
    ? "grid-cols-1"
    : {
        1: "grid-cols-1",
        2: "grid-cols-1 sm:grid-cols-2",
        3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
        6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
      }[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

  const gapSize = {
    small: "gap-6",
    medium: "gap-8",
    large: "gap-12",
  }[gap]

  // Add enhanced item class when in single column mode
  const enhancedItemClassName = singleColumn
    ? cn(
        itemClassName,
        "max-w-4xl mx-auto w-full transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden",
      )
    : itemClassName

  return (
    <motion.div
      ref={ref}
      className={cn(
        "grid relative transition-all duration-300",
        gapSize,
        typeof gridTemplateColumns === "string" ? gridTemplateColumns : "grid-cols-1",
        className,
        "hover:after:opacity-100 after:opacity-0 after:absolute after:inset-0 after:-z-10 after:rounded-xl after:bg-gradient-to-r after:from-[#9AD3F1]/0 after:via-[#9AD3F1]/10 after:to-[#9AD3F1]/0 after:blur-xl after:transition-opacity after:duration-500",
        singleColumn && "max-w-5xl mx-auto",
      )}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} className={enhancedItemClassName} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
