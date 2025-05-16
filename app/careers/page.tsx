import Image from "next/image"
import { ArrowRight, Clock, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Careers - Cloud Lumen",
  description:
    "Join the Cloud Lumen team. Explore current job openings and learn about our company culture, benefits, and growth opportunities.",
  keywords: "cloud jobs, IT careers, technology jobs, cloud computing careers, remote IT jobs",
}

const jobOpenings = [
  {
    id: "cloud-solutions-architect",
    title: "Cloud Solutions Architect",
    department: "Technical Services",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    description:
      "Design and implement cloud solutions for our enterprise clients, focusing on AWS and Azure environments.",
    requirements: [
      "5+ years of experience in cloud architecture",
      "AWS and/or Azure certification",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Strong communication and client-facing skills",
    ],
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    department: "Security Services",
    location: "Remote",
    type: "Full-time",
    description:
      "Monitor and analyze security threats, implement security measures, and ensure compliance with security standards.",
    requirements: [
      "3+ years of experience in cybersecurity",
      "Security certifications (CISSP, CEH, or equivalent)",
      "Experience with SIEM tools and threat intelligence",
      "Knowledge of compliance frameworks (GDPR, HIPAA, etc.)",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    description:
      "Build and maintain CI/CD pipelines, automate infrastructure deployment, and optimize cloud resources.",
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Experience with containerization (Docker, Kubernetes)",
      "Proficiency in scripting languages (Python, Bash)",
      "Experience with CI/CD tools (Jenkins, GitHub Actions, etc.)",
    ],
  },
  {
    id: "account-executive",
    title: "Account Executive",
    department: "Sales",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    description:
      "Develop and maintain client relationships, identify sales opportunities, and achieve revenue targets.",
    requirements: [
      "5+ years of experience in technology sales",
      "Track record of exceeding sales targets",
      "Experience selling cloud solutions to enterprise clients",
      "Strong negotiation and presentation skills",
    ],
  },
  {
    id: "customer-success-manager",
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description:
      "Ensure client satisfaction, drive product adoption, and identify growth opportunities within existing accounts.",
    requirements: [
      "3+ years of experience in customer success or account management",
      "Experience with cloud technologies and services",
      "Strong communication and relationship-building skills",
      "Ability to understand and articulate technical concepts to non-technical stakeholders",
    ],
  },
]

const benefits = [
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries and equity packages to attract and retain top talent.",
  },
  {
    title: "Comprehensive Healthcare",
    description: "Full medical, dental, and vision coverage for employees and their dependents.",
  },
  {
    title: "Flexible Work Arrangements",
    description: "Remote and hybrid work options to support work-life balance.",
  },
  {
    title: "Professional Development",
    description: "Budget for conferences, courses, and certifications to support your growth.",
  },
  {
    title: "Generous PTO",
    description: "Flexible paid time off policy, plus paid holidays and volunteer days.",
  },
  {
    title: "Retirement Benefits",
    description: "401(k) plan with company matching to help you save for the future.",
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#133644] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Join Our Team</h1>
              <p className="mt-6 text-lg text-gray-300">
                At Cloud Lumen, we're building the future of cloud technology. Join us in our mission to empower
                businesses with innovative cloud solutions.
              </p>
              <div className="mt-8">
                <Button className="bg-[#9AD3F1] text-[#133644] hover:bg-[#9AD3F1]/90">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full max-w-lg overflow-hidden rounded-xl sm:h-[400px]">
                <Image src="/images/careers-team.png" alt="Cloud Lumen Team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Our Culture</h2>
            <p className="mt-4 text-lg text-gray-600">
              We foster a collaborative, innovative, and inclusive environment where everyone can thrive
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/culture-collaboration.png"
                alt="Team Collaboration"
                width={400}
                height={300}
                className="h-auto w-full"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#133644]">Collaboration</h3>
                <p className="mt-2 text-gray-600">
                  We believe in the power of teamwork and cross-functional collaboration to solve complex problems.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/culture-innovation.png"
                alt="Innovation"
                width={400}
                height={300}
                className="h-auto w-full"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#133644]">Innovation</h3>
                <p className="mt-2 text-gray-600">
                  We encourage creative thinking and embrace new technologies to stay at the forefront of the industry.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/culture-diversity.png"
                alt="Diversity and Inclusion"
                width={400}
                height={300}
                className="h-auto w-full"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#133644]">Diversity & Inclusion</h3>
                <p className="mt-2 text-gray-600">
                  We value diverse perspectives and create an inclusive environment where everyone feels welcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#133644]/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Benefits & Perks</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer competitive benefits to support our team members' well-being and growth
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="border-2 border-gray-100 transition-all hover:border-[#9AD3F1]/50 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#133644]">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Open Positions</h2>
            <p className="mt-4 text-lg text-gray-600">Join our team and help shape the future of cloud technology</p>
          </div>
          <div className="mt-12 space-y-8">
            {jobOpenings.map((job) => (
              <Card
                key={job.id}
                className="overflow-hidden border-2 border-gray-100 transition-all hover:border-[#9AD3F1]/50 hover:shadow-md"
              >
                <CardHeader className="bg-[#133644]/5 p-6">
                  <CardTitle className="text-xl font-bold text-[#133644]">{job.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-wrap gap-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="mr-1 h-4 w-4 text-[#9AD3F1]" />
                      {job.department}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="mr-1 h-4 w-4 text-[#9AD3F1]" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="mr-1 h-4 w-4 text-[#9AD3F1]" />
                      {job.type}
                    </div>
                  </div>
                  <p className="text-gray-700">{job.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-[#133644]">Requirements:</h4>
                    <ul className="mt-2 space-y-1">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start text-gray-600">
                          <span className="mr-2 text-[#9AD3F1]">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button className="bg-[#133644] hover:bg-[#133644]/90">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-[#133644]/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Our Application Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              We've designed a straightforward process to help you find your place at Cloud Lumen
            </p>
          </div>
          <div className="mt-12">
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#9AD3F1]"></div>
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9AD3F1] text-[#133644]">
                    1
                  </div>
                  <div className="ml-12 pt-4">
                    <h3 className="text-xl font-bold text-[#133644]">Application Review</h3>
                    <p className="mt-2 text-gray-600">
                      Our recruiting team reviews your application and resume to assess your qualifications.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9AD3F1] text-[#133644]">
                    2
                  </div>
                  <div className="ml-12 pt-4">
                    <h3 className="text-xl font-bold text-[#133644]">Initial Interview</h3>
                    <p className="mt-2 text-gray-600">
                      A phone or video interview with a recruiter to discuss your background and interest in the role.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9AD3F1] text-[#133644]">
                    3
                  </div>
                  <div className="ml-12 pt-4">
                    <h3 className="text-xl font-bold text-[#133644]">Technical Assessment</h3>
                    <p className="mt-2 text-gray-600">
                      Depending on the role, you may be asked to complete a technical assessment or case study.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9AD3F1] text-[#133644]">
                    4
                  </div>
                  <div className="ml-12 pt-4">
                    <h3 className="text-xl font-bold text-[#133644]">Team Interviews</h3>
                    <p className="mt-2 text-gray-600">
                      Meet with potential team members and leaders to assess technical skills and cultural fit.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9AD3F1] text-[#133644]">
                    5
                  </div>
                  <div className="ml-12 pt-4">
                    <h3 className="text-xl font-bold text-[#133644]">Offer & Onboarding</h3>
                    <p className="mt-2 text-gray-600">
                      If selected, you'll receive an offer and begin our comprehensive onboarding process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
