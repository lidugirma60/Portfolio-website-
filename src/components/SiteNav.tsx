"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";
import { profile } from "@/content/profile";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "about", label: "Profile" },
  { id: "modules", label: "Modules" },
  { id: "capabilities", label: "Capabilities" },
  { id: "logs", label: "Logs" },
  { id: "access", label: "Access" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between rounded-xl border px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass" : "border-transparent"
          }`}
          style={
            scrolled ? undefined : { background: "transparent", borderColor: "transparent" }
          }
        >
          <a href="#overview" className="flex items-center gap-2.5 group">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[color:var(--accent)] text-[color:var(--accent)]">
              <Terminal size={14} />
            </span>
            <span className="mono text-xs text-[color:var(--text-1)] group-hover:text-[color:var(--text-0)] transition-colors">
              {profile.systemId}
            </span>
            <span className="hidden sm:inline mono text-[10px] text-[color:var(--text-2)] tracking-widest">
              · v1.0
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`mono px-3 py-1.5 rounded-md text-xs tracking-wider uppercase transition-colors ${
                  active === s.id
                    ? "text-[color:var(--accent)] bg-[color:var(--accent-soft)]"
                    : "text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--border-strong)] hover:border-[color:var(--accent)] transition-colors"
            >
              {mounted && theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--border-strong)] hover:border-[color:var(--accent)] transition-colors"
            >
              {open ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="md:hidden mt-2 glass rounded-xl p-2 fade-up">
            <nav className="flex flex-col">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`mono px-3 py-2 rounded-md text-xs tracking-wider uppercase ${
                    active === s.id
                      ? "text-[color:var(--accent)] bg-[color:var(--accent-soft)]"
                      : "text-[color:var(--text-1)]"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
