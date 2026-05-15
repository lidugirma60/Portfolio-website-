export interface EventEntry {
  id: string;
  code: string;
  title: string;
  description: string;
  level: "EVT" | "AUDIT" | "SIGNAL";
}

export const achievements: EventEntry[] = [
  {
    id: "self-learning",
    code: "EVT-01",
    title: "Sustained self-directed learning under limited resources",
    description:
      "Built and maintained a personal learning track across security, networking and full-stack engineering with emphasis on reproducible exercises and documented outcomes.",
    level: "EVT",
  },
  {
    id: "consistent-growth",
    code: "EVT-02",
    title: "Consistent skill expansion without tutorial-only depth",
    description:
      "Pushed beyond surface tutorials into networking internals, security tooling, and application-layer engineering — verified by working systems, not certificates alone.",
    level: "EVT",
  },
  {
    id: "end-to-end-builds",
    code: "EVT-03",
    title: "Multiple end-to-end full-stack + cybersecurity systems",
    description:
      "Delivered functional builds spanning auth, validation, persistence, monitoring and threat-aware design — each documented and demoable.",
    level: "AUDIT",
  },
  {
    id: "fundamentals-first",
    code: "EVT-04",
    title: "Persistence in technical depth",
    description:
      "Revisited fundamentals when integrations failed instead of patching blindly — the habit that scales engineers from intermediate to senior.",
    level: "SIGNAL",
  },
];

export interface Certification {
  id: string;
  code: string;
  title: string;
  issuer: string;
  status: "ACQUIRED" | "IN_PROGRESS" | "PLANNED";
  year: string;
}

export const certifications: Certification[] = [
  {
    id: "cyber-fundamentals",
    code: "CERT-01",
    title: "Cybersecurity Fundamentals",
    issuer: "Self-directed lab + coursework",
    status: "IN_PROGRESS",
    year: "2025",
  },
  {
    id: "networking-essentials",
    code: "CERT-02",
    title: "Networking Essentials",
    issuer: "Cisco-style curriculum",
    status: "IN_PROGRESS",
    year: "2025",
  },
  {
    id: "fullstack-track",
    code: "CERT-03",
    title: "Full-stack Web Development Track",
    issuer: "Project-based self-certification",
    status: "ACQUIRED",
    year: "2024",
  },
  {
    id: "linux-essentials",
    code: "CERT-04",
    title: "Linux & Command Line Essentials",
    issuer: "Independent study",
    status: "ACQUIRED",
    year: "2024",
  },
  {
    id: "ethical-hacking",
    code: "CERT-05",
    title: "Ethical Hacking & Pen-Testing (Intro)",
    issuer: "Kali-based lab work",
    status: "PLANNED",
    year: "2025",
  },
];
