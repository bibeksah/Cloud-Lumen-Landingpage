import { Cloud, Server, Database, Shield, Settings, FileText } from "lucide-react"

export interface SubService {
  id: string
  title: string
  description: string
}

export interface Service {
  id: string
  title: string
  icon: any
  description: string
  subServices: SubService[]
}

export const servicesData: Service[] = [
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    icon: Cloud,
    description:
      "Comprehensive cloud computing solutions designed to enhance scalability, flexibility, and efficiency for your business.",
    subServices: [
      {
        id: "private-cloud",
        title: "Private Cloud",
        description:
          "Private Clouds can be hosted in datacentre or at customer premises. We provide a choice of Private Cloud deployments on both VMware & Red Hat OpenStack/OpenShift platforms.",
      },
      {
        id: "public-cloud",
        title: "Public Cloud",
        description:
          "Public cloud offers on-demand scalability and pay-as-you-go pricing, enabling cost-effective resource management.",
      },
      {
        id: "industry-clouds",
        title: "Industry Clouds",
        description:
          "Our deep industry understanding enables us to deliver elements outside the traditional features of cloud service. Industry Clouds for Financial Services, Healthcare & Government deliver value from improved productivity, security, business continuity, cost avoidance, risk mitigation and compliance specific to the industry.",
      },
      {
        id: "kubernetes-as-service",
        title: "Kubernetes as a Service",
        description:
          "Kubernetes-as-a-Service (KaaS) is a managed solution that simplifies the deployment, scaling, and management of Kubernetes clusters by handling the underlying infrastructure and maintenance tasks. It enables teams to focus on application development while benefiting from features like automated scaling, self-healing, and seamless container orchestration.",
      },
      {
        id: "cloud-gpu",
        title: "Cloud GPU",
        description:
          "Empower your business with on-demand access to high-performance GPUs, eliminating the need for costly hardware investments. Our GPUaaS solution is crafted to meet the demands of AI, machine learning, data analytics, rendering, and other compute-intensive tasks, ensuring scalability, flexibility, and cost-efficiency.",
      },
    ],
  },
  {
    id: "data-center",
    title: "Data Center as a Service",
    icon: Server,
    description:
      "Reliable infrastructure solutions ensuring your critical systems and data are always available and secure.",
    subServices: [
      {
        id: "colocation",
        title: "Colocation",
        description:
          "Colocation services provide secure, reliable data center space for hosting your servers and IT infrastructure with guaranteed power, cooling, and connectivity. Benefit from enhanced uptime, physical security, and scalability without the cost of maintaining your own facility.",
      },
      {
        id: "dedicated-hosting",
        title: "Dedicated Hosting",
        description:
          "Dedicated hosting services offer exclusive use of physical servers, ensuring maximum performance, security, and customization for your business needs. Ideal for high-traffic websites and mission-critical applications requiring full control and reliability.",
      },
    ],
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery and Backup",
    icon: Database,
    description:
      "Comprehensive disaster recovery and backup solutions that ensure business continuity in any scenario.",
    subServices: [
      {
        id: "backup-as-service",
        title: "Backup as a Service",
        description:
          "Our backup services provide secure, automated data protection to ensure your critical information is always recoverable in the event of data loss or disaster. Benefit from flexible retention policies, encryption, and reliable recovery options tailored to your business needs. You can backup your virtual machines, physical servers, endpoints (laptops and desktops), and Microsoft 365 data.",
      },
      {
        id: "dr-as-service",
        title: "DR as a Service",
        description:
          "Our Disaster Recovery (DR) services ensure business continuity by rapidly restoring systems and data during unexpected outages or disasters. With automated failover, secure replication, and minimal downtime, your critical operations stay protected and resilient.",
      },
      {
        id: "archival-storage",
        title: "Archival Storage",
        description:
          "We offer backup to archival storage solutions, providing long-term data retention and compliance. This service ensures that your data is securely stored and easily accessible when needed.",
      },
    ],
  },
  {
    id: "security",
    title: "Security as a Service",
    icon: Shield,
    description: "Comprehensive protection against evolving cyber threats, safeguarding your data and systems.",
    subServices: [
      {
        id: "endpoint-security",
        title: "Endpoint Control & Security",
        description:
          "Our Endpoint Control & Security services protect laptops, desktops, and mobile devices against threats with advanced monitoring, access control, and real-time threat detection. Ensure compliance, data protection, and centralized management across all endpoints in your organization.",
      },
      {
        id: "email-security",
        title: "Email Security",
        description:
          "Our Email Security services safeguard your communication with advanced threat protection, spam filtering, and anti-phishing measures. Ensure secure and reliable email delivery while protecting sensitive data from cyberattacks.",
      },
      {
        id: "next-gen-firewall",
        title: "Next Generation Firewall",
        description:
          "Our Next Generation Firewall (NGFW) provides advanced threat protection with deep packet inspection, intrusion prevention. It ensures secure, intelligent, and policy-driven traffic management across your network.",
      },
      {
        id: "web-app-firewall",
        title: "Web Application Firewall",
        description:
          "Our Web Application Firewall (WAF) protects your websites and applications from cyber threats like SQL injection, cross-site scripting, and DDoS attacks. It ensures secure, reliable access by monitoring and filtering HTTP/HTTPS traffic in real time.",
      },
      {
        id: "antivirus",
        title: "Antivirus",
        description:
          "Our Antivirus solution offers real-time protection against viruses, malware, ransomware, and other cyber threats. It ensures endpoint security with automatic updates, threat detection, and easy centralized management.",
      },
      {
        id: "vapt",
        title: "Vulnerability Assessment and Penetration Testing (VAPT)",
        description:
          "Our Vulnerability Assessment and Penetration Testing (VAPT) services identify security weaknesses and simulate real-world attacks to evaluate your system's resilience. Gain actionable insights and ensure compliance with industry security standards.",
      },
    ],
  },
  {
    id: "managed-services",
    title: "Managed Services",
    icon: Settings,
    description:
      "Our managed services take the burden of IT management off your shoulders, allowing you to focus on your core business.",
    subServices: [
      {
        id: "vm-management",
        title: "VM Management",
        description:
          "Our VM management service provides management of virtual machines, ensuring high availability, performance, and security. We handles the deployment, monitoring, patching, and maintenance of VMs. This service ensures that your virtual environments are always up-to-date and running smoothly.",
      },
      {
        id: "os-management",
        title: "OS Management",
        description:
          "Our OS management service ensures that your operating systems are always up-to-date and secure. This service includes patch management and configuration management.",
      },
      {
        id: "database-management",
        title: "Database Management",
        description:
          "We offer database management services, including installation, configuration, and maintenance of various database management systems. This service ensures high availability, performance, and security of your databases.",
      },
      {
        id: "managed-dr",
        title: "Managed Disaster Recovery",
        description:
          "Our service includes the design and deployment of a resilient disaster recovery framework, ensuring minimal service disruption and data loss during unforeseen events. Cloud Lumen's DRaaS guarantees high availability and swift recovery, enabling your business to maintain continuity and minimize the impact of any disaster.",
      },
      {
        id: "ctem",
        title: "Threat and Exposure Management (CTEM)",
        description:
          "Our continuous threat and exposure management service provides proactive security monitoring and threat detection. This service includes real-time monitoring, and automated threat response to protect your infrastructure from cyber threats.",
      },
      {
        id: "managed-backup",
        title: "Managed Backup",
        description:
          "Our managed backup service, provides reliable and secure data protection solutions. We handle the maintenance of backup solutions. This ensures that your critical data is always protected and recoverable in case of any disaster.",
      },
    ],
  },
  {
    id: "software-solutions",
    title: "Software Solutions",
    icon: FileText,
    description:
      "We offer a range of software solutions designed to streamline your business processes and enhance productivity.",
    subServices: [
      {
        id: "hrms",
        title: "HRMS",
        description:
          "Our cloud-based HRMS platform offers a comprehensive suite of tools designed to streamline HR processes, enhance employee engagement, and ensure compliance—all accessible anytime, anywhere.",
      },
      {
        id: "crm",
        title: "Customer Relationship Management (CRM)",
        description:
          "Experience a transformative approach to customer relationship management with our cloud-hosted CRM platform. Designed to centralize customer data, automate sales processes, and provide actionable insights, our solution enables businesses to enhance customer engagement and drive sustainable growth.",
      },
      {
        id: "time-attendance",
        title: "Time Attendance & Asset Management",
        description:
          "Our cloud-based solution that enables organizations to efficiently track and manage employee working hours, attendance, and related workforce and facilitate real-time monitoring and streamlined operations.",
      },
      {
        id: "erp",
        title: "ERP Software",
        description:
          "Our cloud-based solution that integrates and automates core business processes—such as finance, supply chain, human resources, and customer relationship management—into a unified platform accessible via the internet.",
      },
      {
        id: "collaboration",
        title: "Collaboration and Communication Software",
        description:
          "Our SaaS solution provides a unified digital workspace that empowers teams to connect, collaborate, and coordinate effortlessly—in office or remote work environment. By integrating essential tools like instant messaging, video conferencing, file sharing, and project management.",
      },
      {
        id: "legal-document",
        title: "Legal and Document Management",
        description:
          "Our SaaS platform offers law firms and legal departments a centralized, cloud-based solution to efficiently handle, organize, and access legal documents and case files. By leveraging cloud technology, legal professionals can streamline document workflows, enhance team collaboration, and ensure compliance with legal standards.",
      },
    ],
  },
]
