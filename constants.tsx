
import { PandavaCharacter, Project, Education, Certification, Experience } from './types';

export const NAME_PREFIX = "Ir. Muhammad Fakhri Ramadhan";
export const TITLES = "S.T., IPU, S.H., M.S.F., CSSGB, OSCP, CDSCP";

export const EDUCATION: Education[] = [
  { degree: "S1 Teknik Industri", institution: "Universitas Indonesia" },
  { degree: "S1 Ilmu Hukum", institution: "Universitas Terbuka" },
  { degree: "S2 Cybersecurity and Digital Forensics", institution: "Telkom University" }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Lead Cybersecurity Architect",
    company: "Strategic Defense Corp",
    period: "2022 - Present",
    description: "Leading the cyber defense team in securing national critical infrastructure, implementing OSCP standards for continuous penetration testing and vulnerability management across the Seven Kingdoms."
  },
  {
    role: "Senior Process Optimization & Legal-Tech Consultant",
    company: "Industrial Regulatory Solutions",
    period: "2017 - 2022",
    description: "Spearheaded digital transformation initiatives by applying Six Sigma (Green Belt) methodologies to reduce operational inefficiencies by 35% while bridging legal compliance (ITE Law) with technical information system implementations for both government and private sectors."

  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "Professional Engineer Program (Ir.)", 
    provider: "Institut Teknologi Bandung",
    description: "Academic professional engineering certification confirming technical competence and professional ethics in the field of engineering."
  },
  { 
    name: "Senior Professional Engineer (IPU)", 
    provider: "Persatuan Insinyur Indonesia",
    description: "Senior Professional Engineer title recognizing a long track record and leadership in national-scale engineering projects with high integrity standards."
  },
  { 
    name: "Certified Six Sigma Green Belt (CSSGB)", 
    provider: "American Society for Quality",
    description: "Expertise in process optimization using statistical methodologies to minimize defects/variance and maximize efficiency in both industrial and digital systems."
  },
  { 
    name: "Certified Digital Supply Chain Professional (CDSCP)", 
    provider: "ISCEA",
    description: "Validation of expertise in orchestrating supply chains in the digital era, connecting physical logistics with synchronous and secure data flows."
  },
  { 
    name: "GIAC Defending Advanced Threats (GDAT)", 
    provider: "SANS Institute",
    description: "Specialization in detecting and stopping Advanced Persistent Threats (APT) and building proactive cyber defense systems."
  },
  { 
    name: "Offensive Security Certified Professional (OSCP)", 
    provider: "Offensive Security",
    description: "The 'gold standard' certification in the world of penetration testing. Validates the ability to perform ethical cyber attacks and identify critical vulnerabilities in complex infrastructures."
  }
];

export const PANDAVAS: PandavaCharacter[] = [
  {
    name: "Stark",
    alias: "The Just",
    quality: "Legal Integrity",
    description: "Expertise in mapping legal complexity into robust digital governance and ethical AI frameworks.",
    extendedWisdom: "In the digital landscape, code is law, but ethics is the soul. I bridge the gap between technical execution and regulatory compliance.",
    mantra: "The North Remembers",
    skills: ["Legal Compliance", "IT Governance", "Strategic Policy", "Ethical AI"],
    icon: "⚖️",
    color: "shadow-[0_0_20px_rgba(209,213,219,0.1)] bg-slate-900/20"
  },
  {
    name: "Baratheon",
    alias: "The Guardian",
    quality: "Cyber Defense",
    description: "Focused on heavy-duty security measures and deep forensic analysis to dismantle sophisticated threats.",
    extendedWisdom: "True strength in the digital age is measured by resilience. I operate as the vanguard against adversaries using proactive defense.",
    mantra: "Hear the Fury",
    skills: ["Offensive Security", "Digital Forensics", "Incident Response", "Threat Hunting"],
    icon: "🛡️",
    color: "shadow-[0_0_20px_rgba(251,191,36,0.1)] bg-amber-900/10"
  },
  {
    name: "Targaryen",
    alias: "The Efficient",
    quality: "Precision Engineering",
    description: "Applying Six Sigma and Industrial Engineering to optimize systems with flawless accuracy and efficiency.",
    extendedWisdom: "Efficiency is the ultimate art form. I apply Six Sigma methodologies to eliminate waste and variance in architectures.",
    mantra: "Dracarys",
    skills: ["Six Sigma Optimization", "Process Engineering", "Systems Design", "Efficiency Audit"],
    icon: "🐉",
    color: "shadow-[0_0_20px_rgba(220,38,38,0.1)] bg-red-900/10"
  },
  {
    name: "Tyrell",
    alias: "The Master of Flow",
    quality: "Supply Chain",
    description: "Orchestrating the flow of digital supply chains and logistics with strategic harmony.",
    extendedWisdom: "Complexity is simply a pattern waiting to be harmonized. My focus ensures perfect synchronization of digital assets.",
    mantra: "Growing Stronger",
    skills: ["Digital SCM", "Logistics Flow", "Inventory Automation", "Network Design"],
    icon: "📦",
    color: "shadow-[0_0_20px_rgba(16,185,129,0.1)] bg-emerald-900/10"
  },
  {
    name: "Lannister",
    alias: "The Engineer",
    quality: "Structural Excellence",
    description: "Ensuring the structural integrity and professional engineering standards across all digital infrastructures.",
    extendedWisdom: "The foundation of any great kingdom is its infrastructure. I specialize in the structural integrity of complex systems.",
    mantra: "Hear Me Roar",
    skills: ["Technical Audit", "Maintenance Strategy", "Systems Architecture", "Quality Assurance"],
    icon: "⚙️",
    color: "shadow-[0_0_20px_rgba(251,191,36,0.1)] bg-amber-600/10"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Secure Supply Chain Protocol",
    category: "Financial Security",
    description: "A high-security supply chain protocol ensuring the safe flow of assets across the Narrow Sea, protected by Valyrian encryption.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tags: ["Cybersecurity", "Iron Bank", "Python", "Encryption"]
  },
  {
    id: "2",
    title: "Legal-Tech Governance Framework",
    category: "Governance",
    description: "A digital governance framework mapping the laws of the Seven Kingdoms to automated IT audits and ethical compliance.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    tags: ["Law", "Maester", "React", "Compliance"]
  },
  {
    id: "3",
    title: "Six Sigma Process Optimizer",
    category: "Industrial Engineering",
    description: "Advanced industrial analytics platform applying CSSGB methodologies to minimize variance and maximize throughput in the realm's production lines.",
    imageUrl: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=800",
    tags: ["Six Sigma", "IE", "Optimization", "Data Science"]
  },
  {
    id: "4",
    title: "Threat Defense & Forensic Suite",
    category: "Cybersecurity & Forensic",
    description: "Comprehensive digital forensics and incident response suite, merging advanced penetration testing (OSCP) with master-grade digital forensics to mitigate Advanced Persistent Threats (APT) from beyond the wall.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    tags: ["Cybersec", "Forensics", "OSCP", "Incident Response"]
  }
];
