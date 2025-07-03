import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceNavigation from "@/components/services/service-navigation"
import ServiceList from "@/components/services/service-list"
import { servicesData } from "@/lib/services-data"
import { EnhancedSubService } from "@/components/services/enhanced-sub-service"

export const metadata: Metadata = {
  title: "Services - Cloud Lumen",
  description: "Explore Cloud Lumen's comprehensive range of cloud services and solutions for your business needs.",
  keywords:
    "cloud services, IT solutions, cloud computing, data center, disaster recovery, security, managed services, software solutions",
}

export default function ServicesPage({
  searchParams,
}: {
  searchParams?: { view?: string }
}) {
  const showAllServices = searchParams?.view === "all"

  // Get a few featured sub-services to showcase
  const featuredSubServices = [
    servicesData[0].subServices[0], // First sub-service from first service
    servicesData[1].subServices[0], // First sub-service from second service
    servicesData[2].subServices[0], // First sub-service from third service
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#133644] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Our Services</h1>
            <p className="mt-6 text-lg text-gray-300">
              Comprehensive cloud and software solutions tailored to your business needs. We offer a wide range of
              services to help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {showAllServices ? (
            <>
              <div className="mx-auto max-w-3xl text-center mb-12">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-[#9AD3F1]/20 px-4 py-2 text-sm font-medium text-[#133644] dark:text-[#9AD3F1]">
                  Comprehensive Solutions
                </div>
                <h2 className="text-3xl font-bold text-[#133644] dark:text-white sm:text-4xl">All Services</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                  Explore our complete range of cloud solutions and services. Click on each card to see detailed
                  information and available sub-services.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="border-[#133644] text-[#133644] hover:bg-[#133644]/10 dark:border-[#9AD3F1] dark:text-[#9AD3F1]"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to Service Categories
                    </Button>
                  </Link>
                </div>
              </div>
              <ServiceList />
            </>
          ) : (
            <>
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Browse Our Services</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Click on a service category to explore its details and sub-services
                </p>
              </div>
              <ServiceNavigation />

              {/* Featured Sub-Services Preview */}
              <div className="mt-16 mb-12">
                <div className="mx-auto max-w-3xl text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-3xl">
                    Featured Solutions
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Preview some of our most popular solutions
                  </p>
                </div>
                <div className="space-y-6">
                  {featuredSubServices.map((subService, index) => (
                    <EnhancedSubService key={subService.id} subService={subService} index={index} />
                  ))}
                </div>
              </div>

              <div className="mt-12 flex justify-center">
                <Link href="/services?view=all">
                  <Button className="bg-[#133644] hover:bg-[#133644]/90">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#133644]/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#133644] sm:text-3xl">
              Ready to get started with our services?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Contact us today to discuss how our services can benefit your business.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-[#133644] hover:bg-[#133644]/90">Contact Us Today</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
