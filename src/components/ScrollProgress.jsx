import React, { useEffect, useRef, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0);
  const lastScroll = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);

      // Scroll velocity
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const v = Math.abs(scrollTop - lastScroll.current) / dt * 100; // px/ms → scaled
        setSpeed(Math.min(Math.round(v * 8), 320));
      }
      lastScroll.current = scrollTop;
      lastTime.current = now;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Decay speed back to 0
  useEffect(() => {
    const decay = setInterval(() => {
      setSpeed(prev => Math.max(0, prev - 4));
    }, 50);
    return () => clearInterval(decay);
  }, []);

  const sectorColors = ['#c8f300', '#afd500', '#ffffff']; // S1, S2, S3
  const currentSector = progress < 33 ? 0 : progress < 66 ? 1 : 2;

  return (
    <div className="fixed right-12 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center gap-3">


      {/* Speedometer readout */}
      <div className="text-center mb-2">
        <span
          className="font-headline-lg tabular-nums block"
          style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: '18px',
            color: speed > 200 ? '#c8f300' : speed > 100 ? '#afd500' : '#c5c9ac',
            textShadow: speed > 200 ? '0 0 10px rgba(200,243,0,0.5)' : 'none',
            transition: 'color 0.2s, text-shadow 0.2s',
          }}
        >
          {speed}
        </span>
        <span className="font-label-caps text-[7px] text-on-surface-variant block">KM/H</span>
      </div>

      {/* Vertical track */}
      <div className="relative w-[3px] h-80 bg-outline-variant overflow-visible">

        {/* Sector markers */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[33%] w-3 h-[1px] bg-on-surface-variant" />
        <div className="absolute left-1/2 -translate-x-1/2 top-[66%] w-3 h-[1px] bg-on-surface-variant" />

        {/* Fill */}
        <div
          className="absolute bottom-0 left-0 w-full transition-all duration-150"
          style={{
            height: `${progress}%`,
            background: sectorColors[currentSector],
            boxShadow: `0 0 8px ${sectorColors[currentSector]}`,
          }}
        />

        {/* Car indicator */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-150"
          style={{ 
            bottom: `${progress}%`,
            perspective: '500px' 
          }}
        >
          <div className="relative transform transition-transform duration-300" 
               style={{ 
                 transform: `rotateX(15deg) rotateY(-20deg) skewX(-10deg)` 
               }}>
            {/* 3D Depth Shadow */}
            <img 
              src="./racing-car.svg" 
              alt=""
              className="w-[300px] h-auto -rotate-90 -translate-x-[152px] opacity-30 blur-[4px] absolute brightness-0"
            />
            {/* Main Car */}
            <img 
              src="./racing-car.svg" 
              alt="Car"
              className="w-[300px] h-auto -rotate-90 -translate-x-[150px] relative"
              style={{ filter: 'drop-shadow(0 0 15px rgba(200,243,0,0.6)) brightness(1.1)' }}
            />

          </div>
        </div>


      </div>

      {/* Sector labels */}
      <div className="flex flex-col items-center gap-0.5 mt-1">
        {['S1', 'S2', 'S3'].map((s, i) => (
          <span
            key={s}
            className="font-label-caps text-[7px] transition-colors duration-200"
            style={{ color: currentSector === i ? sectorColors[i] : '#8f9378' }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Lap percentage */}
      <span className="font-label-caps text-primary-fixed text-[9px] mt-1">
        {Math.round(progress)}%
      </span>
    </div>
  );
};

export default ScrollProgress;
