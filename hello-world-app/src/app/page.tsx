"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { BackgroundElements } from "@/components/ui/BackgroundElements";

export default function Home() {
  return (
    <main className="bg-animated relative flex min-h-screen flex-col items-center overflow-hidden px-4 py-8">
      <BackgroundElements />

      <div className="flex-1 flex items-center justify-center w-full my-auto">
        <GlassCard>
          {/* Greeting badge */}
          <div className="animate-fade-in mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">
            <span className="relative inline-block h-2 w-2 rounded-full bg-emerald-400 after:absolute after:inset-[-4px] after:rounded-full after:border-2 after:border-brand-primary after:opacity-50 after:animate-pulse-ring" />
            System Active
          </div>

          {/* Hero heading */}
          <h1 className="animate-fade-in [animation-delay:0.2s] text-glow mb-8 text-6xl font-black sm:text-8xl leading-[1.1] tracking-[-0.02em] text-white">
            Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">World!</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in [animation-delay:0.4s] mx-auto mb-16 max-w-xl text-lg font-light leading-relaxed tracking-wide text-white/40 sm:text-xl">
            Experience the future of web development with a meticulously crafted 
            <span className="text-white/70"> cloud-native</span> starter template.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in [animation-delay:0.6s] flex flex-col items-center justify-center gap-6 sm:flex-row">
            <GlowButton href="https://nextjs.org/docs">
              📖 Documentation
            </GlowButton>
            <GlowButton href="https://github.com/vercel/next.js">
              ⭐ GitHub Repository
            </GlowButton>
          </div>

          {/* Tech stack pills */}
          <div className="animate-fade-in [animation-delay:0.8s] mt-24 flex flex-wrap items-center justify-center gap-4">
            {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/5 bg-white/5 px-5 py-2 text-[11px] font-medium tracking-wider text-white/30 transition-all hover:border-white/20 hover:text-white/60"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </GlassCard>
      </div>

      {/* Footer */}
      <footer className="animate-fade-in [animation-delay:0.8s] mt-auto text-center text-[10px] font-medium tracking-[0.1em] text-white/20 uppercase py-4">
        &copy; {new Date().getFullYear()} Cloud Native Lab &bull; Refined Aesthetic
      </footer>
    </main>
  );
}
