import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Wealth Building",
    description: "Access exclusive investment programs designed to accelerate your portfolio growth with expert-backed strategies.",
    numColor: "text-accent"
  },
  {
    title: "Financial Security",
    description: "Discover protection and insurance schemes that safeguard your family's future against unexpected downturns.",
    numColor: "text-gold"
  },
  {
    title: "Government Grants",
    description: "Unlock funding for solar energy, home improvements, and small business initiatives that you already qualify for.",
    numColor: "text-white"
  }
];

export default function StickyCardStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const section = sectionRef.current;
      const container = containerRef.current;
      if (!section || !container) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scroller: "#smooth-wrapper",
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          fastScrollEnd: true,
        }
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, {
          y: index * 60 + 120,
          rotateX: 15,
          scale: 0.92,
          opacity: 0,
          zIndex: index + 1,
          willChange: 'transform, opacity',
        });

        tl.to(card, {
          y: index * 36,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          force3D: true,
        }, index * 1.2);
      });
    });

    mm.add("(max-width: 767px) or (prefers-reduced-motion: reduce)", () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.set(card, {
          y: 0,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          zIndex: index + 1,
          position: "relative",
          willChange: 'auto',
          force3D: true,
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-transparent relative py-20 min-h-[100dvh] flex items-center overflow-hidden"
      data-testid="sticky-card-stack"
      style={{ perspective: '1200px' }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="mb-12 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight uppercase font-display">
            The Pillars of <br /><span className="text-accent glow-lime-text">Generational</span> Wealth
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            Three core strategies to build, protect, and maximize your financial future. Scroll to see each pillar connect to your overall potential.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative h-[420px] w-full"
          style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="absolute top-0 left-0 w-full p-8 md:p-12 bg-white/[0.02] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur-xl will-change-transform translate-z-0 text-white transition-colors duration-300 hover:border-accent/30"
              style={{ transformStyle: 'preserve-3d' }}
              data-testid={`card-stack-item-${index}`}
            >
              <div className={`text-sm font-black tracking-widest mb-4 ${card.numColor}`}>0{index + 1}</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 font-display uppercase leading-tight">{card.title}</h3>
              <p className="text-base md:text-lg font-medium leading-relaxed text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
