import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MysticCurve() {
  const curveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!curveRef.current) return;

    gsap.to(curveRef.current, {
      attr: { d: "M-100 100 Q 500 400 1100 100 T 2300 100" },
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      force3D: true
    });

    gsap.to(curveRef.current, {
      scale: 1.1,
      x: -50,
      y: -30,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      force3D: true
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617]" aria-hidden="true">
      <svg
        className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-20 blur-[100px]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          ref={curveRef}
          d="M-100 200 Q 400 100 900 300 T 1900 200"
          stroke="hsl(var(--accent))"
          strokeWidth="120"
          strokeLinecap="round"
          className="will-change-transform"
        />
      </svg>
      <div className="absolute inset-0 backdrop-blur-[120px] bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]" />
    </div>
  );
}
