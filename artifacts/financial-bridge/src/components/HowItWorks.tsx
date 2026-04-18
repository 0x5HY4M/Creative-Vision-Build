import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Complete the Assessment",
    desc: "Answer a few simple questions to determine your eligibility across various financial and government programs."
  },
  {
    num: "02",
    title: "Discover Opportunities",
    desc: "Instantly see which grants, tax schemes, and wealth-building strategies match your unique profile."
  },
  {
    num: "03",
    title: "Claim Your Benefits",
    desc: "We connect you directly with the providers and paperwork to secure your funds with zero hassle."
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!containerRef.current) return;

      stepsRef.current.forEach((step, index) => {
        if (!step) return;
        
        ScrollTrigger.create({
          trigger: step,
          scroller: "#smooth-wrapper",
          start: "top 85%",
          onEnter: () => {
            gsap.fromTo(step, 
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            );
          },
          once: true
        });
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      stepsRef.current.forEach((step) => {
        if (step) step.style.opacity = '1';
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="py-24 bg-background relative" data-testid="how-it-works" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-center text-white mb-20 uppercase font-display">
          How WealthQuest 2026 <span className="text-primary">Works</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-muted -z-10"></div>
          
          {steps.map((step, i) => (
            <div 
              key={i} 
              ref={el => stepsRef.current[i] = el}
              className="flex flex-col items-center text-center opacity-0"
              data-testid={`how-it-works-step-${i}`}
            >
              <div className="w-24 h-24 bg-background border-4 border-primary text-primary font-black text-3xl flex items-center justify-center mb-8 shadow-[6px_6px_0px_0px_hsl(var(--primary))] z-10">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">{step.title}</h3>
              <p className="text-muted-foreground font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
