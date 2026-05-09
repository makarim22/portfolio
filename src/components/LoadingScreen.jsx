import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0=ignition, 1=revving, 2=launch, 3=done
  const [rpm, setRpm] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Phase 0 → 1: ignition flicker
    const t1 = setTimeout(() => setPhase(1), 600);
    // Phase 1 → 2: rev up
    const t2 = setTimeout(() => setPhase(2), 2200);
    // Phase 2 → 3: slide away
    const t3 = setTimeout(() => setPhase(3), 3000);
    // Done
    const t4 = setTimeout(() => onComplete(), 3600);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  // Animate RPM counter
  useEffect(() => {
    if (phase < 1) return;
    const target = phase >= 2 ? 9200 : 7800;
    const step = target / 40;
    const interval = setInterval(() => {
      setRpm(prev => {
        if (prev >= target) { clearInterval(interval); return target; }
        return Math.min(prev + step, target);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [phase]);

  // Animate progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface transition-all duration-600
        ${phase >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ transition: 'opacity 0.6s ease, transform 0.6s ease', transform: phase >= 3 ? 'scale(1.1)' : 'scale(1)' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#c8f300 1px, transparent 1px), linear-gradient(90deg, #c8f300 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      {/* Central content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className={`font-headline-lg uppercase tracking-tighter mb-8 transition-all duration-500
          ${phase >= 1 ? 'text-primary text-6xl md:text-8xl' : 'text-on-surface-variant text-4xl md:text-6xl'}`}
          style={{ fontFamily: 'Anton, sans-serif', textShadow: phase >= 1 ? '0 0 30px rgba(200,243,0,0.3)' : 'none' }}
        >
          MAKARIM.DEV
        </div>

        {/* RPM readout */}
        <div className="flex items-baseline justify-center gap-2 mb-8">
          <span className="font-headline-lg text-primary-fixed tabular-nums" style={{ fontFamily: 'Anton, sans-serif', fontSize: '48px' }}>
            {Math.round(rpm).toLocaleString()}
          </span>
          <span className="font-label-caps text-on-surface-variant text-[10px]">RPM</span>
        </div>

        {/* Progress bar styled as telemetry */}
        <div className="w-72 md:w-96 mx-auto">
          <div className="flex justify-between mb-2">
            <span className="font-label-caps text-on-surface-variant text-[10px]">
              {phase === 0 ? 'IGNITION SEQUENCE' : phase === 1 ? 'SYSTEMS CHECK' : 'LAUNCHING'}
            </span>
            <span className="font-label-caps text-primary-fixed text-[10px]">{Math.round(progress)}%</span>
          </div>
          <div className="h-[3px] bg-outline-variant w-full">
            <div
              className="h-full bg-primary-fixed transition-all duration-100"
              style={{ width: `${progress}%`, boxShadow: '0 0 12px #c8f300, 0 0 4px #c8f300' }}
            />
          </div>
        </div>

        {/* Telemetry data */}
        <div className="flex justify-center gap-12 mt-8 text-center">
          {[
            { label: 'GEAR', value: phase === 0 ? 'N' : phase === 1 ? '1' : '2' },
            { label: 'BOOST', value: phase >= 2 ? 'MAX' : 'IDLE' },
            { label: 'DRS', value: phase >= 2 ? 'OPEN' : 'CLOSED' },
          ].map(d => (
            <div key={d.label}>
              <p className="font-label-caps text-on-surface-variant text-[8px] mb-1">{d.label}</p>
              <p className={`font-label-caps text-[14px] ${phase >= 2 ? 'text-primary-fixed' : 'text-on-surface'}`}>
                {d.value}
              </p>
            </div>
          ))}
        </div>

        {/* Ignition flicker overlay */}
        {phase === 0 && (
          <div className="absolute inset-0 animate-pulse bg-primary-fixed/5 pointer-events-none" />
        )}
      </div>

      {/* Speed lines during launch */}
      {phase >= 2 && (
        <>
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary-fixed to-transparent pointer-events-none"
              style={{
                top: `${6 + i * 6}%`,
                left: '-50%',
                width: `${80 + Math.random() * 120}px`,
                animation: `speedLine ${0.4 + Math.random() * 0.4}s linear ${i * 0.05}s infinite`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default LoadingScreen;
