import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "@/components/client-layout"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cloud Lumen - Enterprise Cloud Solutions",
  description:
    "Cloud Lumen provides enterprise-grade cloud solutions, software distribution, and managed services for businesses of all sizes.",
  keywords: "cloud services, enterprise solutions, cloud computing, managed IT, cybersecurity",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-200`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-900"></div>}>
            <ClientLayout>{children}</ClientLayout>
          </Suspense>
        </ThemeProvider>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  )
}
