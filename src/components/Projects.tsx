"use client";

import { useMemo, useState } from "react";
import { projects, projectFilters, type ProjectCategory } from "@/content/projects";
import { SectionFrame } from "./ui/SectionFrame";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "ALL">("ALL");

  const flagship = useMemo(
    () =>
      projects
        .filter((p) => p.role === "FLAGSHIP")
        .filter((p) => filter === "ALL" || p.categories.includes(filter)),
    [filter],
  );

  const secondary = useMemo(
    () =>
      projects
        .filter((p) => p.role === "SECONDARY")
        .filter((p) => filter === "ALL" || p.categories.includes(filter)),
    [filter],
  );

  return (
    <SectionFrame
      id="modules"
      code="LAYER 02 · CORE EVIDENCE"
      title="Active Subsystems"
      meta="6 MODULES · LIVE"
      description="Each module is a bounded capability with stated threat context, stack, and engineering depth."
    >
      <div
        role="tablist"
        aria-label="Filter modules"
        className="mb-8 flex flex-wrap items-center gap-2"
      >
        {projectFilters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={`mono text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-md border transition-colors ${
                active
                  ? "border-[color:var(--accent)] text-[color:var(--accent)] bg-[color:var(--accent-soft)]"
                  : "border-[color:var(--border-strong)] text-[color:var(--text-1)] hover:text-[color:var(--text-0)] hover:border-[color:var(--accent)]"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {flagship.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-5">
          {flagship.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      {secondary.length > 0 ? (
        <>
          <div className="section-title mt-16">
            <div>
              <span className="label">SECONDARY SUBSYSTEMS</span>
              <h3 className="mono text-base tracking-widest uppercase mt-1">
                Lower criticality
              </h3>
            </div>
            <span className="label mono">{secondary.length} ACTIVE</span>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {secondary.map((p) => (
              <ProjectCard key={p.id} project={p} variant="secondary" />
            ))}
          </div>
        </>
      ) : null}
    </SectionFrame>
  );
}

function EmptyState() {
  return (
    <div className="surface p-10 text-center">
      <p className="mono text-sm text-[color:var(--text-1)]">
        no modules match the current filter · adjust to view subsystems
      </p>
    </div>
  );
}
