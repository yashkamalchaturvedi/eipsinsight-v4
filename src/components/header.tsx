'use client';

import { cn } from '@/lib/utils';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        'relative w-full border-b border-cyan-300/20 bg-background/60 backdrop-blur-xl',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">

        {/* Eyebrow / Context */}
        {eyebrow && (
          <div className="mb-3">
            <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-black/30 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-emerald-300 via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
        )}
      </div>

      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </header>
  );
}
