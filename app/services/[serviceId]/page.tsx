import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/lib/services-data"
import { GlowingCard } from "@/components/ui/glowing-card"

interface ServicePageProps {
  params: {
    serviceId: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.id === params.serviceId)

  if (!service) {
    return {
      title: "Service Not Found - Cloud Lumen",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: `${service.title} - Cloud Lumen`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, cloud services, IT solutions, ${service.subServices.map((s) => s.title.toLowerCase()).join(", ")}`,
  }
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    serviceId: service.id,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.id === params.serviceId)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#133644] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center">
              <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <service.icon className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-gray-300">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <Link href="/services">
                <Button variant="ghost" className="text-[#133644] dark:text-[#9AD3F1]">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Button>
              </Link>
            </div>

            <h2 className="mb-8 text-2xl font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-3xl">
              Available Sub-Services
            </h2>

            <div className="space-y-6">
              {service.subServices.map((subService) => (
                <GlowingCard
                  key={subService.id}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:border-[#9AD3F1]/50 hover:shadow-md hover:scale-[1.01] hover:bg-gray-50/50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-[#9AD3F1]/30 dark:hover:bg-gray-800/80"
                  glowColor="#9AD3F1"
                  glowOpacity={0.15}
                  glowSize={300}
                >
                  <h3 className="mb-4 text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">{subService.title}</h3>
                  <p className="text-gray-600 dark:text-white/70">{subService.description}</p>
                </GlowingCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#133644]/5 py-16 sm:py-24 dark:bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-3xl">
              Explore Other Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-white/70">
              Discover our full range of cloud and software solutions
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {servicesData
                .filter((s) => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService) => (
                  <Link key={relatedService.id} href={`/services/${relatedService.id}`}>
                    <Button
                      variant="outline"
                      className="border-[#133644] text-[#133644] hover:bg-[#133644]/10 dark:border-[#9AD3F1] dark:text-[#9AD3F1] dark:hover:bg-[#9AD3F1]/10"
                    >
                      {relatedService.title}
                    </Button>
                  </Link>
                ))}
              <Link href="/services?view=all">
                <Button className="bg-[#133644] hover:bg-[#133644]/90 dark:bg-[#9AD3F1] dark:text-gray-900 dark:hover:bg-[#9AD3F1]/90">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
