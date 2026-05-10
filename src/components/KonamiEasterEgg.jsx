import React, { useEffect, useState } from 'react';

const KonamiEasterEgg = () => {
  const [activated, setActivated] = useState(false);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let input = [];

  useEffect(() => {
    const onKeydown = (e) => {
      input.push(e.key);
      input = input.slice(-10);
      
      if (input.join(',') === konamiCode.join(',')) {
        triggerAnimation();
        input = [];
      }
    };

    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, []);

  const triggerAnimation = () => {
    setActivated(true);
    setTimeout(() => setActivated(false), 3000);
  };

  if (!activated) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <div className="absolute top-1/2 -left-32 animate-zoom-across flex flex-col items-center">
        {/* Custom Racing Car SVG */}
        <div className="filter drop-shadow-[0_0_20px_#c8f300]">
          <img 
            src="./f1.svg" 
            alt="F1 Car" 
            className="w-48 h-auto"
          />
        </div>

        <div className="h-[2px] w-64 bg-gradient-to-l from-primary-fixed to-transparent mt-1 opacity-50 blur-[1px]" />
      </div>

      
      {/* Visual flash */}
      <div className="absolute inset-0 bg-primary-fixed/10 animate-pulse-fast pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 font-headline-xl text-primary-fixed animate-bounce whitespace-nowrap">
        CHEAT CODE ACTIVATED: MAX VELOCITY!
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes zoom-across {
          0% { transform: translateX(0) skewX(-20deg); }
          100% { transform: translateX(calc(100vw + 200px)) skewX(-20deg); }
        }
        .animate-zoom-across {
          animation: zoom-across 0.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards;
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-pulse-fast {
          animation: pulse-fast 0.1s ease-in-out 3;
        }
      `}} />
    </div>
  );
};

export default KonamiEasterEgg;
