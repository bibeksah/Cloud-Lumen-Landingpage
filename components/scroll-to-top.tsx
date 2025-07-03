"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Using "instant" instead of "smooth" to avoid conflicts with page transitions
    })
  }, [pathname, searchParams]) // Re-run when route changes (pathname or search params)

  return null // This component doesn't render anything
}
