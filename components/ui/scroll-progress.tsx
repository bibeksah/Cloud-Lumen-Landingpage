"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollProgressProps {
  className?: string
  barClassName?: string
  height?: number
  color?: string
}

export const ScrollProgress = ({ className, barClassName, height = 4, color = "#9AD3F1" }: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className={cn("fixed top-0 left-0 right-0 z-50", className)}
      style={{ height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className={cn("h-full origin-left", barClassName)}
        style={{
          scaleX,
          backgroundColor: color,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      />
    </motion.div>
  )
}
