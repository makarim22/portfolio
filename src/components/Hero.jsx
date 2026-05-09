import React, { useEffect, useRef } from 'react';

/* Generates random speed-line config for each render */
const LINES = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  top: `${5 + i * 9}%`,
  width: `${100 + Math.random() * 200}px`,
  duration: `${1.2 + i * 0.35}s`,
  delay: `${i * 0.4}s`,
  opacity: 0.15 + (i % 3) * 0.1,
}));

const Hero = () => {
  const badgeRef = useRef(null);

  return (
    <section className="relative min-h-[921px] flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden pt-12 scanlines">
      {/* Noise layer */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 bg-noise" />

      {/* Radial glow */}
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary-fixed/10 rounded-full blur-[120px] animate-pulse" />

      {/* Speed lines */}
      {LINES.map((line) => (
        <div
          key={line.id}
          className="speed-line"
          style={{
            top: line.top,
            width: line.width,
            animationDuration: line.duration,
            animationDelay: line.delay,
            opacity: line.opacity,
          }}
        />
      ))}

      {/* Lap / progress bar at very top */}
      <div className="absolute top-0 left-0 w-full h-[2px] z-20">
        <div className="lap-bar" style={{ animationDuration: '2.5s' }} />
      </div>

      {/* Content */}
      <div className="max-w-7xl z-10">
        {/* Blinking established badge */}
        <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-3 py-1 mb-8 font-label-caps animate-slide-left">
          <span className="w-2 h-2 rounded-full bg-on-primary-fixed indicator-blink" />
          ESTABLISHED 2024
        </div>

        <h1
          className="glitch-text font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none tracking-tighter mb-8 animate-slide-left delay-100"
          data-text="ENGINEERING PERFORMANCE INTERFACES"
        >
          ENGINEERING <br />
          <span className="text-primary-fixed text-glow">PERFORMANCE</span> <br />
          INTERFACES
        </h1>

        <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant mb-12 animate-slide-left delay-200">
          I'm a Backend Engineer and Data Professional focused on building high-velocity, scalable solutions.
          I build digital cockpits for the next generation of elite performance applications.
        </p>

        <div className="flex flex-col md:flex-row gap-6 animate-slide-up delay-300">
          <a
            href="#experience"
            className="btn-race bg-primary-fixed text-on-primary-fixed font-label-caps px-10 py-5 text-lg hover:scale-105 transition-transform active:scale-95 text-center"
          >
            START THE ENGINE
          </a>
          <a
            href="#projects"
            className="btn-race border border-primary text-primary font-label-caps px-10 py-5 text-lg hover:bg-primary/10 transition-colors text-center"
          >
            VIEW GARAGE
          </a>
        </div>

        {/* Rev counter widget */}
        <div className="mt-16 flex items-center gap-6 animate-fade-in delay-500">
          <div className="rev-counter">
            {/* SVG arc gauge */}
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#444933" strokeWidth="4" />
              <circle
                cx="60" cy="60" r="50"
                fill="none" stroke="#c8f300" strokeWidth="4"
                strokeDasharray="220 314"
                strokeLinecap="butt"
                style={{ filter: 'drop-shadow(0 0 6px #c8f300)' }}
              />
            </svg>
            <div className="rev-needle" style={{ marginLeft: '35px', marginTop: '-3px', top: '50%' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-label-caps text-primary-fixed text-[10px]">RPM</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-label-caps text-on-surface-variant text-[10px]">SYSTEM STATUS</p>
            <p className="font-headline-lg text-headline-lg text-primary-fixed" style={{ fontSize: '20px' }}>ONLINE</p>
            <p className="font-label-caps text-on-surface-variant text-[10px]">ALL SYSTEMS NOMINAL</p>
          </div>
        </div>
      </div>

      {/* Kinetic Image */}
      <div className="absolute right-0 bottom-0 md:bottom-20 w-full md:w-1/2 h-[400px] md:h-[600px] opacity-20 md:opacity-100 -z-20 md:z-0 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
        <img
          alt="Performance Engineering"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwJKdEZKwd7nDErnGOsIDS_oNJ4b9Yv_0q3MP0AJSvLyYDQYJ71396ARIUIIXnCISO2sX4yX8hJydv-xTW72S8SCSEIMJUt_d8rVxpPVNv_a-2n5urZyrHiSqba9lZHECilrRB92af03Dc8Ci57UYkuTLtxYMLwmR_XQscwRKKEI6rCOVEKTIo9SSFoOQhWqLdX5BKqhQeZwxeMhIBpi9wnzpfzJI6-xwMlBHZLiQspFBX_YqerbIzSTcTo98IdzFXf1qsjp-hw-Dn"
        />
      </div>
    </section>
  );
};

export default Hero;
