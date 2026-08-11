import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  BadgeCheck,
  Award,
  Lightbulb,
  Handshake,
  HeartHandshake,
  GraduationCap,
  ClipboardList,
  Cctv,
  UserCheck,
  Factory,
  Landmark,
  Building2,
  Pill,
  Cog,
  BedDouble,
  HeartPulse,
  School,
  Globe,
  Zap,
  Radio,
  Warehouse,
  Shirt,
  Users,
  KeyRound,
  Siren,
  ShieldAlert,
  Target,
  FileText,
  ScanEye,
  ClipboardCheck,
  BookOpen,
  FireExtinguisher,
  Compass,
  FileSearch,
  Boxes,
  UserSearch,
  Briefcase,
  Banknote,
  Lock,
} from "lucide-react";

export const siteConfig = {
  name: "VERTEX SECURITY SOLUTIONS",
  shortName: "VERTEX",
  tagline: "Security Training • Risk Consultancy • Security Technology",
  slogan: "Protecting People • Assets • Reputation",
  brandPromise: "We don't provide security—we enhance security capabilities.",
  description:
    "Vertex Security Solutions is a Bangladesh-based Security Training, Risk Consultancy, and Security Technology firm dedicated to helping organizations protect their people, assets, operations, information, and reputation.",
  url: "https://vertexsecuritysolutions.com",
};

export const contactInfo = {
  name: "Major Khalil Ahmed Khan",
  credentials: "psc, MDS, MBA, SRMP-C (Retd)",
  title: "Founder & Principal Security Consultant",
  email: "khalilak@gmail.com",
  phone: "+880 1977-277476",
  phoneHref: "+8801977277476",
  location: "Dhaka, Bangladesh",
};

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "RMG Solutions", href: "/rmg-solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const trustBadges: string[] = [
  "Bangladesh Army",
  "UN Peacekeeping Missions",
  "U.S. Embassy, Dhaka",
  "G4S Bangladesh",
];

export const vision =
  "To become Bangladesh's most trusted provider of professional security training, risk consultancy, and integrated security solutions, recognized for excellence, integrity, innovation, and client-focused service.";

export const mission =
  "To help organizations create safer, more secure, and resilient workplaces by delivering practical security training, professional consultancy, and technology-enabled security solutions that protect people, assets, and reputation.";

export const companyStory = [
  "Vertex Security Solutions is a professional Security Training, Risk Consultancy, and Security Technology firm dedicated to helping organizations protect their people, assets, operations, information, and reputation through integrated, risk-based security solutions.",
  "We partner with clients to develop capable security personnel, strengthen security systems, improve regulatory compliance, enhance emergency preparedness, and build resilient organizations capable of operating safely in an increasingly complex security environment.",
  "Unlike conventional security companies, Vertex does not provide security services — we enhance security capabilities through professional training, strategic consultancy, and practical solutions tailored to each client's operational and organizational needs.",
  "Our approach combines international best practices with extensive operational experience gained from the Bangladesh Army, United Nations Peacekeeping Missions, the U.S. Embassy in Dhaka, and senior leadership roles in one of the world's leading security organizations.",
];

export const coreValues: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Integrity",
    description: "We act honestly and ethically in every engagement, earning trust through consistency.",
    icon: ShieldCheck,
  },
  {
    title: "Professionalism",
    description: "Disciplined, structured, and precise delivery in training, consultancy, and technology.",
    icon: BadgeCheck,
  },
  {
    title: "Excellence",
    description: "We hold ourselves to internationally recognized standards on every assignment.",
    icon: Award,
  },
  {
    title: "Innovation",
    description: "We adapt best practices and modern technology to local operational realities.",
    icon: Lightbulb,
  },
  {
    title: "Partnership",
    description: "We work alongside clients as long-term partners, not one-off vendors.",
    icon: Handshake,
  },
  {
    title: "Service",
    description: "Client-focused delivery, tailored to each organization's risk profile and goals.",
    icon: HeartHandshake,
  },
];

export const secure360Steps: { step: number; title: string; description: string }[] = [
  {
    step: 1,
    title: "Assess",
    description: "Evaluate current security posture, personnel, systems, and operational context.",
  },
  {
    step: 2,
    title: "Analyze",
    description: "Identify vulnerabilities, threats, and risk exposure across people, assets, and operations.",
  },
  {
    step: 3,
    title: "Design",
    description: "Develop a tailored security strategy, structure, and set of recommendations.",
  },
  {
    step: 4,
    title: "Train",
    description: "Build the capability of personnel through competency-based training programmes.",
  },
  {
    step: 5,
    title: "Implement",
    description: "Deploy the solution — policies, procedures, technology, and trained personnel.",
  },
  {
    step: 6,
    title: "Review & Improve",
    description: "Monitor outcomes and continuously refine for lasting, measurable resilience.",
  },
];

export type ServiceCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "security-training",
    title: "Professional Security Training",
    shortTitle: "Training",
    icon: GraduationCap,
    summary:
      "Competency-based training programmes designed to develop professional, confident, and disciplined security personnel at every organizational level.",
    items: [
      "Basic Security Guard Training",
      "Female Guard Training",
      "Security Supervisor Development",
      "Security In-Charge Programme",
      "Security Management Programme",
      "Executive Protection",
      "Close Protection Officer (CPO)",
      "Event Security",
      "Travel Security",
      "Customer Service for Security Personnel",
      "CCTV Monitoring & Surveillance",
      "Access Control Management",
      "Patrolling Techniques",
      "Security Report Writing",
      "Incident Investigation",
      "Emergency Response",
      "Fire Safety & Fire Fighting",
      "First Aid",
      "Security Awareness",
      "Refresher Training",
      "Customized Client-Specific Programmes",
    ],
  },
  {
    slug: "risk-consultancy",
    title: "Security Risk Consultancy",
    shortTitle: "Risk Consultancy",
    icon: ClipboardList,
    summary:
      "Consultancy services that help organizations identify vulnerabilities, reduce risks, strengthen compliance, and improve operational resilience.",
    items: [
      "Security Risk Assessment",
      "Threat Assessment",
      "Vulnerability Assessment",
      "Physical Security Survey",
      "Security Audit",
      "Security Master Planning",
      "Standard Operating Procedures (SOP) Development",
      "Security Policy Development",
      "Crisis Management Planning",
      "Business Continuity Planning",
      "Incident Investigation",
      "Corporate Security Advisory",
    ],
  },
  {
    slug: "security-technology",
    title: "Security Technology",
    shortTitle: "Security Technology",
    icon: Cctv,
    summary:
      "Independent advisory services for modern security technology — from CCTV and access control to fully integrated command centres.",
    items: [
      "CCTV Systems",
      "Access Control Systems",
      "Intrusion Alarm Systems",
      "Visitor Management Systems",
      "Perimeter Security",
      "Biometric Systems",
      "Security Command & Control Centres",
      "Integrated Security Solutions",
    ],
  },
  {
    slug: "executive-protection",
    title: "Executive Protection",
    shortTitle: "Executive Protection",
    icon: UserCheck,
    summary:
      "Professional consultancy and specialized training in close protection, VIP security, and travel security operations.",
    items: [
      "Executive Protection",
      "Close Protection Operations",
      "VIP Security",
      "Residential Security",
      "Travel Security",
      "Protective Advance Planning",
      "Route Planning",
      "Event Security",
    ],
  },
  {
    slug: "background-screening",
    title: "Background Screening",
    shortTitle: "Background Screening",
    icon: UserSearch,
    summary:
      "Due-diligence screening services that help organizations verify candidates, vendors, and partners before extending trust.",
    items: [
      "Pre-Employment Background Checks",
      "Reference Verification",
      "Employment History Verification",
      "Criminal Record Verification",
      "Education & Credential Verification",
      "Address & Identity Verification",
      "Vendor & Contractor Vetting",
      "Ongoing Employee Screening",
    ],
  },
];

export const serviceInterestOptions: string[] = [
  "Professional Security Training",
  "Security Risk Consultancy",
  "Security Technology",
  "Executive Protection",
  "Background Screening",
  "RMG Security Solutions",
  "General Inquiry",
];

export type RmgService = { title: string; description: string; icon: LucideIcon };

export const rmgServices: RmgService[] = [
  {
    title: "C-TPAT Security Awareness",
    description: "Training aligned to C-TPAT supply chain security requirements for buyers and auditors.",
    icon: ShieldCheck,
  },
  {
    title: "Supply Chain Security",
    description: "End-to-end security controls protecting goods from factory floor to port of export.",
    icon: Boxes,
  },
  {
    title: "Factory Security Assessment",
    description: "Structured evaluation of physical security, procedures, and compliance gaps.",
    icon: FileSearch,
  },
  {
    title: "Visitor & Contractor Management",
    description: "Controlled entry procedures and documentation for visitors, buyers, and contractors.",
    icon: ClipboardCheck,
  },
  {
    title: "Cargo & Container Security",
    description: "Seal integrity, container inspection, and loading-bay controls to prevent tampering.",
    icon: Warehouse,
  },
  {
    title: "Access Control Systems",
    description: "Card, biometric, and turnstile access solutions for production floors and stores.",
    icon: KeyRound,
  },
  {
    title: "Security Compliance Training",
    description: "Programmes mapped to buyer compliance codes and international audit standards.",
    icon: BookOpen,
  },
  {
    title: "Emergency Response Planning",
    description: "Evacuation planning and drills for fire, civil unrest, and other factory emergencies.",
    icon: Siren,
  },
  {
    title: "Fire Safety Management",
    description: "Fire prevention systems, fire-fighting training, and readiness aligned to BNBC requirements.",
    icon: FireExtinguisher,
  },
  {
    title: "Workplace Violence Prevention",
    description: "Policies and training to identify, de-escalate, and prevent workplace violence.",
    icon: ShieldAlert,
  },
  {
    title: "Insider Threat Awareness",
    description: "Training to recognize and mitigate internal security and theft risks.",
    icon: ScanEye,
  },
  {
    title: "Incident Reporting & Investigation",
    description: "Structured reporting and root-cause investigation processes for security incidents.",
    icon: FileText,
  },
];

export type Industry = { name: string; icon: LucideIcon };

export const industries: Industry[] = [
  { name: "Ready-Made Garments (RMG)", icon: Shirt },
  { name: "Textile & Composite Mills", icon: Factory },
  { name: "Banks & Financial Institutions", icon: Landmark },
  { name: "Multinational Companies", icon: Building2 },
  { name: "Pharmaceuticals", icon: Pill },
  { name: "Manufacturing Industries", icon: Cog },
  { name: "Hotels & Hospitality", icon: BedDouble },
  { name: "Hospitals & Healthcare", icon: HeartPulse },
  { name: "Educational Institutions", icon: School },
  { name: "Embassies & Diplomatic Missions", icon: Globe },
  { name: "NGOs & International Organizations", icon: Users },
  { name: "Power & Energy", icon: Zap },
  { name: "Telecommunications", icon: Radio },
  { name: "Logistics & Warehousing", icon: Warehouse },
  { name: "Corporate Offices", icon: Building2 },
];

export type TimelineEntry = {
  order: string;
  role: string;
  organization: string;
  description: string;
};

export const careerTimeline: TimelineEntry[] = [
  {
    order: "01",
    role: "Commissioned Officer",
    organization: "Bangladesh Army",
    description:
      "Built a foundation in leadership, discipline, operations, and administration across a distinguished military career.",
  },
  {
    order: "02",
    role: "Peacekeeping Deployments",
    organization: "United Nations Peacekeeping Missions",
    description:
      "Served on UN Peacekeeping Missions, gaining international operational experience in high-risk environments.",
  },
  {
    order: "03",
    role: "Mission Security Manager",
    organization: "U.S. Embassy, Dhaka",
    description:
      "Managed mission security operations for the U.S. Embassy in Dhaka, applying diplomatic-grade security standards.",
  },
  {
    order: "04",
    role: "AVP Country Operations & AVP Regional Operations",
    organization: "G4S Bangladesh",
    description:
      "Led country and regional security operations for one of the world's largest security services organizations.",
  },
  {
    order: "05",
    role: "VP & Head of Recruitment & Training",
    organization: "G4S Bangladesh",
    description:
      "Directed recruitment and training strategy, curriculum design, and delivery of professional training programmes.",
  },
  {
    order: "06",
    role: "SVP & Head of Cash Services",
    organization: "G4S Bangladesh",
    description:
      "Held senior leadership oversight of cash services operations across the organization.",
  },
  {
    order: "07",
    role: "SVP & Head of Internal Security",
    organization: "G4S Bangladesh",
    description:
      "Held senior leadership oversight of internal security across the organization.",
  },
  {
    order: "08",
    role: "Founder & Principal Security Consultant",
    organization: "Vertex Security Solutions",
    description:
      "Founded Vertex to bring 42+ years of military, diplomatic, and corporate security leadership to Bangladeshi organizations.",
  },
];

export const whyVertexPoints: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Leadership",
    description: "Our leadership brings more than four decades of security knowledge in military, diplomatic, corporate and different industries security management.",
    icon: Target,
  },
  {
    title: "Practical Experience",
    description:
      "Built on operational leadership in the Bangladesh Army, UN Peacekeeping Missions, the U.S. Embassy Dhaka, and senior management at G4S Bangladesh.",
    icon: Compass,
  },
  {
    title: "Client-Focused Solutions",
    description: "Every engagement is tailored to the client's business, operational environment, industry requirements, and risk profile.",
    icon: Handshake,
  },
  {
    title: "Professional Standards",
    description: "We promote internationally recognized security management principles, adapted to local operational realities.",
    icon: BadgeCheck,
  },
];

export const homepageServiceCards: {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    slug: "security-training",
    title: "Professional Security Training",
    description: "Competency-based programmes that develop professional, disciplined security personnel.",
    icon: GraduationCap,
  },
  {
    slug: "risk-consultancy",
    title: "Risk Consultancy",
    description: "Assessments, audits, and planning that reduce risk and strengthen compliance.",
    icon: ClipboardList,
  },
  {
    slug: "security-technology",
    title: "Security Technology",
    description: "Independent advisory on CCTV, access control, and integrated security systems.",
    icon: Cctv,
  },
  {
    slug: "executive-protection",
    title: "Executive Protection",
    description: "Close protection, VIP security, and travel security planning and training.",
    icon: UserCheck,
  },
];

export type SolutionLink = {
  slug: string;
  name: string;
  icon: LucideIcon;
  href: string;
  blurb: string;
};

export const ourSolutions: SolutionLink[] = [
  {
    slug: "rmg",
    name: "Ready-Made Garments (RMG)",
    icon: Shirt,
    href: "/rmg-solutions",
    blurb: "Compliance-driven security for factories and exporters.",
  },
  {
    slug: "banking",
    name: "Banks & Financial Institutions",
    icon: Landmark,
    href: "/solutions/banking",
    blurb: "Cash, branch, and fraud-aware security programmes.",
  },
  {
    slug: "multinational",
    name: "Multinational Companies",
    icon: Building2,
    href: "/solutions/multinational",
    blurb: "Corporate-grade security aligned to global standards.",
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    icon: Pill,
    href: "/solutions/pharmaceuticals",
    blurb: "Facility, product, and regulatory compliance security.",
  },
  {
    slug: "healthcare",
    name: "Hospitals & Healthcare",
    icon: HeartPulse,
    href: "/solutions/healthcare",
    blurb: "Patient, staff, and facility safety programmes.",
  },
  {
    slug: "education",
    name: "Educational Institutions",
    icon: School,
    href: "/solutions/education",
    blurb: "Safer campuses through training and access control.",
  },
  {
    slug: "embassies",
    name: "Embassies & Diplomatic Missions",
    icon: Globe,
    href: "/solutions/embassies",
    blurb: "Diplomatic-grade protection and screening.",
  },
  {
    slug: "ngo",
    name: "NGOs & International Organizations",
    icon: Users,
    href: "/solutions/ngo",
    blurb: "Duty-of-care security for staff and field operations.",
  },
  {
    slug: "energy",
    name: "Power & Energy",
    icon: Zap,
    href: "/solutions/energy",
    blurb: "Critical infrastructure and site protection.",
  },
  {
    slug: "corporate",
    name: "Corporate Offices",
    icon: Briefcase,
    href: "/solutions/corporate",
    blurb: "Right-sized security for modern workplaces.",
  },
];

export type IndustrySolution = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  services: RmgService[];
};

export const industrySolutions: IndustrySolution[] = [
  {
    slug: "banking",
    name: "Banks & Financial Institutions",
    icon: Landmark,
    tagline: "Banking & Financial Security",
    description:
      "Vertex helps banks and financial institutions protect cash, branches, and customers with security programmes built for the realities of the financial sector.",
    services: [
      {
        title: "Cash-in-Transit Security",
        description: "Secure protocols and escort procedures for the safe movement of cash between branches and vaults.",
        icon: Banknote,
      },
      {
        title: "Branch Security Assessment",
        description: "Structured evaluation of physical security controls across branch networks and ATMs.",
        icon: ClipboardList,
      },
      {
        title: "Vault & Cash Security Systems",
        description: "Advisory on vault construction standards, safes, and cash-handling security systems.",
        icon: Lock,
      },
      {
        title: "Robbery Prevention & Response Training",
        description: "Training staff to recognize threats, respond safely, and minimize risk during robbery incidents.",
        icon: ShieldAlert,
      },
      {
        title: "Fraud & Insider Threat Awareness",
        description: "Programmes to help staff identify and report fraud, collusion, and internal security risks.",
        icon: ScanEye,
      },
      {
        title: "Access Control & Surveillance",
        description: "Integrated access control and CCTV systems for branches, vaults, and back-office operations.",
        icon: Cctv,
      },
    ],
  },
  {
    slug: "multinational",
    name: "Multinational Companies",
    icon: Building2,
    tagline: "Corporate & Multinational Security",
    description:
      "Vertex supports multinational companies operating in Bangladesh with security programmes that meet global corporate standards while adapting to local operational realities.",
    services: [
      {
        title: "Corporate Security Policy Development",
        description: "Developing security policies and procedures aligned with global corporate governance standards.",
        icon: FileText,
      },
      {
        title: "Executive Protection",
        description: "Close protection and travel security for executives and visiting leadership.",
        icon: UserCheck,
      },
      {
        title: "Travel Risk Management",
        description: "Risk assessments and safety planning for domestic and international employee travel.",
        icon: Compass,
      },
      {
        title: "Facility Security Audits",
        description: "Independent audits of office and facility security controls against corporate benchmarks.",
        icon: ClipboardCheck,
      },
      {
        title: "Crisis Management Planning",
        description: "Crisis response frameworks covering security incidents, emergencies, and business disruption.",
        icon: Siren,
      },
      {
        title: "Employee Security Awareness Training",
        description: "Training programmes that build a security-conscious culture across the workforce.",
        icon: GraduationCap,
      },
    ],
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    icon: Pill,
    tagline: "Pharmaceutical Facility Security",
    description:
      "Pharmaceutical manufacturers and distributors face strict regulatory and product-integrity requirements. Vertex provides security solutions that protect facilities, products, and compliance standing.",
    services: [
      {
        title: "Facility Security Assessment",
        description: "Evaluation of manufacturing, storage, and distribution facility security controls.",
        icon: ClipboardList,
      },
      {
        title: "Anti-Counterfeiting & Product Security",
        description: "Advisory on controls that protect product integrity from manufacturing through distribution.",
        icon: ShieldCheck,
      },
      {
        title: "Restricted Area Access Control",
        description: "Access control systems for cleanrooms, labs, and controlled-substance storage areas.",
        icon: KeyRound,
      },
      {
        title: "Warehouse & Cold Chain Security",
        description: "Security controls for storage and distribution of temperature-sensitive pharmaceutical products.",
        icon: Warehouse,
      },
      {
        title: "Regulatory Compliance Support",
        description: "Security advisory aligned to DGDA and international pharmaceutical compliance requirements.",
        icon: FileSearch,
      },
      {
        title: "Fire Safety Management",
        description: "Fire prevention systems and readiness training aligned to BNBC requirements.",
        icon: FireExtinguisher,
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Hospitals & Healthcare",
    icon: HeartPulse,
    tagline: "Healthcare Facility Security",
    description:
      "Vertex helps hospitals and healthcare facilities protect patients, staff, and visitors with security programmes designed for sensitive, high-traffic care environments.",
    services: [
      {
        title: "Patient & Visitor Safety Programmes",
        description: "Security protocols that protect patients, families, and visitors throughout the facility.",
        icon: HeartPulse,
      },
      {
        title: "Restricted Area Access Control",
        description: "Access control for maternity wards, ICUs, pharmacies, and other sensitive areas.",
        icon: KeyRound,
      },
      {
        title: "Emergency Response & Evacuation Planning",
        description: "Emergency preparedness and evacuation planning tailored to healthcare environments.",
        icon: Siren,
      },
      {
        title: "Workplace Violence Prevention",
        description: "Training and protocols to prevent and de-escalate incidents involving patients or visitors.",
        icon: ShieldAlert,
      },
      {
        title: "Security Personnel Training for Healthcare",
        description: "Specialized training for security staff working in clinical and patient-facing settings.",
        icon: GraduationCap,
      },
      {
        title: "CCTV & Surveillance Systems",
        description: "Surveillance system design for wards, entrances, pharmacies, and parking areas.",
        icon: Cctv,
      },
    ],
  },
  {
    slug: "education",
    name: "Educational Institutions",
    icon: School,
    tagline: "Campus & School Security",
    description:
      "From schools to universities, Vertex helps educational institutions create safer campuses through assessment, training, and access control solutions.",
    services: [
      {
        title: "Campus Security Assessment",
        description: "Evaluation of perimeter, building, and campus-wide security controls.",
        icon: ClipboardList,
      },
      {
        title: "Access Control & Visitor Management",
        description: "Controlled entry systems and visitor screening procedures for campuses.",
        icon: KeyRound,
      },
      {
        title: "Emergency Response & Lockdown Planning",
        description: "Emergency and lockdown procedures tailored to educational environments.",
        icon: Siren,
      },
      {
        title: "Student Safety Awareness Programmes",
        description: "Age-appropriate safety and security awareness sessions for students and staff.",
        icon: BookOpen,
      },
      {
        title: "Security Personnel Training",
        description: "Training for campus security staff on procedures, conduct, and incident response.",
        icon: GraduationCap,
      },
      {
        title: "CCTV & Surveillance Systems",
        description: "Surveillance system design for entrances, corridors, and campus perimeters.",
        icon: Cctv,
      },
    ],
  },
  {
    slug: "embassies",
    name: "Embassies & Diplomatic Missions",
    icon: Globe,
    tagline: "Diplomatic-Grade Security",
    description:
      "Drawing on direct experience securing a U.S. Embassy mission in Dhaka, Vertex provides diplomatic-grade security advisory and training for embassies and missions.",
    services: [
      {
        title: "Perimeter Security Design",
        description: "Advisory on perimeter security standards for diplomatic compounds and missions.",
        icon: ShieldCheck,
      },
      {
        title: "Access Control & Screening Procedures",
        description: "Controlled entry, visitor screening, and credentialing procedures.",
        icon: KeyRound,
      },
      {
        title: "Close Protection & VIP Security",
        description: "Close protection training and planning for diplomatic staff and visiting officials.",
        icon: UserCheck,
      },
      {
        title: "Emergency & Crisis Response Planning",
        description: "Crisis and emergency response planning aligned to diplomatic security standards.",
        icon: Siren,
      },
      {
        title: "Diplomatic-Grade Security Training",
        description: "Training programmes for mission security personnel built on international best practice.",
        icon: GraduationCap,
      },
      {
        title: "Surveillance & Threat Monitoring",
        description: "Surveillance system design and threat-monitoring advisory for mission compounds.",
        icon: Cctv,
      },
    ],
  },
  {
    slug: "ngo",
    name: "NGOs & International Organizations",
    icon: Users,
    tagline: "NGO & Field Security",
    description:
      "Vertex supports NGOs and international organizations with duty-of-care security programmes for staff, offices, and field operations across Bangladesh.",
    services: [
      {
        title: "Field Security Risk Assessment",
        description: "Risk assessments for field offices, project sites, and operational areas.",
        icon: ClipboardList,
      },
      {
        title: "Duty of Care & Travel Security",
        description: "Travel risk planning and duty-of-care frameworks for staff movement.",
        icon: Compass,
      },
      {
        title: "Staff Security Training",
        description: "Security awareness and personal safety training for field and office staff.",
        icon: GraduationCap,
      },
      {
        title: "Emergency & Crisis Response Planning",
        description: "Crisis response planning for security incidents affecting staff or operations.",
        icon: Siren,
      },
      {
        title: "Office & Compound Security",
        description: "Security assessments and controls for offices, guesthouses, and compounds.",
        icon: ShieldCheck,
      },
      {
        title: "Incident Reporting Systems",
        description: "Structured incident reporting and investigation processes for security events.",
        icon: FileText,
      },
    ],
  },
  {
    slug: "energy",
    name: "Power & Energy",
    icon: Zap,
    tagline: "Critical Infrastructure Security",
    description:
      "Vertex provides security solutions for power generation, transmission, and energy facilities where operational continuity and site protection are critical.",
    services: [
      {
        title: "Critical Infrastructure Protection",
        description: "Security planning for power plants, substations, and energy infrastructure.",
        icon: ShieldCheck,
      },
      {
        title: "Perimeter & Access Control Systems",
        description: "Access control and perimeter security for high-value utility sites.",
        icon: KeyRound,
      },
      {
        title: "Site Security Risk Assessment",
        description: "Risk assessments covering sabotage, theft, and unauthorized access at utility sites.",
        icon: ClipboardList,
      },
      {
        title: "Contractor & Visitor Management",
        description: "Controlled entry procedures for contractors, vendors, and site visitors.",
        icon: ClipboardCheck,
      },
      {
        title: "Emergency Response Planning",
        description: "Emergency preparedness planning for security and safety incidents on-site.",
        icon: Siren,
      },
      {
        title: "CCTV & Surveillance Systems",
        description: "Surveillance system design for perimeters, control rooms, and critical assets.",
        icon: Cctv,
      },
    ],
  },
  {
    slug: "corporate",
    name: "Corporate Offices",
    icon: Briefcase,
    tagline: "Corporate Office Security",
    description:
      "Vertex helps corporate offices of all sizes build practical, right-sized security programmes — from access control to executive protection and emergency planning.",
    services: [
      {
        title: "Office Security Assessment",
        description: "Evaluation of physical security controls across office facilities.",
        icon: ClipboardList,
      },
      {
        title: "Access Control & Visitor Management",
        description: "Controlled entry systems and visitor management procedures for office environments.",
        icon: KeyRound,
      },
      {
        title: "Executive Protection",
        description: "Close protection and secure travel planning for leadership and executives.",
        icon: UserCheck,
      },
      {
        title: "Employee Security Awareness Training",
        description: "Training that builds a security-conscious culture across office staff.",
        icon: GraduationCap,
      },
      {
        title: "Emergency Response Planning",
        description: "Emergency preparedness and evacuation planning for office environments.",
        icon: Siren,
      },
      {
        title: "CCTV & Surveillance Systems",
        description: "Surveillance system design for entrances, lobbies, and office floors.",
        icon: Cctv,
      },
    ],
  },
];

