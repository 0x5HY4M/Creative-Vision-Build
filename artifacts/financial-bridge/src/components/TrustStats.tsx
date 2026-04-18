import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 5.8, suffix: "M+", prefix: "$", label: "Distributed" },
  { value: 12000, suffix: "+", prefix: "", label: "Families Helped" },
  { value: 94, suffix: "%", prefix: "", label: "Approval Rate" }
];

export default function TrustStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      countersRef.current.forEach((counter, i) => {
        if (!counter) return;
        const targetValue = stats[i].value;

        ScrollTrigger.create({
          trigger: containerRef.current,
          scroller: "#smooth-wrapper",
          start: "top 80%",
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: targetValue,
              duration: 2,
              force3D: true,
              snap: { innerHTML: targetValue > 100 ? 1 : 0.1 },
              ease: "power2.out",
              onUpdate: function () {
                const val = parseFloat(this.targets()[0].innerHTML);
                counter.innerHTML = val > 1000
                  ? val.toLocaleString()
                  : (stats[i].value % 1 !== 0 ? val.toFixed(1) : Math.round(val).toString());
              }
            });
          },
          once: true
        });
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      countersRef.current.forEach((counter, i) => {
        if (!counter) return;
        counter.innerHTML = stats[i].value > 1000
          ? stats[i].value.toLocaleString()
          : stats[i].value.toString();
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-12 relative"
      data-testid="trust-stats-bar"
    >
      <div className="bg-white/[0.02] border-y border-white/10 max-w-7xl mx-auto p-6 md:p-12 will-change-transform translate-z-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className={`text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tighter mb-2 ${i === 0 ? 'text-gold' : i === 1 ? 'text-accent' : 'text-white'}`}>
                {stat.prefix && <span>{stat.prefix}</span>}
                <span ref={(el) => countersRef.current[i] = el}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <div className="text-lg md:text-xl font-bold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
