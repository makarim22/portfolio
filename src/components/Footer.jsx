import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
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
    <footer
      ref={ref}
      className="w-full flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-gutter gap-base bg-surface-container-lowest border-t border-outline-variant relative overflow-hidden"
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#c8f300 1px, transparent 1px), linear-gradient(90deg, #c8f300 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div
        className="font-headline-lg text-headline-lg text-primary uppercase z-10 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-30px)',
        }}
      >
        MAKARIM.DEV
      </div>

      <div
        className="font-label-caps text-on-surface-variant text-center z-10 flex items-center gap-2 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transitionDelay: '200ms',
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed indicator-blink" />
        © 2026 PERFORMANCE PORTFOLIO. BUILT FOR SPEED.
      </div>

      <div
        className="flex gap-gutter z-10 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(30px)',
          transitionDelay: '400ms',
        }}
      >
        <a
          className="font-label-caps text-on-surface-variant hover:text-primary-fixed transition-all duration-300 opacity-80 hover:opacity-100 hover:tracking-wider"
          href="https://github.com/makarim22"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          className="font-label-caps text-on-surface-variant hover:text-primary-fixed transition-all duration-300 opacity-80 hover:opacity-100 hover:tracking-wider"
          href="https://www.linkedin.com/in/makarimm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
      </div>



      {/* Bottom racing stripe */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-outline-variant">
        <div
          className="h-full bg-primary-fixed transition-all"
          style={{
            width: visible ? '100%' : '0%',
            transitionDuration: '2s',
            transitionTimingFunction: 'ease-out',
            boxShadow: '0 0 8px #c8f300',
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
