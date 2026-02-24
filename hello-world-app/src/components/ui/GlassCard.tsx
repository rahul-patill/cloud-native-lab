"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`glass-effect relative z-10 mx-auto w-full max-w-2xl px-8 py-12 text-center sm:px-16 sm:py-24 rounded-[32px] ${className}`}>
      {children}
    </div>
  );
}
