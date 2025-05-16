import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

interface EnhancedServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function EnhancedServiceCard({ title, description, icon: Icon }: EnhancedServiceCardProps) {
  return (
    <Card className="h-full overflow-hidden border-2 border-gray-100 transition-all hover:border-[#9AD3F1]/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#9AD3F1]/10 transition-all duration-300 group-hover:bg-[#9AD3F1]/20 group-hover:shadow-lg group-hover:shadow-[#9AD3F1]/20">
          <Icon className="h-6 w-6 text-[#9AD3F1] transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Card>
  )
}
