import { CheckCircle } from "lucide-react"

const reasons = [
  "Official Partner for Microsoft, AWS, Salesforce, and more",
  "Dedicated Account Managers and Pre-Sales Architects",
  "Local Support, Global Standards",
  "Flexible Billing & Financing Options",
  "ISO & GDPR-Compliant Operations",
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#133644] py-16 dark:bg-gray-800 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose Cloud Lumen?</h2>
          <p className="mt-4 text-lg text-gray-100">We deliver enterprise-grade solutions with personalized service</p>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <ul className="space-y-6">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start">
                <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-[#9AD3F1] dark:text-[#7BBFE6]" />
                <span className="text-lg text-white font-medium">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
