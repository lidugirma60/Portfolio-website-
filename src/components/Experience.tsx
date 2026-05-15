import { experience, education } from "@/content/experience";
import { SectionFrame } from "./ui/SectionFrame";
import { GraduationCap, BookOpen } from "lucide-react";

const SEV_COLOR: Record<string, string> = {
  INFO: "var(--accent)",
  OK: "var(--ok)",
  TASK: "var(--warn)",
};

export function Experience() {
  return (
    <SectionFrame
      id="logs"
      code="LAYER 03 · OPERATION LOGS"
      title="Collaboration Events"
      meta="TIMELINE · CHRONO"
      description="Experience presented as system logs — factual entries, no embellishment."
    >
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
        <div className="surface p-5 sm:p-7 corner-ticks relative">
          <div className="flex items-center justify-between mb-5">
            <span className="label">/var/log/selem_os/collab.log</span>
            <span className="mono text-[10px] text-[color:var(--accent)]">tail -f</span>
          </div>
          <ol className="relative border-l border-[color:var(--border)] ml-2 space-y-7">
            {experience.map((log) => (
              <li key={log.id} className="pl-6 relative">
                <span
                  className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2"
                  style={{
                    borderColor: SEV_COLOR[log.severity] ?? "var(--accent)",
                    background: "var(--bg-1)",
                  }}
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="label" style={{ color: SEV_COLOR[log.severity] }}>
                    {log.code} · {log.severity}
                  </span>
                  <span className="mono text-[10px] text-[color:var(--text-2)]">
                    {log.period}
                  </span>
                </div>
                <h3 className="mt-1.5 text-base font-medium text-[color:var(--text-0)]">
                  {log.title}
                </h3>
                <p className="mono text-[11px] text-[color:var(--text-2)] mt-1 uppercase tracking-widest">
                  org: {log.org}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {log.details.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-[color:var(--text-1)] flex gap-2 leading-relaxed"
                    >
                      <span className="text-[color:var(--accent)] mono mt-0.5">›</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <aside id="education" className="surface p-6 corner-ticks relative">
          <span className="label">{education.code}</span>
          <div className="flex items-center gap-3 mt-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--accent)] text-[color:var(--accent)] bg-[color:var(--accent-soft)]">
              <GraduationCap size={18} />
            </span>
            <div>
              <h3 className="text-lg font-semibold leading-tight">{education.school}</h3>
              <p className="mono text-[11px] uppercase tracking-widest text-[color:var(--text-2)] mt-0.5">
                {education.program} · {education.status}
              </p>
            </div>
          </div>

          <div className="surface-strong rounded-lg p-3.5 mt-5">
            <span className="label">TRACK</span>
            <p className="mt-1.5 text-sm text-[color:var(--text-0)]">{education.track}</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2.5">
              <BookOpen size={14} className="text-[color:var(--accent)]" />
              <span className="label">Relevant coursework</span>
            </div>
            <ul className="grid sm:grid-cols-2 gap-1.5">
              {education.coursework.map((c) => (
                <li
                  key={c}
                  className="tag !rounded-md !px-2.5 !py-1.5 !text-[11px] justify-start"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </SectionFrame>
  );
}
