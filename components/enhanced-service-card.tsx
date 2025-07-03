"use client"

import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EnhancedServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href?: string
}

export default function EnhancedServiceCard({ title, description, icon: Icon, href }: EnhancedServiceCardProps) {
  return (
    <Link href={href || "#"} className="block h-full">
      <Card className="h-full overflow-hidden border-2 border-gray-100 transition-all hover:border-[#9AD3F1]/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 cursor-pointer">
        <div
          className="p-4 flex flex-col h-full"
          style={{ minHeight: "240px" }}
          role="button"
          tabIndex={0}
          aria-label={`View details about ${title}`}
          onClick={() => (window.location.href = href || "#")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              window.location.href = href || "#"
            }
          }}
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#9AD3F1]/10 transition-all duration-300 group-hover:bg-[#9AD3F1]/20 group-hover:shadow-lg group-hover:shadow-[#9AD3F1]/20">
            <Icon className="h-5 w-5 text-[#9AD3F1] transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-[#133644] dark:text-[#9AD3F1] line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 flex-grow line-clamp-3">{description}</p>
          {href && (
            <div className="mt-auto">
              <Link href={href} passHref>
                <Button
                  size="sm"
                  variant="secondary"
                  className="mt-auto"
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Card>
    </Link>
  )
}
