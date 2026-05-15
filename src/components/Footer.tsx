import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--border)] mt-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="pulse-dot" />
          <span className="mono text-[11px] uppercase tracking-widest text-[color:var(--text-2)]">
            {profile.systemId} · v1.0 · uptime {year}
          </span>
        </div>
        <p className="mono text-[11px] uppercase tracking-widest text-[color:var(--text-2)]">
          © {year} {profile.name} · all subsystems nominal
        </p>
      </div>
    </footer>
  );
}
