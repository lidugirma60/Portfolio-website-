"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Twitter,
  Youtube,
  Copy,
  Check,
  Globe,
  MessageSquare,
} from "lucide-react";
import { profile } from "@/content/profile";
import { SectionFrame } from "./ui/SectionFrame";

const CHANNELS = [
  {
    id: "github",
    label: "GitHub",
    icon: Github,
    handle: profile.social.github.replace(/^https?:\/\//, ""),
    href: profile.social.github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    handle: profile.social.linkedin.replace(/^https?:\/\//, ""),
    href: profile.social.linkedin,
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    handle: profile.social.email,
    href: `mailto:${profile.social.email}`,
  },
  {
    id: "telegram",
    label: "Telegram",
    icon: MessageSquare,
    handle: profile.social.telegram.replace(/^https?:\/\//, ""),
    href: profile.social.telegram,
  },
  {
    id: "twitter",
    label: "Twitter / X",
    icon: Twitter,
    handle: profile.social.twitter.replace(/^https?:\/\//, ""),
    href: profile.social.twitter,
  },
  {
    id: "youtube",
    label: "YouTube",
    icon: Youtube,
    handle: profile.social.youtube.replace(/^https?:\/\//, ""),
    href: profile.social.youtube,
  },
  {
    id: "domain",
    label: "Portfolio domain",
    icon: Globe,
    handle: profile.social.domain.replace(/^https?:\/\//, ""),
    href: profile.social.domain,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <SectionFrame
      id="access"
      code="LAYER 04 · ACCESS GATEWAY"
      title="Authorized Uplinks"
      meta="ENCRYPTED · NO_AUTH_BYPASS"
      description="Direct channels only. Choose an uplink or send a structured request below."
    >
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-5">
        <div className="surface p-6 corner-ticks relative">
          <div className="flex items-center justify-between mb-5">
            <span className="label">channels.open()</span>
            <button
              type="button"
              onClick={copyEmail}
              className="mono text-[11px] uppercase tracking-widest inline-flex items-center gap-1.5 text-[color:var(--text-1)] hover:text-[color:var(--accent)] transition-colors"
              aria-live="polite"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? "copied" : "copy email"}
            </button>
          </div>
          <ul className="grid sm:grid-cols-2 gap-2.5">
            {CHANNELS.map(({ id, label, icon: Icon, handle, href }) => (
              <li key={id}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="surface-strong rounded-lg p-3.5 flex items-center gap-3 group hover:!border-[color:var(--accent)] transition-colors"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--border-strong)] text-[color:var(--text-1)] group-hover:border-[color:var(--accent)] group-hover:text-[color:var(--accent)] transition-colors">
                    <Icon size={15} />
                  </span>
                  <div className="min-w-0">
                    <p className="mono text-[10px] uppercase tracking-widest text-[color:var(--text-2)]">
                      {label}
                    </p>
                    <p className="text-sm text-[color:var(--text-0)] truncate">
                      {handle}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(
              `[${profile.systemId}] ${data.get("subject") ?? "Inbound request"}`,
            );
            const body = encodeURIComponent(
              `From: ${data.get("name") ?? ""} <${data.get("email") ?? ""}>\n\n${data.get("message") ?? ""}`,
            );
            window.location.href = `mailto:${profile.social.email}?subject=${subject}&body=${body}`;
            setSubmitted(true);
          }}
          className="surface p-6 corner-ticks relative"
        >
          <div className="flex items-center justify-between mb-5">
            <span className="label">request.submit()</span>
            <span className="mono text-[10px] text-[color:var(--accent)]">
              SECURE FORM
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <label className="block">
              <span className="label mb-1.5 block">NAME</span>
              <input
                name="name"
                required
                placeholder="Operator name"
                className="input"
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="label mb-1.5 block">EMAIL</span>
              <input
                name="email"
                required
                type="email"
                placeholder="you@domain.tld"
                className="input"
                autoComplete="email"
              />
            </label>
          </div>

          <label className="block mt-3">
            <span className="label mb-1.5 block">SUBJECT</span>
            <input
              name="subject"
              required
              placeholder="Internship · Collaboration · Bounty"
              className="input"
            />
          </label>

          <label className="block mt-3">
            <span className="label mb-1.5 block">MESSAGE</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Context, goal, timeline."
              className="textarea resize-y"
            />
          </label>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="mono text-[10px] text-[color:var(--text-2)] uppercase tracking-widest">
              {submitted
                ? "request signed · opening secure channel"
                : "this form opens your mail client securely"}
            </p>
            <button type="submit" className="btn-primary">
              <Send size={14} />
              Transmit
            </button>
          </div>
        </form>
      </div>
    </SectionFrame>
  );
}
