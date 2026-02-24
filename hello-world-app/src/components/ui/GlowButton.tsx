"use client";

import { ReactNode } from "react";

interface GlowButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function GlowButton({ href, children, className = "" }: GlowButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative z-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-10 py-4 text-sm font-semibold text-white transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95 hover:shadow-glow-primary hover:border-white/20 hover:bg-white/12 hover:-translate-y-1 ${className}`}
    >
      {children}
    </a>
  );
}
