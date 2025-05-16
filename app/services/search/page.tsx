import type { Metadata } from "next"
import ServiceFilter from "@/components/services/service-filter"

export const metadata: Metadata = {
  title: "Search Services - Cloud Lumen",
  description: "Search and filter through our comprehensive range of cloud services and solutions.",
  keywords:
    "search cloud services, filter IT solutions, find cloud computing, data center services, disaster recovery, security services",
}

export default function SearchServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#133644] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Search Services</h1>
            <p className="mt-6 text-lg text-gray-300">
              Find the perfect cloud solution for your business needs. Search and filter through our comprehensive range
              of services.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Find Your Solution</h2>
            <p className="mt-4 text-lg text-gray-600">
              Use the search and filter options below to find the services that match your requirements
            </p>
          </div>
          <ServiceFilter />
        </div>
      </section>
    </main>
  )
}
