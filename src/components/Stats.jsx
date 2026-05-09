import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { label: 'YEARS EXPERIENCE', end: 3, suffix: '+', icon: 'speed' },
  { label: 'PROJECTS DEPLOYED', end: 5, suffix: '+', icon: 'rocket_launch' },
  { label: 'TECH SKILLS', end: 15, suffix: '+', icon: 'build' },
  { label: 'LINES OF CODE', end: 50, suffix: 'K+', icon: 'terminal' },
];

const CounterStat = ({ label, end, suffix, icon, delay = 0, visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1500;
    const startTime = Date.now() + delay;
    let raf;
    const tick = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, delay]);

  return (
    <div className="neo-border p-6 text-center group hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-fixed/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="material-symbols-outlined text-2xl text-primary-fixed mb-3 block group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <p
        className="font-headline-lg text-primary-fixed mb-1 tabular-nums"
        style={{ fontFamily: 'Anton, sans-serif', fontSize: '40px', textShadow: '0 0 15px rgba(200,243,0,0.3)' }}
      >
        {count}{suffix}
      </p>
      <p className="font-label-caps text-on-surface-variant text-[10px]">{label}</p>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-outline-variant">
        <div
          className="h-full bg-primary-fixed transition-all"
          style={{
            width: visible ? '100%' : '0%',
            transitionDuration: `${1500 + delay}ms`,
            transitionTimingFunction: 'ease-out',
            boxShadow: '0 0 6px #c8f300',
          }}
        />
      </div>
    </div>
  );
};

const Stats = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 px-margin-mobile md:px-margin-desktop">
      <div className="flex items-center gap-4 mb-12">
        <div className="flex-1 h-[1px] bg-outline-variant" />
        <span className="font-label-caps text-on-surface-variant text-[10px]">PERFORMANCE METRICS</span>
        <div className="flex-1 h-[1px] bg-outline-variant" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter max-w-5xl mx-auto">
        {STATS.map((stat, i) => (
          <CounterStat key={stat.label} {...stat} delay={i * 200} visible={visible} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
