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
    quote: "Cloud Lumen provided us with a robust and scalable cloud environment tailored to our business. The performance, uptime, and security have exceeded expectations. It's like having an extended IT team that’s always available.",
    author: "Akash Wakode",
    position: "IT Head",
    company: "Uplift Systems",
    logo: "/images/clients/Uplift.webp",
  },
  {
    quote: "Migrating to the cloud felt overwhelming, but Cloud Lumen made it effortless. Their team helped us plan, execute, and optimize the transition. Our applications now run faster, and our costs are better controlled. Excellent support and true technical expertise!",
    author: "Akshay Bhatia",
    position: "Managing Director",
    company: "Armature Constructions",
    logo: "/images/clients/ARmature.webp",
  },
    {
    quote: "Partnering with Cloud Lumen was a game-changer for our cloud transformation. Their team quickly understood our requirements and delivered a secure, scalable cloud architecture that has significantly improved our performance and uptime. Their support has been prompt and proactive every step of the way.",
    author: "Ravi Pawar",
    position: "Founder",
    company: " Infracoat Integrated Systems",
    logo: "/images/clients/infracot.webp",
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
                  <Quote className="h-8 w-10 text-[#9AD3F1]" />
                  <p className="mt-4 text-lg italic text-gray-700">"{testimonial.quote}"</p>
                  <div className="mt-6">
                    <div className="">
                      <h3 className="font-semibold text-[#133644]">{testimonial.author}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex item-center justify-center mt-6 h-24">
                    <Image
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={testimonial.company}
                      width={240}
                      height={80}
                      className="flex item-center justify-center rounded-full bg-white p-2 h-24 w-auto object-contain"
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
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 ">
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/ARmature.webp"
                alt="Armature Constructions."
                width={360}
                height={120}
                className="h-36 w-auto  rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/Uplift.webp"
                alt="Uplift Systems"
                width={360}
                height={120}
                className="h-36 w-auto  rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/clients/infracot.webp"
                alt="Infracaot"
                width={360}
                height={120}
                className="h-36 w-auto  rounded-lg"
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
                  src="/images/case-studies/retail-optimization.png"
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
                  src="/images/case-studies/healthcare-migration.png"
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
