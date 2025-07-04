import { Cloud, Server, Database, Shield, Settings, FileText, Code } from "lucide-react"

export interface SubService {
  id: string
  title: string
  image: string
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
        image:"/cloud.webp" ,
        description:
          "Private Clouds can be hosted in datacentre or at customer premises. We provide a choice of Private Cloud deployments on both VMware & Red Hat OpenStack/OpenShift platforms.",
      },
      {
        id: "public-cloud",
        title: "Public Cloud",
        image:"/cloud2.webp" ,
        description:
          "Public cloud offers on-demand scalability and pay-as-you-go pricing, enabling cost-effective resource management.",
      },
      {
        id: "industry-clouds",
        title: "Industry Clouds",
        image:"/cloud.webp" ,
        description:
          "Our deep industry understanding enables us to deliver elements outside the traditional features of cloud service. Industry Clouds for Financial Services, Healthcare & Government deliver value from improved productivity, security, business continuity, cost avoidance, risk mitigation and compliance specific to the industry.",
      },
      {
        id: "kubernetes-as-service",
        title: "Kubernetes as a Service",
        image:"/Kubernet.webp" ,
        description:
          "Kubernetes-as-a-Service (KaaS) is a managed solution that simplifies the deployment, scaling, and management of Kubernetes clusters by handling the underlying infrastructure and maintenance tasks. It enables teams to focus on application development while benefiting from features like automated scaling, self-healing, and seamless container orchestration.",
      },
      {
        id: "cloud-gpu",
        title: "Cloud GPU",
        image:"/GPU.jpeg" ,
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
        image:"/Service.webp" ,
        description:
          "Colocation services provide secure, reliable data center space for hosting your servers and IT infrastructure with guaranteed power, cooling, and connectivity. Benefit from enhanced uptime, physical security, and scalability without the cost of maintaining your own facility.",
      },
      {
        id: "dedicated-hosting",
        title: "Dedicated Hosting",
        image:"/Serverrig.webp" ,
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
        image:"/Backup.webp" ,
        description:
          "Our backup services provide secure, automated data protection to ensure your critical information is always recoverable in the event of data loss or disaster. Benefit from flexible retention policies, encryption, and reliable recovery options tailored to your business needs. You can backup your virtual machines, physical servers, endpoints (laptops and desktops), and Microsoft 365 data.",
      },
      {
        id: "dr-as-service",
        title: "DR as a Service",
        image:"/DR.webp" ,
        description:
          "Our Disaster Recovery (DR) services ensure business continuity by rapidly restoring systems and data during unexpected outages or disasters. With automated failover, secure replication, and minimal downtime, your critical operations stay protected and resilient.",
      },
      {
        id: "archival-storage",
        title: "Archival Storage",
        image:"/Backup.webp" ,
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
        image:"/security.webp" ,
        description:
          "Our Endpoint Control & Security services protect laptops, desktops, and mobile devices against threats with advanced monitoring, access control, and real-time threat detection. Ensure compliance, data protection, and centralized management across all endpoints in your organization.",
      },
      {
        id: "email-security",
        title: "Email Security",
        image:"/security2.webp" ,
        description:
          "Our Email Security services safeguard your communication with advanced threat protection, spam filtering, and anti-phishing measures. Ensure secure and reliable email delivery while protecting sensitive data from cyberattacks.",
      },
      {
        id: "next-gen-firewall",
        title: "Next Generation Firewall",
        image:"/cloud2.webp" ,
        description:
          "Our Next Generation Firewall (NGFW) provides advanced threat protection with deep packet inspection, intrusion prevention. It ensures secure, intelligent, and policy-driven traffic management across your network.",
      },
      {
        id: "web-app-firewall",
        title: "Web Application Firewall",
        image:"/security.webp" ,
        description:
          "Our Web Application Firewall (WAF) protects your websites and applications from cyber threats like SQL injection, cross-site scripting, and DDoS attacks. It ensures secure, reliable access by monitoring and filtering HTTP/HTTPS traffic in real time.",
      },
      {
        id: "antivirus",
        title: "Antivirus",
        image:"/security2.webp" ,
        description:
          "Our Antivirus solution offers real-time protection against viruses, malware, ransomware, and other cyber threats. It ensures endpoint security with automatic updates, threat detection, and easy centralized management.",
      },
      {
        id: "vapt",
        title: "Vulnerability Assessment and Penetration Testing (VAPT)",
        image:"/security.webp" ,
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
        image:"/cloud.webp" ,
        description:
          "Our VM management service provides management of virtual machines, ensuring high availability, performance, and security. We handles the deployment, monitoring, patching, and maintenance of VMs. This service ensures that your virtual environments are always up-to-date and running smoothly.",
      },
      {
        id: "os-management",
        title: "OS Management",
        image:"/cloud2.webp" ,
        description:
          "Our OS management service ensures that your operating systems are always up-to-date and secure. This service includes patch management and configuration management.",
      },
      {
        id: "database-management",
        title: "Database Management",
        image:"/Server.webp" ,
        description:
          "We offer database management services, including installation, configuration, and maintenance of various database management systems. This service ensures high availability, performance, and security of your databases.",
      },
      {
        id: "managed-dr",
        title: "Managed Disaster Recovery",
        image:"/Disasterrecovery.webp" ,
        description:
          "Our service includes the design and deployment of a resilient disaster recovery framework, ensuring minimal service disruption and data loss during unforeseen events. Cloud Lumen's DRaaS guarantees high availability and swift recovery, enabling your business to maintain continuity and minimize the impact of any disaster.",
      },
      {
        id: "ctem",
        title: "Threat and Exposure Management (CTEM)",
        image:"/security.webp" ,
        description:
          "Our continuous threat and exposure management service provides proactive security monitoring and threat detection. This service includes real-time monitoring, and automated threat response to protect your infrastructure from cyber threats.",
      },
      {
        id: "managed-backup",
        title: "Managed Backup",
        image:"/Backup.webp" ,
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
        image:"/Softwere.webp" ,
        description:
          "Our cloud-based HRMS platform offers a comprehensive suite of tools designed to streamline HR processes, enhance employee engagement, and ensure compliance—all accessible anytime, anywhere.",
      },
      {
        id: "crm",
        title: "Customer Relationship Management (CRM)",
        image:"/Service.webp" ,
        description:
          "Experience a transformative approach to customer relationship management with our cloud-hosted CRM platform. Designed to centralize customer data, automate sales processes, and provide actionable insights, our solution enables businesses to enhance customer engagement and drive sustainable growth.",
      },
      {
        id: "time-attendance",
        title: "Time Attendance & Asset Management",
        image:"/Service.webp" ,
        description:
          "Our cloud-based solution that enables organizations to efficiently track and manage employee working hours, attendance, and related workforce and facilitate real-time monitoring and streamlined operations.",
      },
      {
        id: "erp",
        title: "ERP Software",
        image:"/Softwere.webp" ,
        description:
          "Our cloud-based solution that integrates and automates core business processes—such as finance, supply chain, human resources, and customer relationship management—into a unified platform accessible via the internet.",
      },
      {
        id: "collaboration",
        title: "Collaboration and Communication Software",
        image:"/Softwere.webp" ,
        description:
          "Our SaaS solution provides a unified digital workspace that empowers teams to connect, collaborate, and coordinate effortlessly—in office or remote work environment. By integrating essential tools like instant messaging, video conferencing, file sharing, and project management.",
      },
      {
        id: "legal-document",
        title: "Legal and Document Management",
        image:"/Softwere.webp" ,
        description:
          "Our SaaS platform offers law firms and legal departments a centralized, cloud-based solution to efficiently handle, organize, and access legal documents and case files. By leveraging cloud technology, legal professionals can streamline document workflows, enhance team collaboration, and ensure compliance with legal standards.",
      },
    ],
  },
  {
    id: "tech-service",
    title: "Tech Service",
    icon: Code,
    description:
      "Comprehensive technology services designed to help businesses build, maintain, and secure their digital presence and infrastructure.",
    subServices: [
      {
        id: "web-development",
        title: "Web Development",
        image:"/Web_Development.webp" ,
        description:
          "Our web development services deliver custom, responsive, and high-performance websites and web applications tailored to your business needs. From simple informational sites to complex e-commerce platforms and enterprise web applications, our expert developers use cutting-edge technologies to create solutions that drive engagement and conversions.",
      },
      {
        id: "mobile-development",
        title: "Mobile Development",
        image:"/Mobile-development.png" ,
        description:
          "We create native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices. Our mobile development team focuses on building intuitive, feature-rich apps that align with your business objectives while ensuring optimal performance, security, and scalability.",
      },
      {
        id: "ai-integration",
        title: "AI Integration",
        image:"/ai-intigration.webp" ,
        description:
          "Harness the power of artificial intelligence to transform your business operations. Our AI integration services help you implement machine learning, natural language processing, computer vision, and predictive analytics solutions that automate processes, generate insights, and create new opportunities for innovation and growth.",
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity",
        image:"/Cyber-security.jpeg" ,
        description:
          "Protect your digital assets with our comprehensive cybersecurity services. We offer security assessments, penetration testing, security architecture design, and incident response planning to identify vulnerabilities, mitigate risks, and ensure your systems and data remain secure against evolving cyber threats.",
      },
      {
        id: "graphic-designing",
        title: "Graphic Designing",
        image:"/graphc-design.jpg" ,
        description:
          "Our graphic design services help you establish a strong visual identity across all digital and print media. From logo design and brand guidelines to marketing materials and UI/UX design, our creative team delivers visually compelling assets that communicate your brand message effectively and create memorable impressions.",
      },
    ],
  },
]
