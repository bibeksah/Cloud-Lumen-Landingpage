import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us - Cloud Lumen",
  description:
    "Learn about Cloud Lumen, our mission, values, and the team behind our enterprise cloud solutions and services.",
  keywords: "cloud company, IT solutions provider, enterprise technology, cloud experts, IT professionals",
}

/*const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "/images/team/sarah-johnson.png",
    bio: "Sarah has over 20 years of experience in the technology industry and has led Cloud Lumen since its founding in 2015.",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "/images/team/michael-chen.png",
    bio: "Michael brings 15 years of cloud architecture experience and oversees all technical operations and innovation at Cloud Lumen.",
  },
  {
    name: "David Rodriguez",
    role: "VP of Sales",
    image: "/images/team/david-rodriguez.png",
    bio: "David leads our global sales team with a focus on building long-term client relationships and delivering value.",
  },
  {
    name: "Priya Patel",
    role: "Director of Customer Success",
    image: "/images/team/priya-patel.png",
    bio: "Priya ensures our clients receive exceptional support and achieve their desired outcomes with our solutions.",
  },
]*/

const values = [
  {
    title: "Innovation",
    description: "We continuously explore new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    title: "Integrity",
    description: "We operate with transparency and honesty in all our client and partner relationships.",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service delivery and client interactions.",
  },
  {
    title: "Client Success",
    description: "We measure our success by the success of our clients and their business outcomes.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#133644] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">About Cloud Lumen</h1>
            <p className="mt-6 text-lg text-gray-300">
              We're on a mission to simplify the complex world of cloud technology, making it accessible and beneficial
              for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full max-w-md overflow-hidden rounded-xl sm:h-[400px]">
                <Image src="/images/full-logo.svg" alt="Cloud Lumen Team" fill className="object-contain p-4" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Our Story</h2>
              <p className="mt-6 text-lg text-gray-600">
                Founded in 2024, Cloud Lumen emerged from a vision to bridge the gap between complex cloud technologies
                and businesses seeking to leverage them. Our founders recognized that many organizations struggled to
                navigate the rapidly evolving cloud landscape and needed a trusted partner to guide them.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Today, Cloud Lumen has grown into a leading cloud solutions and software distribution firm, enabling
                smarter IT purchasing for enterprises of all sizes. We combine top-tier vendor relationships with local
                support to deliver tailored solutions that drive growth and innovation.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our team of experts brings decades of combined experience in cloud computing, cybersecurity, and
                enterprise software, ensuring that our clients receive the highest level of service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-[#133644]/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Our Mission & Vision</h2>
            <p className="mt-6 text-lg text-gray-600">
              <strong>Mission:</strong> To empower businesses with cloud technologies that drive innovation, efficiency,
              and growth, delivered with exceptional service and expertise.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              <strong>Vision:</strong> To be the most trusted partner for businesses navigating their cloud journey,
              known for our technical excellence, client-centric approach, and positive impact on organizations of all
              sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">These core principles guide everything we do at Cloud Lumen</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-2 border-gray-100 transition-all hover:border-[#9AD3F1]/50 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#133644]">{value.title}</h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/*<section className="bg-[#133644]/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Our Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600">Meet the experts behind Cloud Lumen's success</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#133644]">{member.name}</h3>
                  <p className="text-[#9AD3F1]">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Partners */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Our Partners</h2>
            <p className="mt-4 text-lg text-gray-600">
              We work with leading technology providers to deliver the best solutions for our clients
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <Image
              src="/images/partners/Redhat.webp"
              alt="Redhat"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
            <Image src="/images/partners/AWS.webp" alt="AWS" width={150} height={60} className="h-12 w-auto" />
            <Image
              src="/images/partners/Salesforce.com_logo.webp"
              alt="Salesforce"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
            <Image
              src="/images/partners/GCP.webp"
              alt="Google Cloud"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
            <Image src="/images/partners/vmware-broadcom.webp" alt="VMwere" width={150} height={60} className="h-12 w-auto" />
            <Image src="/images/partners/Zerto.webp" alt="Zerto" width={150} height={60} className="h-12 w-auto" />
            <Image src="/images/partners/veeam.webp" alt="Veeam" width={150} height={60} className="h-12 w-auto" />
            <Image src="/images/partners/CrowdStrike_logo.webp" alt="Crowdstrike" width={150} height={60} className="h-12 w-auto" />
            <Image src="/images/partners/Microsoft_Azure-Logo.webp" alt="Azure" width={150} height={60} className="h-12 w-auto" />
            <Image src="/images/partners/HubSpot_Logo.webp" alt="HubSpot" width={150} height={60} className="h-12 w-auto" />
            <Image src="/images/partners/zoho-logo-512.webp" alt="Zoho" width={150} height={60} className="h-12 w-auto" />          </div>
        </div>
      </section>
    </main>
  )
}
