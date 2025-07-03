"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Careers", href: "/careers" },
]

export default function ResponsiveHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isDesktop = useMediaQuery("(min-width: 750px)")

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const handleHeaderMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!headerRef.current) return

    const rect = headerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleHeaderMouseEnter = () => {
    setIsHeaderHovered(true)
  }

  const handleHeaderMouseLeave = () => {
    setIsHeaderHovered(false)
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ease-in-out dark:bg-gray-900 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
      style={{ height: scrolled ? "54px" : "60px" }}
    >
      <div
        ref={headerRef}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2"
        onMouseMove={handleHeaderMouseMove}
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      >
        {isHeaderHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-xl"
            style={{
              background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(154, 211, 241, 0.15) 0%, transparent 70%)`,
              opacity: isHeaderHovered ? 1 : 0,
            }}
          />
        )}
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/images/CloudLumenFullLogo.svg"
              alt="Cloud Lumen Logo"
              width={112}
              height={24}
              className={`h-auto transition-all duration-300 ${scrolled ? "w-[96px]" : "w-[112px]"}`}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex flex-col items-center">
          <nav className={isDesktop ? "flex items-center space-x-6 justify-center" : "hidden"}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors duration-200 relative ${
                  isActive(item.href)
                    ? "text-[#9AD3F1] dark:text-[#9AD3F1]"
                    : "text-[#133644] dark:text-white hover:text-[#9AD3F1] dark:hover:text-[#9AD3F1]"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#9AD3F1] rounded-full" />
                )}
              </Link>
            ))}
          </nav>
          <div className="h-12 w-full" aria-hidden="true"></div>
        </div>

        {/* Contact Button and Theme Toggle - desktop */}
        <div className={isDesktop ? "flex flex-col items-center" : "hidden"}>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Link href="/contact">
              <Button>Contact Us!</Button>
            </Link>
          </div>
          {/* Empty box for proper vertical spacing */}
          <div className="h-12 w-full" aria-hidden="true"></div>
        </div>

        {/* Mobile Menu Toggle and Theme Toggle */}
        <div className={isDesktop ? "hidden" : "flex flex-col items-center"}>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="flex items-center justify-center rounded-md p-2 text-[#133644] dark:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          {/* Empty entity for vertical spacing */}
          <div className="h-12 w-full" aria-hidden="true"></div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}>
        <div className="fixed inset-0 bg-black/20 dark:bg-black/50" onClick={() => setMobileMenuOpen(false)} />

        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Cloud Lumen</span>
              <Image
                src="/images/CloudLumenFullLogo.svg"
                alt="Cloud Lumen Logo"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#133644] dark:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/30">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 ${
                      isActive(item.href)
                        ? "bg-gray-50 text-[#9AD3F1] dark:bg-gray-800 dark:text-[#9AD3F1]"
                        : "text-[#133644] hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block">
                  <Button className="w-full justify-center rounded-lg">Contact Us!</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
