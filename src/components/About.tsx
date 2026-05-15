import { ShieldCheck, Network, Layers } from "lucide-react";
import { profile } from "@/content/profile";
import { SectionFrame } from "./ui/SectionFrame";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Adversary-aware design",
    body: "Every feature ships with a stated threat context and a containment story.",
  },
  {
    icon: Layers,
    title: "Full-stack discipline",
    body: "Frontend, API, persistence and auth treated as one coherent system, not silos.",
  },
  {
    icon: Network,
    title: "Networking instinct",
    body: "Comfort moving between OSI layers, packets, services and policies.",
  },
];

export function About() {
  return (
    <SectionFrame
      id="about"
      code="LAYER 02 · SYSTEM PROFILE"
      title="Operator Profile"
      meta="READ_ONLY"
      description="Background, posture and trajectory of the operator behind the system."
    >
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        <article className="surface p-6 sm:p-8 corner-ticks relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="label">profile.read()</span>
            <span className="mono text-[10px] text-[color:var(--accent)]">OK</span>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-[color:var(--text-1)]">
            {profile.about.map((p, i) => (
              <p key={i} className={i === 0 ? "text-[color:var(--text-0)]" : ""}>
                {p}
              </p>
            ))}
          </div>
        </article>

        <aside className="grid gap-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="surface p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--accent)] text-[color:var(--accent)] bg-[color:var(--accent-soft)]">
                  <Icon size={16} />
                </span>
                <h3 className="mono text-xs uppercase tracking-wider text-[color:var(--text-0)]">
                  {title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-[color:var(--text-1)] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </aside>
      </div>
    </SectionFrame>
  );
}
