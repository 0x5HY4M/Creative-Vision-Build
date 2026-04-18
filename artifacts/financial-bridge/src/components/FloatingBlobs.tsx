export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
          background: 'radial-gradient(ellipse, rgba(190,242,100,0.05) 0%, transparent 70%)',
          animation: 'blob1 18s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%',
          background: 'radial-gradient(ellipse, rgba(190,242,100,0.04) 0%, transparent 70%)',
          animation: 'blob2 22s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '30%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50% 50% 40% 60% / 40% 60% 50% 50%',
          background: 'radial-gradient(ellipse, rgba(249,194,30,0.03) 0%, transparent 70%)',
          animation: 'blob3 26s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(3%, 5%) rotate(15deg) scale(1.05); }
          50% { transform: translate(-2%, 8%) rotate(-10deg) scale(0.97); }
          75% { transform: translate(4%, 2%) rotate(8deg) scale(1.03); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-4%, -3%) rotate(-12deg) scale(1.08); }
          66% { transform: translate(2%, -6%) rotate(10deg) scale(0.95); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          40% { transform: translate(3%, 4%) rotate(20deg) scale(1.1); }
          80% { transform: translate(-3%, 2%) rotate(-15deg) scale(0.92); }
        }
      `}</style>
    </div>
  );
}
