import React, { useEffect, useRef, useState } from 'react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Still blocked:", e));
        
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('scroll', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isPlaying]);

  const toggleMusic = () => {

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Autoplay blocked:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex items-center gap-4">
      <audio
        ref={audioRef}
        src="./F1_sound.wav"
        loop
      />
      
      <button
        onClick={toggleMusic}
        className="group relative flex items-center gap-3 bg-surface-container-high border border-outline-variant px-4 py-2 hover:border-primary-fixed transition-all duration-300"
      >
        <div className="flex gap-[2px] items-end h-3 w-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-1 bg-primary-fixed transition-all duration-300 ${isPlaying ? 'animate-music-bar' : 'h-1'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        
        <div className="flex flex-col items-start leading-none">
          <span className="font-label-caps text-[8px] text-on-surface-variant group-hover:text-primary-fixed transition-colors">
            TEAM_RADIO
          </span>
          <span className="font-label-caps text-[10px] text-primary-fixed">
            {isPlaying ? 'ON_AIR' : 'MUTED'}
          </span>
        </div>

        {/* Glitch overlay on hover */}
        <div className="absolute inset-0 bg-primary-fixed/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes music-bar {
          0%, 100% { height: 4px; }
          50% { height: 12px; }
        }
        .animate-music-bar {
          animation: music-bar 0.6s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default MusicToggle;
