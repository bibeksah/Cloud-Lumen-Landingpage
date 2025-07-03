"use client"

import type React from "react"

import { Suspense } from "react"
import ResponsiveHeader from "@/components/responsive-header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import ScrollToTop from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Add ScrollToTop component at the top level to ensure it runs on every route change */}
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>

      <Suspense fallback={<div className="h-16 bg-white shadow-sm dark:bg-gray-900"></div>}>
        <ResponsiveHeader />
      </Suspense>

      <Suspense fallback={null}>
        <ScrollProgress />
      </Suspense>

      <main className="flex-1">{children}</main>

      <Footer />

      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </div>
  )
}
