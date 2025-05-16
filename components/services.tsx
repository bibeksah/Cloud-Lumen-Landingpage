import { Cloud, Server, Shield, Database, Settings, FileText, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Cloud Computing",
    icon: Cloud,
    items: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Kubernetes as a Service", "Cloud GPU"],
  },
  {
    title: "Data Center as a Service",
    icon: Server,
    items: ["Colocation", "Dedicated Hosting"],
  },
  {
    title: "Disaster Recovery and Backup",
    icon: Database,
    items: ["Backup as a Service", "DR as a Service", "Archival Storage"],
  },
  {
    title: "Security as a Service",
    icon: Shield,
    items: [
      "Endpoint Control & Security",
      "Email & Web Security",
      "Next Generation Firewall",
      "Web Application Firewall",
      "Antivirus",
      "Vulnerability Assessment and Penetration Testing (VAPT)",
    ],
  },
  {
    title: "Managed Services",
    icon: Settings,
    items: [
      "VM Management",
      "OS Management",
      "Database Management",
      "Managed Disaster Recovery",
      "Threat and Exposure Management (CTEM)",
      "Managed Backup",
    ],
  },
  {
    title: "Software Solutions",
    icon: FileText,
    items: [
      "HRMS",
      "Customer Relationship Management (CRM)",
      "Time Attendance & Asset Management",
      "ERP Software",
      "Collaboration and Communication Software",
      "Legal & Document Management",
    ],
  },
  {
    title: "Tech Service",
    icon: Code,
    items: ["Web Development", "Mobile Development", "AI Integration", "Cybersecurity", "Graphic Designing"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#133644] dark:text-white sm:text-4xl">
            Solutions We Sell
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Comprehensive cloud and software solutions tailored to your business needs
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-2 border-gray-100 transition-all hover:border-[#9AD3F1]/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#133644]/10 dark:bg-[#7BBFE6]/20">
                  <service.icon className="h-6 w-6 text-[#133644] dark:text-[#7BBFE6]" />
                </div>
                <CardTitle className="text-xl font-bold text-[#133644] dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-800 dark:text-gray-200">
                      <span className="mr-2 text-[#9AD3F1] dark:text-[#7BBFE6]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
