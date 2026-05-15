"use client";

import Link from "next/link";
import { ArrowDownRight, Download } from "lucide-react";
import { profile } from "@/content/profile";
import { ParticleField } from "./ParticleField";
import { TerminalTyper } from "./TerminalTyper";

export function Hero() {
  return (
    <section
      id="overview"
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="absolute inset-0 opacity-50" aria-hidden="true">
        <ParticleField />
      </div>
      <div className="scan-line" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 pt-32 sm:pt-40 pb-24 sm:pb-28">
        <div className="flex items-center gap-3">
          <span className="pulse-dot" />
          <span className="label">
            SYSTEM: {profile.systemId} · STATUS:&nbsp;
            <span className="text-[color:var(--ok)]">{profile.status}</span>
          </span>
        </div>

        <h1
          id="hero-heading"
          className="mt-6 max-w-3xl text-[40px] leading-[1.05] sm:text-[64px] sm:leading-[1.02] font-semibold tracking-tight"
        >
          {profile.name}
          <span className="block mt-3 text-[18px] sm:text-[22px] font-normal text-[color:var(--text-1)] tracking-normal">
            {profile.role}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mono text-[color:var(--text-1)] text-sm sm:text-base">
          &gt; {profile.tagline}
        </p>

        <div
          className="surface mt-10 p-5 sm:p-6 corner-ticks max-w-2xl"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="h-2 w-2 rounded-full bg-[color:var(--danger)]" />
            <span className="h-2 w-2 rounded-full bg-[color:var(--warn)]" />
            <span className="h-2 w-2 rounded-full bg-[color:var(--ok)]" />
            <span className="label ml-2">// selem_os :: live_status</span>
          </div>

          <div className="space-y-2">
            <div className="mono text-xs text-[color:var(--text-2)]">
              $ tail -f /var/log/selem_os/status
            </div>
            <TerminalTyper lines={profile.terminalLines} />
            <div className="mono text-xs text-[color:var(--text-2)] mt-2">
              monitoring developer capabilities… all systems operational.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="#modules" className="btn-primary">
            Enter system / View modules
            <ArrowDownRight size={16} />
          </Link>
          <a
            href={profile.resumeUrl}
            className="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} />
            Download resume
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          {STATS.map((s) => (
            <div key={s.label} className="surface px-4 py-3">
              <dt className="label">{s.label}</dt>
              <dd className="mono mt-1 text-[color:var(--text-0)] text-lg">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const STATS = [
  { label: "Modules", value: "6 / 6" },
  { label: "Posture", value: "DEFENSIVE" },
  { label: "Uplink", value: "ONLINE" },
  { label: "Layer", value: "L1 — OVERVIEW" },
];
