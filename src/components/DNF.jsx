import React from 'react';

const DNF = () => {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-8 text-center overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-on-surface select-none">
          404
        </div>
      </div>

      {/* Racing flag pattern border top/bottom */}
      <div className="absolute top-0 left-0 w-full h-8 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#fff_10px,#fff_20px)] opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-8 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#fff_10px,#fff_20px)] opacity-20" />

      <div className="z-10 max-w-2xl">
        <div className="inline-block border-4 border-error text-error px-8 py-4 mb-8 transform -skew-x-12 animate-pulse">
          <h1 className="font-display-lg text-6xl md:text-8xl m-0 leading-none">DNF</h1>
        </div>
        
        <h2 className="font-headline-xl text-headline-xl uppercase mb-6 tracking-tighter">
          DID NOT FINISH <span className="text-on-surface-variant font-light">/</span> ROUTE_LOST
        </h2>
        
        <p className="font-body-lg text-on-surface-variant mb-12 text-lg">
          It looks like you've gone off-track. The page you're looking for was either 
          retired from the race or never made it out of the garage.
        </p>

        <a 
          href="/"
          className="btn-race bg-primary-fixed text-on-primary-fixed font-label-caps px-12 py-6 text-xl inline-flex items-center gap-4 hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined">restart_alt</span>
          RETURN TO PADDOCK
        </a>
      </div>

      {/* Animated hazard lines */}
      <div className="absolute bottom-1/4 -right-20 w-64 h-2 bg-error/20 -rotate-45 blur-sm animate-pulse" />
      <div className="absolute top-1/4 -left-20 w-64 h-2 bg-error/20 -rotate-45 blur-sm animate-pulse" />
    </div>
  );
};

export default DNF;
