import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Wealth Building",
    description: "Access exclusive investment programs designed to accelerate your portfolio growth with expert-backed strategies.",
    color: "bg-background",
    textColor: "text-white"
  },
  {
    title: "Financial Security",
    description: "Discover protection and insurance schemes that safeguard your family's future against unexpected downturns.",
    color: "bg-primary",
    textColor: "text-primary-foreground"
  },
  {
    title: "Government Grants",
    description: "Unlock funding for solar energy, home improvements, and small business initiatives that you already qualify for.",
    color: "bg-accent",
    textColor: "text-accent-foreground"
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
          ease: "power2.out"
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
          transform: "none"
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary relative py-20 min-h-screen flex items-center overflow-hidden" data-testid="sticky-card-stack">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="mb-12 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase font-display">
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
              className={`absolute top-0 left-0 w-full p-8 md:p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${card.color} ${card.textColor} transition-shadow duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1`}
              style={{ transformStyle: 'preserve-3d' }}
              data-testid={`card-stack-item-${index}`}
            >
              <div className="text-sm font-black tracking-widest mb-4 opacity-70">0{index + 1}</div>
              <h3 className="text-3xl font-black mb-4 font-display uppercase">{card.title}</h3>
              <p className="text-lg font-medium leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
