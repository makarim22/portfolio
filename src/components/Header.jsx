import React from 'react';

const Header = () => {
  return (
    <>
      {/* Ticker tape — scrolling race data strip */}
      <div className="ticker-wrapper bg-primary-fixed text-on-primary-fixed py-1.5 overflow-hidden">
        <div className="ticker-content font-label-caps text-[10px] tracking-widest">
          {Array(4).fill('⬛ MAKARIM.DEV  •  BACKEND ENGINEER  •  GO  •  REACT  •  POSTGRESQL  •  DOCKER  •  JWT  •  REST API  •  TYPESCRIPT  •  ').join(' ')}
        </div>
      </div>

      <nav className="sticky top-0 z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full bg-surface/95 backdrop-blur-sm border-b border-outline-variant">
        <div className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter" style={{ fontSize: '22px' }}>
          MAKARIM.DEV
        </div>
        <div className="hidden md:flex gap-gutter items-center">
          <a className="nav-link" href="#about">ABOUT</a>
          <a className="nav-link" href="#skills">SKILLS</a>
          <a className="nav-link" href="#experience">EXPERIENCE</a>
          <a className="nav-link" href="#projects">PROJECTS</a>
        </div>
        <a
          href="#contact"
          className="btn-race bg-primary-fixed text-on-primary-fixed font-label-caps px-6 py-3 hover:scale-105 active:scale-90 transition-transform"
        >
          GET IN TOUCH
        </a>
      </nav>
    </>
  );
};

export default Header;
