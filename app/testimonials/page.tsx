import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export const metadata = {
  title: "Testimonials - Cloud Lumen",
  description:
    "Read what our clients have to say about Cloud Lumen's cloud services and solutions. Discover how we've helped businesses transform their IT infrastructure.",
  keywords: "client testimonials, customer reviews, cloud services feedback, IT success stories",
}

const testimonials = [
  {
    quote: "They helped us consolidate licensing, migrate to Azure, and reduce costs by 30% in 6 months.",
    author: "James Wilson",
    position: "CIO",
    company: "Global Logistics Inc.",
    logo: "/images/clients/global-logistics.png",
    image: "/images/testimonials/james-wilson.png",
  },
  {
    quote: "Cloud Lumen's security solutions have significantly improved our threat detection capabilities.",
    author: "Dr. Emily Chen",
    position: "CISO",
    company: "MedTech Healthcare",
    logo: "/images/clients/medtech-healthcare.png",
    image: "/images/testimonials/emily-chen.png",
  },
  {
    quote:
      "Their managed services team is responsive and proactive, allowing our IT staff to focus on strategic initiatives.",
    author: "Robert Johnson",
    position: "IT Director",
    company: "Advanced Manufacturing Co.",
    logo: "/images/clients/advanced-manufacturing.png",
    image: "/images/testimonials/robert-johnson.png",
  },
  {
    quote: "The cloud migration was seamless and their ongoing support has been exceptional.",
    author: "Sarah Thompson",
    position: "CTO",
    company: "First Capital Bank",
    logo: "/images/clients/first-capital-bank.png",
    image: "/images/testimonials/sarah-thompson.png",
  },
  {
    quote:
      "Cloud Lumen helped us implement a robust disaster recovery solution that has already proven its value during a recent outage.",
    author: "Michael Rodriguez",
    position: "Head of Infrastructure",
    company: "Retail Solutions Group",
    logo: "/images/clients/retail-solutions.png",
    image: "/images/testimonials/michael-rodriguez.png",
  },
  {
    quote:
      "Their expertise in cloud cost optimization helped us identify and eliminate waste, resulting in significant monthly savings.",
    author: "Jennifer Lee",
    position: "CFO",
    company: "Tech Innovations Ltd.",
    logo: "/images/clients/tech-innovations.png",
    image: "/images/testimonials/jennifer-lee.png",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#133644] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Client Testimonials
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Discover what our clients have to say about their experience working with Cloud Lumen
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-[#9AD3F1]" />
                  <p className="mt-4 text-lg italic text-gray-700">"{testimonial.quote}"</p>
                  <div className="mt-6 flex items-center">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#133644]">{testimonial.author}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 h-8">
                    <Image
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={testimonial.company}
                      width={120}
                      height={40}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-[#133644]/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Trusted by Leading Companies</h2>
            <p className="mt-4 text-lg text-gray-600">
              We're proud to work with organizations across various industries
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/global-logistics.png"
                alt="Global Logistics Inc."
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/medtech-healthcare.png"
                alt="MedTech Healthcare"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/advanced-manufacturing.png"
                alt="Advanced Manufacturing Co."
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/first-capital-bank.png"
                alt="First Capital Bank"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/retail-solutions.png"
                alt="Retail Solutions Group"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/tech-innovations.png"
                alt="Tech Innovations Ltd."
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/global-finance.png"
                alt="Global Finance Corp."
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/edu-systems.png"
                alt="Educational Systems"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/green-energy.png"
                alt="Green Energy Solutions"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/smart-city.png"
                alt="Smart City Tech"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/global-media.png"
                alt="Global Media Group"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/aerospace-tech.png"
                alt="Aerospace Technologies"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Featured Case Studies</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore detailed examples of how we've helped our clients succeed
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/case-studies/healthcare-migration.png"
                  alt="Healthcare Cloud Migration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#133644]">Healthcare Provider Cloud Migration</h3>
                <p className="mt-2 text-gray-600">
                  How we helped a major healthcare provider migrate their infrastructure to the cloud while maintaining
                  HIPAA compliance.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/case-studies/financial-security.png"
                  alt="Financial Services Security"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#133644]">Financial Services Security Overhaul</h3>
                <p className="mt-2 text-gray-600">
                  Implementing a comprehensive security solution for a financial services firm to protect sensitive
                  customer data.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/case-studies/retail-optimization.png"
                  alt="Retail Cloud Optimization"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#133644]">Retail Cloud Cost Optimization</h3>
                <p className="mt-2 text-gray-600">
                  How we helped a retail chain reduce their cloud spending by 40% while improving performance and
                  reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
