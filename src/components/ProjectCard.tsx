"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import type { ProjectModule } from "@/content/projects";
import { Tag } from "./ui/Tag";

interface ProjectCardProps {
  project: ProjectModule;
  variant?: "flagship" | "secondary";
}

export function ProjectCard({ project, variant = "flagship" }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const isFlagship = variant === "flagship";

  return (
    <article
      className="surface module-card relative overflow-hidden p-0"
      aria-labelledby={`${project.id}-title`}
    >
      <div className="signal-line" aria-hidden="true" />

      <div className="flex items-center justify-between px-5 sm:px-6 pt-5">
        <div className="flex items-center gap-3 min-w-0">
          <span className="label">{project.code}</span>
          <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-[color:var(--text-2)]" />
          <span className="mono text-[10px] uppercase tracking-widest text-[color:var(--text-2)] truncate">
            {project.categories.join(" · ")}
          </span>
        </div>
        <div className="flex items-center gap-2 mono text-[10px] text-[color:var(--text-2)]">
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${
              project.state === "STANDBY"
                ? "bg-[color:var(--text-2)]"
                : "bg-[color:var(--accent)]"
            } ${project.state !== "STANDBY" ? "pulse-dot" : ""}`}
          />
          {project.state}
        </div>
      </div>

      <div className="px-5 sm:px-6 pt-3">
        <h3
          id={`${project.id}-title`}
          className={`font-semibold tracking-tight ${
            isFlagship ? "text-2xl sm:text-[26px]" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-[color:var(--text-1)]">
          {project.tagline}
        </p>
      </div>

      <div className="px-5 sm:px-6 pt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, isFlagship ? 6 : 4).map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
        {project.stack.length > (isFlagship ? 6 : 4) ? (
          <Tag>+{project.stack.length - (isFlagship ? 6 : 4)}</Tag>
        ) : null}
      </div>

      <div className="px-5 sm:px-6 pt-4 grid sm:grid-cols-2 gap-3">
        <Block label="THREAT" body={project.threat} />
        <Block label="RELEVANCE" body={project.relevance} />
      </div>

      <div className="px-5 sm:px-6 pt-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mono text-[11px] uppercase tracking-widest text-[color:var(--text-1)] hover:text-[color:var(--accent)] inline-flex items-center gap-1.5 transition-colors"
        >
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
          {open ? "Collapse depth" : "Expand depth"}
        </button>
      </div>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pt-4 grid sm:grid-cols-2 gap-3">
            <Block label="FUNCTION" body={project.function} />
            <div className="surface-strong rounded-lg p-3.5">
              <span className="label">DEPTH</span>
              <ul className="mt-2 space-y-1.5">
                {project.depth.map((d) => (
                  <li key={d} className="text-sm text-[color:var(--text-1)] flex gap-2">
                    <span className="text-[color:var(--accent)] mono text-xs mt-0.5">›</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-5 sm:px-6 pt-3 flex flex-wrap gap-1.5">
            {project.features.map((f) => (
              <Tag key={f} accent>
                {f}
              </Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-6 py-5 mt-2 flex items-center justify-between border-t border-[color:var(--border)]">
        <div className="flex items-center gap-2">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !py-2 !px-3 !text-[11px]"
          >
            <Github size={13} />
            GitHub
          </a>
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2 !px-3 !text-[11px]"
            >
              <ExternalLink size={13} />
              Live
            </a>
          ) : null}
        </div>
        <span className="mono text-[10px] text-[color:var(--text-2)]">
          ROLE: {project.role}
        </span>
      </div>
    </article>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="surface-strong rounded-lg p-3.5">
      <span className="label">{label}</span>
      <p className="mt-1.5 text-sm text-[color:var(--text-1)] leading-relaxed">{body}</p>
    </div>
  );
}
