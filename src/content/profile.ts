export const profile = {
  name: "Selem Girma",
  systemId: "SELEM_OS",
  role: "Software Engineering Student · Full-Stack Developer · Cybersecurity Engineer (in training)",
  tagline: "Full-stack surfaces, adversary-aware foundations.",
  location: "Haramaya, Ethiopia",
  status: "OPERATIONAL",

  // Cycling typed status lines for the hero terminal.
  terminalLines: [
    "STATUS: MONITORING_CAPABILITY_SURFACE ............ OK",
    "INTEGRITY: FUNDAMENTALS_FIRST .................... VERIFIED",
    "POSTURE: DEFENSE_IN_DEPTH ........................ IN_TRAINING",
    "UPLINK: READY_FOR_COLLABORATION .................. STANDBY",
  ],

  // Short profile narrative for the About panel.
  about: [
    "Software Engineering student at Haramaya University, oriented toward cybersecurity, networking, and full-stack systems as a single integrated discipline — not isolated toolchains.",
    "Work prioritizes deep fundamentals: how programs, networks, and data layers behave under normal load and under misuse — so features are not only shipped, but reasoned about as part of a larger attack surface.",
    "Trajectory: cybersecurity-focused full-stack engineering. Building usable interfaces and services while maintaining defensive posture, traceability, and operational clarity comparable to real product and security teams.",
  ],

  // Replace these with your real handles. Used in the contact gateway + footer.
  social: {
    github: "https://github.com/lidugirma60",
    linkedin: "https://www.linkedin.com/in/selemgirma",
    email: "selamgirma8076@gmail.com",
    telegram: "https://t.me/Lidoo13",
    twitter: "https://x.com/selemgirma",
    youtube: "https://youtube.com/@selemgirma",
    domain: "https://selem-portfolio.vercel.app",
  },

  // Path served from /public.
  resumeUrl: "/selem-girma-resume.pdf",
} as const;

export type Profile = typeof profile;
