import React, { useEffect, useRef, useState } from 'react';

const MouseSpotlight = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[2] hidden md:block"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(200,243,0,0.04) 0%, transparent 70%)',
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
      }}
    />
  );
};

export default MouseSpotlight;
