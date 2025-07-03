"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Smartphone, Tablet, Monitor, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"

export default function ResponsiveDemoPage() {
  const [activeView, setActiveView] = useState<"mobile" | "tablet" | "desktop">("desktop")
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-[#133644] py-16 dark:bg-gray-800 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Responsive Design Demo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-lg text-gray-300"
            >
              Explore how our components and layouts adapt to different screen sizes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex justify-center"
            >
              <Button
                onClick={toggleTheme}
                className="bg-[#9AD3F1] text-[#133644] hover:bg-[#9AD3F1]/90 dark:bg-[#7BBFE6]"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" /> Switch to Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" /> Switch to Dark Mode
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Device Selector */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Card className="border-2 border-gray-100 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-center text-[#133644] dark:text-[#9AD3F1]">Select Device Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant={activeView === "mobile" ? "default" : "outline"}
                    onClick={() => setActiveView("mobile")}
                    className={activeView === "mobile" ? "bg-[#133644] dark:bg-[#7BBFE6] dark:text-[#0A2029]" : ""}
                  >
                    <Smartphone className="mr-2 h-4 w-4" /> Mobile
                  </Button>
                  <Button
                    variant={activeView === "tablet" ? "default" : "outline"}
                    onClick={() => setActiveView("tablet")}
                    className={activeView === "tablet" ? "bg-[#133644] dark:bg-[#7BBFE6] dark:text-[#0A2029]" : ""}
                  >
                    <Tablet className="mr-2 h-4 w-4" /> Tablet
                  </Button>
                  <Button
                    variant={activeView === "desktop" ? "default" : "outline"}
                    onClick={() => setActiveView("desktop")}
                    className={activeView === "desktop" ? "bg-[#133644] dark:bg-[#7BBFE6] dark:text-[#0A2029]" : ""}
                  >
                    <Monitor className="mr-2 h-4 w-4" /> Desktop
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Responsive Demo Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-700">
            <div className="bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              {activeView === "mobile"
                ? "Mobile View (< 640px)"
                : activeView === "tablet"
                  ? "Tablet View (640px - 1023px)"
                  : "Desktop View (≥ 1024px)"}
            </div>
            <div
              className={`mx-auto transition-all duration-500 ${
                activeView === "mobile" ? "max-w-[320px]" : activeView === "tablet" ? "max-w-[768px]" : "max-w-full"
              }`}
            >
              {/* Responsive Grid */}
              <div className="p-6">
                <h2 className="mb-4 text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Responsive Grid</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="border-none shadow-md dark:bg-gray-800">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="font-semibold text-[#133644] dark:text-[#9AD3F1]">Grid Item {item}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {activeView === "mobile"
                              ? "1 column on mobile"
                              : activeView === "tablet"
                                ? "2 columns on tablet"
                                : "4 columns on desktop"}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Responsive Typography */}
              <div className="p-6">
                <h2 className="mb-4 text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Responsive Typography</h2>
                <Card className="border-none shadow-md dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h1 className="text-2xl font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-3xl lg:text-4xl">
                      Heading 1
                    </h1>
                    <h2 className="mt-4 text-xl font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-2xl lg:text-3xl">
                      Heading 2
                    </h2>
                    <h3 className="mt-4 text-lg font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-xl lg:text-2xl">
                      Heading 3
                    </h3>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 sm:text-base lg:text-lg">
                      This paragraph demonstrates responsive typography. The font size adjusts based on the screen size
                      to maintain readability across devices.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Responsive Buttons */}
              <div className="p-6">
                <h2 className="mb-4 text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Responsive Buttons</h2>
                <Card className="border-none shadow-md dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <Button className="bg-[#133644] hover:bg-[#133644]/90 dark:bg-[#7BBFE6] dark:text-[#0A2029]">
                        Primary Button
                      </Button>
                      <Button variant="secondary" className="bg-[#9AD3F1] text-[#133644] hover:bg-[#9AD3F1]/90">
                        Secondary Button
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#133644] text-[#133644] dark:border-[#7BBFE6] dark:text-[#7BBFE6]"
                      >
                        Outline Button
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Responsive Form */}
              <div className="p-6">
                <h2 className="mb-4 text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Responsive Form</h2>
                <Card className="border-none shadow-md dark:bg-gray-800">
                  <CardContent className="p-6">
                    <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                          type="email"
                          className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                          rows={4}
                          className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <div className="md:col-span-2">
                        <Button className="w-full bg-[#133644] hover:bg-[#133644]/90 dark:bg-[#7BBFE6] dark:text-[#0A2029]">
                          Submit
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="outline"
          className="rounded-full border-[#133644] text-[#133644] dark:border-[#7BBFE6] dark:text-[#7BBFE6]"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
