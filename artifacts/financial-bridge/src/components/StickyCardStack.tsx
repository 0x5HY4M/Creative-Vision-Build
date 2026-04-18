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
        }
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.set(card, {
          y: index * 40 + 100, // Initial offset down
          rotateY: 15,
          scale: 0.9,
          opacity: 0,
          zIndex: index + 1
        });

        tl.to(card, {
          y: index * 40,
          rotateY: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          force3D: true
        }, index * 1.5);
      });
    });

    mm.add("(max-width: 767px) or (prefers-reduced-motion: reduce)", () => {
      // Mobile fallback: simple scroll list
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.set(card, {
          y: 0,
          rotateY: 0,
          scale: 1,
          opacity: 1,
          zIndex: index + 1,
          position: "relative",
          marginBottom: "1rem",
          transform: "none",
          force3D: true
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-transparent relative py-20 min-h-[100dvh] flex items-center overflow-hidden" data-testid="sticky-card-stack">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="mb-12 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight uppercase font-display">
            The Pillars of <br/><span className="text-accent">Generational</span> Wealth
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Three core strategies to build, protect, and maximize your financial future. As you scroll, discover how each pillar connects to your overall potential.
          </p>
        </div>
        
        <div ref={containerRef} className="relative h-[400px] w-full perspective-1000">
          {cards.map((card, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`absolute top-0 left-0 w-full p-8 md:p-10 border border-white/10 shadow-[0_0_30px_rgba(190,242,100,0.1)] glass-card glass-card-hover text-white transition-all duration-300 hover:-translate-y-1`}
              style={{ transformStyle: 'preserve-3d' }}
              data-testid={`card-stack-item-${index}`}
            >
              <div className={`text-sm font-black tracking-widest mb-4 opacity-100 ${card.numColor}`}>0{index + 1}</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 font-display uppercase leading-tight">{card.title}</h3>
              <p className="text-lg font-medium leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
