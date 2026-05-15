"use client";

import { useState } from "react";
import { skillGroups } from "@/content/skills";
import { SectionFrame } from "./ui/SectionFrame";

export function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0]?.id ?? "");
  const active = skillGroups.find((g) => g.id === activeId) ?? skillGroups[0];

  return (
    <SectionFrame
      id="capabilities"
      code="LAYER 03 · SYSTEM MODULES"
      title="Capability Map"
      meta="LEVEL · INTERMEDIATE · SYSTEMWIDE"
      description="Categorized capability nodes — fundamentals-first, no bar graphs, no inflation."
    >
      <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
          {skillGroups.map((g) => {
            const isActive = g.id === active.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveId(g.id)}
                onMouseEnter={() => setActiveId(g.id)}
                className={`surface text-left p-3.5 transition-colors ${
                  isActive
                    ? "!border-[color:var(--accent)] bg-[color:var(--accent-soft)]"
                    : "hover:!border-[color:var(--border-strong)]"
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between">
                  <span className="label">{g.domain}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive ? "bg-[color:var(--accent)]" : "bg-[color:var(--text-2)]"
                    }`}
                  />
                </div>
                <h3 className="mt-2 mono text-xs uppercase tracking-widest text-[color:var(--text-0)]">
                  {g.label}
                </h3>
                <p className="mt-1 text-[11px] text-[color:var(--text-2)] line-clamp-2">
                  {g.items.length} nodes
                </p>
              </button>
            );
          })}
        </div>

        <div className="surface p-6 corner-ticks relative min-h-[260px]">
          <div className="flex items-center justify-between">
            <div>
              <span className="label">{active.domain}</span>
              <h3 className="mono text-base uppercase tracking-widest mt-1">
                {active.label}
              </h3>
            </div>
            <span className="mono text-[11px] text-[color:var(--accent)]">
              {active.items.length} NODES
            </span>
          </div>
          <p className="mt-3 text-sm text-[color:var(--text-1)] leading-relaxed">
            {active.description}
          </p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-2">
            {active.items.map((item) => (
              <li
                key={item.name}
                className="surface-strong rounded-lg px-3 py-2.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span className="text-sm text-[color:var(--text-0)] truncate">
                    {item.name}
                  </span>
                </div>
                {item.tag ? (
                  <span className="mono text-[10px] text-[color:var(--text-2)] uppercase tracking-widest">
                    {item.tag}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionFrame>
  );
}
