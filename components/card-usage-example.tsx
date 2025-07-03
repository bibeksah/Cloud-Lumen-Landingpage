import { EnhancedCard } from "./enhanced-card"

export default function CardExample() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <EnhancedCard title="Cloud Computing" learnMoreUrl="/services/cloud-computing">
        <p>Private, public, and hybrid cloud solutions to meet your business needs.</p>
      </EnhancedCard>

      <EnhancedCard title="Data Center Services" learnMoreUrl="/services/data-center" learnMoreText="View Details">
        <p>Reliable infrastructure ensuring your critical systems and data are always available.</p>
      </EnhancedCard>

      <EnhancedCard
        title="Security Services"
        learnMoreUrl="/services/security"
        footerContent={<span className="text-sm text-gray-500">Premium service</span>}
      >
        <p>Comprehensive protection against evolving cyber threats, safeguarding your data.</p>
      </EnhancedCard>
    </div>
  )
}
