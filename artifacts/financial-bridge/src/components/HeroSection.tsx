import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ParticleBackground from '@/components/ParticleBackground';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, force3D: true }
      );
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, force3D: true },
        "-=0.2"
      );
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, force3D: true },
        "-=0.5"
      );
      tl.fromTo(buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)", force3D: true },
        "-=0.4"
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, buttonRef.current], { opacity: 1 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden px-6 pt-20 pb-16"
      data-testid="section-hero"
    >
      <ParticleBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center w-full px-4">
        <div
          ref={badgeRef}
          className="inline-block glass-card px-4 py-2 mb-6 text-accent text-sm font-bold tracking-widest uppercase opacity-0"
        >
          USA's #1 Financial Discovery Platform
        </div>
        <h1
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight uppercase mb-6 opacity-0"
          data-testid="hero-title"
        >
          Unlock Your{' '}
          <span className="text-accent glow-lime-text">Wealth</span>{' '}
          Potential
        </h1>
        <p
          ref={subtitleRef}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mb-12 opacity-0 font-medium leading-relaxed"
          data-testid="hero-subtitle"
        >
          Discover government-backed schemes, solar energy grants, and investment programs designed for your financial security. Trusted by 12,000+ American families.
        </p>
        <button
          ref={buttonRef}
          className="font-black text-base md:text-xl px-8 md:px-12 py-4 md:py-5 border-2 transition-all uppercase tracking-wider opacity-0 animate-pulse-glow min-h-[44px]"
          style={{
            background: 'hsl(var(--accent))',
            color: 'hsl(var(--accent-foreground))',
            borderColor: 'hsl(var(--accent))',
          }}
          data-testid="hero-cta"
          onClick={() => {
            const form = document.getElementById('conversational-form');
            if (form) {
              document.getElementById('smooth-wrapper')?.scrollTo({
                top: form.offsetTop - 100,
                behavior: 'smooth'
              });
            }
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
            (e.currentTarget as HTMLButtonElement).style.color = 'hsl(var(--accent))';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'hsl(var(--accent))';
            (e.currentTarget as HTMLButtonElement).style.color = 'hsl(var(--accent-foreground))';
          }}
        >
          See What You Qualify For
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-8 bg-accent animate-pulse" />
        <span className="text-xs text-accent tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
