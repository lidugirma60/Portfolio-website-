import { achievements, certifications } from "@/content/achievements";
import { SectionFrame } from "./ui/SectionFrame";
import { Award, CircleCheck, CircleDashed, CircleDot } from "lucide-react";

const STATUS_ICON = {
  ACQUIRED: CircleCheck,
  IN_PROGRESS: CircleDot,
  PLANNED: CircleDashed,
};

const STATUS_COLOR = {
  ACQUIRED: "var(--ok)",
  IN_PROGRESS: "var(--accent)",
  PLANNED: "var(--text-2)",
};

export function Achievements() {
  return (
    <SectionFrame
      id="events"
      code="LAYER 04 · EVENT LOG"
      title="Verified Signals"
      meta="EVENTS · CERTIFICATIONS"
      description="Structured achievements and credentials — no hype, just events the system can attest to."
    >
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="surface p-6 corner-ticks relative">
          <div className="flex items-center justify-between mb-5">
            <span className="label">events.stream()</span>
            <span className="mono text-[10px] text-[color:var(--accent)]">
              {achievements.length} signals
            </span>
          </div>
          <ul className="space-y-4">
            {achievements.map((e) => (
              <li key={e.id} className="flex gap-3.5">
                <div className="flex flex-col items-center pt-1">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <span className="mt-1 h-full w-px bg-[color:var(--border)]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="label text-[color:var(--accent)]">
                      {e.code} · {e.level}
                    </span>
                  </div>
                  <h3 className="mt-1 text-[15px] font-medium text-[color:var(--text-0)]">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--text-1)] leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface p-6 corner-ticks relative">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Award size={14} className="text-[color:var(--accent)]" />
              <span className="label">credentials.list()</span>
            </div>
            <span className="mono text-[10px] text-[color:var(--text-2)]">
              {certifications.length} entries
            </span>
          </div>
          <ul className="space-y-2.5">
            {certifications.map((c) => {
              const Icon = STATUS_ICON[c.status];
              return (
                <li
                  key={c.id}
                  className="surface-strong rounded-lg px-4 py-3 flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <Icon
                      size={16}
                      style={{ color: STATUS_COLOR[c.status] }}
                      className="mt-0.5 shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-[color:var(--text-0)] truncate">
                        {c.title}
                      </h3>
                      <p className="mono text-[10px] uppercase tracking-widest text-[color:var(--text-2)] mt-0.5 truncate">
                        {c.code} · {c.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end shrink-0">
                    <span
                      className="mono text-[10px] uppercase tracking-widest"
                      style={{ color: STATUS_COLOR[c.status] }}
                    >
                      {c.status.replace("_", " ")}
                    </span>
                    <span className="mono text-[10px] text-[color:var(--text-2)] mt-0.5">
                      {c.year}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SectionFrame>
  );
}
