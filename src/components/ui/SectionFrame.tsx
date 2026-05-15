import type { ReactNode } from "react";

interface SectionFrameProps {
  id: string;
  code: string;
  title: string;
  meta?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function SectionFrame({
  id,
  code,
  title,
  meta,
  description,
  children,
  className = "",
}: SectionFrameProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-5 sm:px-8 py-20 sm:py-24 ${className}`}
    >
      <div className="section-title">
        <div className="flex flex-col gap-1">
          <span className="label">{code}</span>
          <h2 className="text-lg">{title}</h2>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm text-[color:var(--text-1)] leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
        {meta ? <span className="label mono whitespace-nowrap">{meta}</span> : null}
      </div>
      {children}
    </section>
  );
}
