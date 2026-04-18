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
          fastScrollEnd: true,
          onEnter: () => {
            gsap.fromTo(step,
              { opacity: 0, y: 50, willChange: 'transform, opacity' },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", force3D: true, willChange: 'auto', delay: index * 0.1 }
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
    <section className="py-24 bg-transparent relative" data-testid="how-it-works" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-3">Simple Process</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center text-white uppercase font-display leading-tight">
            How WealthQuest <span className="text-accent">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {steps.map((step, i) => (
            <div
              key={i}
              ref={el => stepsRef.current[i] = el}
              className="flex flex-col items-center text-center opacity-0"
              data-testid={`how-it-works-step-${i}`}
            >
              <div className="w-24 h-24 bg-white/[0.02] border border-accent/50 text-accent font-black text-3xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(190,242,100,0.15)] z-10 animate-icon-glow will-change-transform translate-z-0">
                {step.num}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 uppercase leading-tight">{step.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
