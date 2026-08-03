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
} from "lucide-react";

export const siteConfig = {
  name: "VERTEX SECURITY SOLUTIONS",
  shortName: "VERTEX",
  tagline: "Security Training • Risk Consultancy • Security Technology",
  slogan: "Protecting People • Assets • Reputation",
  brandPromise: "We don't simply provide security—we build security capability.",
  description:
    "Vertex Security Solutions is a Bangladesh-based Security Training, Risk Consultancy, and Security Technology firm dedicated to helping organizations protect their people, assets, operations, information, and reputation.",
  url: "https://vertexsecuritysolutions.com",
};

export const contactInfo = {
  name: "Major Khalil Ahmed Khan",
  credentials: "psc, MDS, MBA, SRMP-C (Retd)",
  title: "Founder & Principal Security Consultant",
  email: "khalilak@gmail.com",
  phone: "+880 1711-277476",
  phoneHref: "+8801711277476",
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
  "Unlike conventional security companies, Vertex does not simply provide security services — we develop security capability through professional training, strategic consultancy, and practical solutions tailored to each client's operational needs.",
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
    title: "Security Training",
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
    title: "Electronic Security Consultancy",
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
    title: "Executive Protection Services",
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
];

export const serviceInterestOptions: string[] = [
  "Security Training",
  "Security Risk Consultancy",
  "Electronic Security Consultancy",
  "Executive Protection Services",
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
    role: "SVP & Head of Cash Services / SVP & Head of Internal Security",
    organization: "G4S Bangladesh",
    description:
      "Held senior leadership positions overseeing cash services and internal security across the organization.",
  },
  {
    order: "07",
    role: "Founder & Principal Security Consultant",
    organization: "Vertex Security Solutions",
    description:
      "Founded Vertex to bring 42+ years of military, diplomatic, and corporate security leadership to Bangladeshi organizations.",
  },
];

export const whyVertexPoints: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Leadership",
    description: "Our leadership brings more than four decades of experience in military, diplomatic, and corporate security management.",
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
    title: "Security Training",
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

