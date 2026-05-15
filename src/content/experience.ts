export interface ExperienceLog {
  id: string;
  code: string;
  title: string;
  org: string;
  period: string;
  severity: "INFO" | "OK" | "TASK";
  details: string[];
}

export const experience: ExperienceLog[] = [
  {
    id: "team-engineering",
    code: "LOG-001",
    title: "Team Engineering — Software Projects",
    org: "Haramaya University",
    period: "Ongoing",
    severity: "TASK",
    details: [
      "Collaborated on multi-developer software projects across shared repositories.",
      "Decomposed features into reviewable units with clear integration checkpoints.",
      "Contributed to implementation, debugging, and technical documentation under group constraints.",
    ],
  },
  {
    id: "cross-functional",
    code: "LOG-002",
    title: "Cross-Functional Problem Solving",
    org: "University Teams",
    period: "Ongoing",
    severity: "INFO",
    details: [
      "Worked through requirement clarification, trade-offs, and delivery deadlines as a group.",
      "Kept work traceable through commits, issues, and agreed branching workflows.",
    ],
  },
  {
    id: "technical-ownership",
    code: "LOG-003",
    title: "Technical Ownership of Modules",
    org: "Group Projects",
    period: "Ongoing",
    severity: "OK",
    details: [
      "Owned specific slices: API routes, data models, UI modules, and security-relevant validation.",
      "Maintained consistency with team conventions to reduce merge risk and review load.",
    ],
  },
];

export const education = {
  code: "FOUNDATION_NODE",
  school: "Haramaya University",
  program: "B.Sc. Software Engineering",
  status: "In progress",
  track: "Cybersecurity + Full-stack development",
  coursework: [
    "Programming Fundamentals & OOP",
    "Computer Networks",
    "Databases & Data Modeling",
    "Operating Systems & Linux",
    "Web Engineering",
    "Software Architecture",
  ],
};
