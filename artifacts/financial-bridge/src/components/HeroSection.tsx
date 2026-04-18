import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 }
      );
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );
      tl.fromTo(buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.4"
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], { opacity: 1 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden px-6 pt-20 pb-16"
      data-testid="section-hero"
    >
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(73 87% 58%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <svg className="absolute top-1/4 right-8 md:right-16 opacity-30 animate-spin" style={{ animationDuration: '20s' }} width="100" height="100" viewBox="0 0 120 120">
          <polygon points="60,5 116,90 4,90" fill="none" stroke="hsl(73 87% 58%)" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-1/4 left-8 md:left-16 opacity-20 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} width="70" height="70" viewBox="0 0 80 80">
          <rect x="10" y="10" width="60" height="60" fill="none" stroke="hsl(73 87% 58%)" strokeWidth="2" transform="rotate(15 40 40)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center w-full px-4">
        <div className="inline-block bg-accent/10 border border-accent/30 px-4 py-2 mb-6 text-accent text-sm font-bold tracking-widest uppercase">
          UK's #1 Financial Discovery Platform
        </div>
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase mb-6 opacity-0"
          data-testid="hero-title"
        >
          Unlock Your{' '}
          <span style={{ color: 'hsl(73 87% 58%)' }}>Wealth</span>{' '}
          Potential
        </h1>
        <p
          ref={subtitleRef}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mb-12 opacity-0 font-medium leading-relaxed"
          data-testid="hero-subtitle"
        >
          Discover government-backed schemes, solar energy grants, and investment programs designed for your financial security. Trusted by 12,000+ UK families.
        </p>
        <button
          ref={buttonRef}
          className="font-black text-base md:text-xl px-8 md:px-12 py-4 md:py-5 border-4 transition-all uppercase tracking-wider opacity-0"
          style={{
            background: 'hsl(var(--accent))',
            color: 'hsl(var(--accent-foreground))',
            borderColor: 'hsl(var(--accent))',
            boxShadow: '8px 8px 0px 0px rgba(190, 242, 100, 0.4)',
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
            (e.currentTarget as HTMLButtonElement).style.transform = 'translate(4px, 4px)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '4px 4px 0px 0px rgba(190, 242, 100, 0.4)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'translate(0, 0)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '8px 8px 0px 0px rgba(190, 242, 100, 0.4)';
          }}
        >
          See What You Qualify For
        </button>
      </div>
    </section>
  );
}
