import Link from "next/link"
import { servicesData } from "@/lib/services-data"
import { Card, CardContent } from "@/components/ui/card"

export default function ServiceNavigation() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {servicesData.map((service) => (
        <Link key={service.id} href={`/services/${service.id}`} className="group block">
          <Card className="h-full border-2 border-gray-100 transition-all duration-300 ease-in-out hover:border-[#9AD3F1]/50 hover:shadow-lg hover:shadow-[#9AD3F1]/10 dark:border-gray-700 dark:hover:border-[#9AD3F1]/30">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#9AD3F1]/10 transition-all duration-300 ease-in-out group-hover:bg-[#9AD3F1]/20 group-hover:shadow-md group-hover:shadow-[#9AD3F1]/20">
                <service.icon className="h-6 w-6 text-[#9AD3F1] transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#133644] transition-colors duration-300 ease-in-out group-hover:text-[#133644]/90 dark:text-[#9AD3F1] dark:group-hover:text-[#9AD3F1]">
                {service.title}
              </h3>
              <p className="text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-gray-800 dark:text-white/70 dark:group-hover:text-white/90">
                {service.description}
              </p>
              <div className="mt-4">
                <span className="text-sm font-medium text-[#9AD3F1] transition-colors duration-300 ease-in-out group-hover:text-[#9AD3F1]/90">
                  {service.subServices.length} sub-services available
                </span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
