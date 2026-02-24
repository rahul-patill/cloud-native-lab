"use client";

export function BackgroundElements() {
  const particles = [
    { top: "12%", left: "18%", delay: "0s" },
    { top: "25%", left: "75%", delay: "1s" },
    { top: "68%", left: "10%", delay: "0.5s" },
    { top: "80%", left: "85%", delay: "1.5s" },
    { top: "45%", left: "90%", delay: "2s" },
    { top: "15%", left: "50%", delay: "0.7s" },
    { top: "90%", left: "40%", delay: "1.2s" },
    { top: "55%", left: "30%", delay: "2.3s" },
  ];

  return (
    <>
      {/* Orb 1 */}
      <div className="absolute top-[-100px] left-[-150px] w-[450px] h-[450px] rounded-full opacity-40 blur-[100px] animate-float bg-[radial-gradient(circle,var(--color-brand-primary),transparent)]" />
      
      {/* Orb 2 */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-40 blur-[100px] animate-float [animation-delay:-5s] bg-[radial-gradient(circle,var(--color-brand-secondary),transparent)]" />
      
      {/* Orb 3 */}
      <div className="absolute top-[40%] left-[70%] w-[300px] h-[300px] rounded-full opacity-40 blur-[100px] animate-float [animation-delay:-3s] bg-[radial-gradient(circle,var(--color-brand-accent),transparent)]" />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-[3px] h-[3px] bg-white rounded-full animate-twinkle"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
          }}
        />
      ))}
    </>
  );
}
