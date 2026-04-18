import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    num: "01",
    title: "The Solar Revolt",
    desc: "How 3,200 UK homeowners reduced energy bills by 78% through government solar grants"
  },
  {
    num: "02",
    title: "The Debt Escape",
    desc: "From £34,000 in debt to £120,000 net worth in 36 months using overlooked schemes"
  },
  {
    num: "03",
    title: "The Silent Millionaire",
    desc: "Why the top 1% never pay for financial education — and how you can replicate their strategy"
  },
  {
    num: "04",
    title: "The Grant Blueprint",
    desc: "The exact 7-step process to claim £15,000+ in government money most families don't know exists"
  }
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const container = containerRef.current;
      if (!section || !container) return;

      const panels = container.querySelectorAll('.h-panel');
      
      const tl = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: section,
          scroller: "#smooth-wrapper",
          pin: true,
          scrub: 1,
          end: () => "+=" + container.offsetWidth
        }
      });

      return () => {
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-transparent relative" data-testid="horizontal-gallery">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Case Studies</span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase font-display leading-tight">
          Editor's Picks
        </h2>
      </div>

      <div ref={containerRef} className="flex md:w-[400vw] flex-col md:flex-row gap-8 px-6 md:px-0 md:pl-6 pb-12">
        {caseStudies.map((study, i) => (
          <div 
            key={i} 
            className="h-panel md:w-screen flex-shrink-0 md:pr-12"
          >
            <div className="glass-card text-white border border-white/10 p-8 md:p-12 shadow-[0_0_30px_rgba(190,242,100,0.08)] h-full min-h-[350px] flex flex-col max-w-xl">
              <div className="text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:2px_hsl(var(--accent))] opacity-50 mb-6">
                {study.num}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-4 font-display leading-tight">
                {study.title}
              </h3>
              <div className="h-1 w-16 bg-accent mb-6"></div>
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                {study.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
