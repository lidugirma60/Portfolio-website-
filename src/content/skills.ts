export interface SkillGroup {
  id: string;
  label: string;
  domain: string;
  description: string;
  items: { name: string; tag?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "core",
    label: "Programming Core",
    domain: "LANG_RUNTIME",
    description: "Primary languages used across security tooling and full-stack work.",
    items: [
      { name: "Python", tag: "scripting / ML / security" },
      { name: "JavaScript", tag: "web / runtime" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend Systems",
    domain: "UI_LAYER",
    description: "Interfaces that stay clear under load and under error states.",
    items: [
      { name: "HTML" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "Next.js" },
    ],
  },
  {
    id: "backend",
    label: "Backend Systems",
    domain: "SERVICE_LAYER",
    description: "API-first services with auth, validation, and predictable contracts.",
    items: [{ name: "Node.js" }, { name: "Express" }, { name: "REST APIs" }],
  },
  {
    id: "data",
    label: "Data Layer",
    domain: "PERSISTENCE",
    description: "Schemas, indices and access patterns reasoned about up front.",
    items: [{ name: "MongoDB" }, { name: "Database Design" }],
  },
  {
    id: "security",
    label: "Security Layer",
    domain: "DEFENSE",
    description: "Defensive posture, attacker thinking, and lab-scoped offensive practice.",
    items: [
      { name: "Kali Linux" },
      { name: "Network Security Fundamentals" },
      { name: "Vulnerability Analysis" },
      { name: "Auth & Access Control" },
    ],
  },
  {
    id: "toolchain",
    label: "Toolchain",
    domain: "DEV_OPS",
    description: "The day-to-day plumbing for shipping and collaborating.",
    items: [{ name: "Git / GitHub" }, { name: "Linux" }, { name: "API Development" }],
  },
  {
    id: "design",
    label: "Design Interface",
    domain: "PRODUCT",
    description: "Designing screens that communicate state, not decoration.",
    items: [{ name: "Figma" }, { name: "Photoshop" }],
  },
  {
    id: "concepts",
    label: "System Concepts",
    domain: "FOUNDATIONS",
    description: "Mental models that survive new languages and frameworks.",
    items: [
      { name: "OOP" },
      { name: "Networking" },
      { name: "System Architecture" },
    ],
  },
];
