"use client";

import { useEffect, useState } from "react";

interface TerminalTyperProps {
  lines: readonly string[];
  speedMs?: number;
  pauseMs?: number;
}

export function TerminalTyper({
  lines,
  speedMs = 38,
  pauseMs = 1500,
}: TerminalTyperProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"type" | "hold" | "erase">("type");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setCharIndex(lines[lineIndex]?.length ?? 0);
      const t = window.setTimeout(() => {
        setLineIndex((i) => (i + 1) % lines.length);
      }, pauseMs * 2);
      return () => window.clearTimeout(t);
    }

    const current = lines[lineIndex] ?? "";
    let timeout: number;

    if (phase === "type") {
      if (charIndex < current.length) {
        timeout = window.setTimeout(() => setCharIndex(charIndex + 1), speedMs);
      } else {
        timeout = window.setTimeout(() => setPhase("hold"), pauseMs);
      }
    } else if (phase === "hold") {
      timeout = window.setTimeout(() => setPhase("erase"), 600);
    } else {
      if (charIndex > 0) {
        timeout = window.setTimeout(() => setCharIndex(charIndex - 1), speedMs / 2);
      } else {
        setLineIndex((i) => (i + 1) % lines.length);
        setPhase("type");
      }
    }

    return () => window.clearTimeout(timeout);
  }, [charIndex, phase, lineIndex, lines, speedMs, pauseMs]);

  const current = lines[lineIndex] ?? "";
  return (
    <span className="mono caret text-[color:var(--accent)] text-sm sm:text-base">
      {current.slice(0, charIndex)}
    </span>
  );
}
