export type ProjectCategory = "AI" | "SECURITY" | "FULLSTACK" | "PLATFORM";

export interface ProjectModule {
  id: string;
  code: string;
  title: string;
  role: "FLAGSHIP" | "SECONDARY";
  tagline: string;
  function: string;
  stack: string[];
  threat: string;
  relevance: string;
  depth: string[];
  features: string[];
  categories: ProjectCategory[];
  state: "ACTIVE" | "MONITORING" | "STANDBY";
  links: { github: string; live?: string };
}

export const projects: ProjectModule[] = [
  {
    id: "phishguard-ai",
    code: "MOD-01",
    title: "PhishGuard AI",
    role: "FLAGSHIP",
    tagline: "AI-powered phishing & malicious URL detection.",
    function:
      "A web platform that detects phishing websites, malicious URLs and suspicious email content using machine-learning signals combined with rule-based security analysis. Designed as a triage assistant, not an absolute classifier.",
    stack: ["Python", "React", "Node.js", "ML Pipeline", "REST API", "MongoDB"],
    threat:
      "Social engineering at scale, operator fatigue, and false confidence created by binary safe/unsafe UX in legacy tools.",
    relevance:
      "Mirrors enterprise SOC workflows: scoring, explainability and human-in-the-loop review instead of opaque verdicts.",
    depth: [
      "Threat-modeled false positives / negatives with confidence bands.",
      "Strict input validation, rate limiting, and audit logging on every scan.",
    ],
    features: [
      "Real-time URL scoring",
      "Email & message inspection",
      "Explainable risk signals",
      "Operator audit log",
    ],
    categories: ["AI", "SECURITY", "FULLSTACK"],
    state: "ACTIVE",
    links: {
      github: "https://github.com/selemgirma/phishguard-ai",
      live: "https://phishguard.selemgirma.dev",
    },
  },
  {
    id: "sentinelx",
    code: "MOD-02",
    title: "SentinelX",
    role: "FLAGSHIP",
    tagline: "Real-time threat detection & monitoring dashboard.",
    function:
      "A professional security dashboard for monitoring attacks, suspicious activity, login attempts and system vulnerabilities in real time — built to feel like an enterprise SOC console.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    threat:
      "Undetected lateral movement, silent failures and missing observability in small-to-mid web applications.",
    relevance:
      "Demonstrates SOC-style thinking at developer scale: events, timelines, severity, and prioritization.",
    depth: [
      "Least-privilege service roles and structured tamper-aware logs.",
      "Secure headers, dependency hygiene, and bounded blast radius per service.",
    ],
    features: [
      "Live attack feed",
      "Login & session analytics",
      "Vulnerability surface map",
      "Role-based access",
    ],
    categories: ["SECURITY", "FULLSTACK"],
    state: "MONITORING",
    links: {
      github: "https://github.com/selemgirma/sentinelx",
      live: "https://sentinelx.selemgirma.dev",
    },
  },
  {
    id: "cybervault",
    code: "MOD-03",
    title: "CyberVault",
    role: "FLAGSHIP",
    tagline: "Encrypted cloud storage with access control.",
    function:
      "A secure cloud storage and file-sharing platform with strong authentication, encryption at rest and in transit, and per-object access control.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "AES/RSA"],
    threat:
      "Secret sprawl, client-side trust mistakes, weak key handling and over-permissive sharing in consumer storage tools.",
    relevance:
      "Speaks directly to AppSec and platform-engineering instincts: identity, secrets, and data boundaries.",
    depth: [
      "Threat model covers stolen DB, stolen tokens, and replay attacks.",
      "Separation of duties between auth, storage and key services.",
    ],
    features: [
      "End-to-end encrypted upload",
      "Granular share permissions",
      "Audit trail per file",
      "Secure password reset flow",
    ],
    categories: ["SECURITY", "FULLSTACK"],
    state: "ACTIVE",
    links: {
      github: "https://github.com/selemgirma/cybervault",
      live: "https://cybervault.selemgirma.dev",
    },
  },
  {
    id: "nyxguard",
    code: "MOD-04",
    title: "NyxGuard",
    role: "FLAGSHIP",
    tagline: "Threat monitoring & security analytics platform.",
    function:
      "A modern cybersecurity web application that monitors suspicious activities, detects potential threats and surfaces real-time security analytics through an interactive dashboard.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    threat:
      "Lack of visibility into authentication anomalies and attack patterns across small production systems.",
    relevance:
      "Mirrors real-world monitoring systems used in security operations and product-security teams.",
    depth: [
      "Real-time event pipeline with bounded retention and severity scoring.",
      "Hardened auth: rotated secrets, scoped tokens, and brute-force defenses.",
    ],
    features: [
      "Real-time threat monitoring",
      "Secure authentication & authorization",
      "Attack & login activity tracking",
      "Security analytics dashboard",
    ],
    categories: ["SECURITY", "FULLSTACK", "PLATFORM"],
    state: "MONITORING",
    links: {
      github: "https://github.com/selemgirma/nyxguard",
      live: "https://nyxguard.selemgirma.dev",
    },
  },
  {
    id: "ciphernest",
    code: "MOD-05",
    title: "CipherNest",
    role: "SECONDARY",
    tagline: "Encrypted communication & protected file sharing.",
    function:
      "A secure web platform for encrypted communication and protected file sharing, with privacy-focused authentication and encrypted data handling.",
    stack: ["React", "Firebase", "Node.js", "MongoDB", "JWT", "Crypto"],
    threat:
      "Plaintext channels, leaked credentials and over-broad cloud sharing in everyday communication tools.",
    relevance:
      "Demonstrates practical application of encryption, secure APIs, and protected data management.",
    depth: [
      "Encryption at rest, scoped access tokens, and minimal trusted server surface.",
    ],
    features: [
      "Encrypted file sharing",
      "Secure login & auth",
      "Access control management",
      "Privacy-focused architecture",
    ],
    categories: ["SECURITY", "FULLSTACK"],
    state: "STANDBY",
    links: {
      github: "https://github.com/selemgirma/ciphernest",
      live: "https://ciphernest.selemgirma.dev",
    },
  },
  {
    id: "pixelforge",
    code: "MOD-06",
    title: "PixelForge",
    role: "SECONDARY",
    tagline: "Creative portfolio & developer collaboration platform.",
    function:
      "A modern platform for developers and designers to showcase projects, share creative work and collaborate inside an interactive digital environment.",
    stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    threat:
      "Fragmented portfolio surfaces and weak content boundaries in maker/collab platforms.",
    relevance:
      "Combines frontend design discipline with scalable backend functionality and clear UX state.",
    depth: [
      "Component-driven UI, deliberate auth boundaries, and predictable API contracts.",
    ],
    features: [
      "Dynamic portfolio management",
      "Project showcase system",
      "User profile customization",
      "Interactive project gallery",
    ],
    categories: ["FULLSTACK", "PLATFORM"],
    state: "ACTIVE",
    links: {
      github: "https://github.com/selemgirma/pixelforge",
      live: "https://pixelforge.selemgirma.dev",
    },
  },
  {
    id: "haramaya-portal",
    code: "MOD-07",
    title: "Haramaya Portal",
    role: "FLAGSHIP",
    tagline: "University management & academic services portal.",
    function:
      "A web-based university management system that streamlines academic and administrative services, providing role-based access for students, instructors, and administrators to manage courses, academic records, user information, and institutional operations through a centralized digital portal.",
    stack: ["TypeScript", "Next.js", "React", "Tailwind", "Node.js", "PostgreSQL"],
    threat:
      "Cross-role data leakage, privilege escalation between students/instructors/admins, and weak session boundaries in academic systems handling sensitive records.",
    relevance:
      "Demonstrates real-world multi-tenant role-based access control, identity boundaries, and institutional-grade data handling at production scale.",
    depth: [
      "Role-based authorization with strict boundaries between student, instructor, and admin contexts.",
      "Centralized academic record handling with audit trails and validated state transitions.",
    ],
    features: [
      "Role-based access control (student/instructor/admin)",
      "Course & academic record management",
      "User & institutional operations dashboard",
      "Centralized administrative services",
    ],
    categories: ["FULLSTACK", "PLATFORM"],
    state: "ACTIVE",
    links: {
      github: "https://github.com/lidugirma60/haramaya-portal-sample",
      live: "https://haramaya-portal-sample.vercel.app",
    },
  },
];

export const projectFilters: { id: ProjectCategory | "ALL"; label: string }[] = [
  { id: "ALL", label: "All modules" },
  { id: "SECURITY", label: "Security" },
  { id: "AI", label: "AI" },
  { id: "FULLSTACK", label: "Full-stack" },
  { id: "PLATFORM", label: "Platform" },
];
