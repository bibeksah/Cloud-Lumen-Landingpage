import type * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EnhancedCardProps extends React.ComponentProps<typeof Card> {
  title?: string
  learnMoreUrl?: string
  learnMoreText?: string
  footerContent?: React.ReactNode
}

export function EnhancedCard({
  title,
  learnMoreUrl = "#",
  learnMoreText = "Learn More",
  footerContent,
  children,
  className,
  ...props
}: EnhancedCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between">
        {footerContent}
        <Link href={learnMoreUrl}>
          <Button variant="ghost" className="group p-0 text-[#133644] dark:text-[#9AD3F1]">
            {learnMoreText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
