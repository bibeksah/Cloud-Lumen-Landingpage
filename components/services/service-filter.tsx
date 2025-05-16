"use client"

import { useState } from "react"
import { servicesData } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ServiceCard from "./service-card"

export default function ServiceFilter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter services based on search term and selected category
  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      searchTerm === "" ||
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.subServices.some(
        (subService) =>
          subService.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          subService.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )

    const matchesCategory = selectedCategory === null || service.id === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search services..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            className={selectedCategory === null ? "bg-[#133644]" : ""}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {servicesData.map((service) => (
            <Button
              key={service.id}
              variant={selectedCategory === service.id ? "default" : "outline"}
              className={selectedCategory === service.id ? "bg-[#133644]" : ""}
              onClick={() => setSelectedCategory(service.id)}
            >
              {service.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => <ServiceCard key={service.id} service={service} />)
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No services found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
