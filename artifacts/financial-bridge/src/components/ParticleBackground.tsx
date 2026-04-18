import { useEffect, useRef, useState } from 'react';

function CSSParticleFallback() {
  const dots = Array.from({ length: 80 });
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {dots.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 6;
        const dur = 4 + Math.random() * 4;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              background: 'rgba(190, 242, 100, 0.5)',
              animation: `float-dot ${dur}s ${delay}s ease-in-out infinite alternate`,
              boxShadow: '0 0 6px rgba(190, 242, 100, 0.4)',
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          />
        );
      })}
      <style>{`
        @keyframes float-dot {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          100% { transform: translateY(-20px) scale(1.3); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: import('three').WebGLRenderer | null = null;
    let animFrameId: number;

    const init = async () => {
      try {
        const THREE = await import('three');

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.offsetWidth / mount.offsetHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setSize(mount.offsetWidth, mount.offsetHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        const count = 1200;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 20;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
          color: 0xbef264,
          size: 0.04,
          transparent: true,
          opacity: 0.6,
          sizeAttenuation: true,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        let scrollY = 0;
        let mouseX = 0;
        let mouseY = 0;
        let startTime = performance.now();

        const onScroll = () => {
          scrollY = document.getElementById('smooth-wrapper')?.scrollTop || 0;
        };
        const onMouseMove = (e: MouseEvent) => {
          mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
          mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
        };
        const onTouchMove = (e: TouchEvent) => {
          if (e.touches[0]) {
            mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
            mouseY = -(e.touches[0].clientY / window.innerHeight - 0.5) * 2;
          }
        };

        document.getElementById('smooth-wrapper')?.addEventListener('scroll', onScroll);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchmove', onTouchMove, { passive: true });

        const animate = () => {
          animFrameId = requestAnimationFrame(animate);
          const t = (performance.now() - startTime) / 1000;
          particles.rotation.y = t * 0.03 + mouseX * 0.1;
          particles.rotation.x = t * 0.02 + mouseY * 0.05 + scrollY * 0.0002;
          renderer!.render(scene, camera);
        };
        animate();

        const onResize = () => {
          if (!mount || !renderer) return;
          camera.aspect = mount.offsetWidth / mount.offsetHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(mount.offsetWidth, mount.offsetHeight);
        };
        window.addEventListener('resize', onResize);

        return () => {
          cancelAnimationFrame(animFrameId);
          document.getElementById('smooth-wrapper')?.removeEventListener('scroll', onScroll);
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('touchmove', onTouchMove);
          window.removeEventListener('resize', onResize);
          geometry.dispose();
          material.dispose();
          renderer?.dispose();
          if (mount.contains(renderer?.domElement!)) {
            mount.removeChild(renderer?.domElement!);
          }
        };
      } catch {
        setWebGLFailed(true);
        return undefined;
      }
    };

    let cleanup: (() => void) | undefined;
    init().then(fn => { cleanup = fn; });

    return () => {
      if (cleanup) cleanup();
      else cancelAnimationFrame(animFrameId);
    };
  }, []);

  if (webGLFailed) {
    return <CSSParticleFallback />;
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      data-testid="particle-background"
    />
  );
}
