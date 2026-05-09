import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  const coords = useRef({ x: -100, y: -100 });
  const trailCoords = useRef(Array.from({ length: 6 }, () => ({ x: -100, y: -100 })));

  useEffect(() => {
    const onMove = (e) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      const { x, y } = coords.current;

      // Main dot — instant
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }

      // Ring — follows with slight lag
      if (ringRef.current) {
        const rx = parseFloat(ringRef.current.dataset.x || x);
        const ry = parseFloat(ringRef.current.dataset.y || y);
        const nx = rx + (x - rx) * 0.15;
        const ny = ry + (y - ry) * 0.15;
        ringRef.current.style.transform = `translate(${nx - 20}px, ${ny - 20}px)`;
        ringRef.current.dataset.x = nx;
        ringRef.current.dataset.y = ny;
      }

      // Trail particles
      trailCoords.current.forEach((tc, i) => {
        const target = i === 0 ? coords.current : trailCoords.current[i - 1];
        tc.x += (target.x - tc.x) * (0.25 - i * 0.03);
        tc.y += (target.y - tc.y) * (0.25 - i * 0.03);
        if (trailRefs.current[i]) {
          trailRefs.current[i].style.transform = `translate(${tc.x - 2}px, ${tc.y - 2}px)`;
        }
      });

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Only show custom cursor on devices with fine pointer (desktop)
  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9998]">
      {/* Trail particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={el => trailRefs.current[i] = el}
          className="fixed top-0 left-0 rounded-full"
          style={{
            width: `${4 - i * 0.5}px`,
            height: `${4 - i * 0.5}px`,
            background: '#c8f300',
            opacity: 0.4 - i * 0.06,
            boxShadow: `0 0 ${6 - i}px #c8f300`,
          }}
        />
      ))}

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary-fixed/40"
        style={{ transition: 'width 0.2s, height 0.2s', mixBlendMode: 'difference' }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary-fixed"
        style={{ boxShadow: '0 0 8px #c8f300, 0 0 16px rgba(200,243,0,0.3)' }}
      />
    </div>
  );
};

export default CustomCursor;
