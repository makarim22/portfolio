import React from 'react';

const SectionDivider = ({ label }) => {
  return (
    <div className="relative py-8 px-margin-mobile md:px-margin-desktop overflow-hidden">
      {/* Checkered pattern strip */}
      <div className="flex items-center gap-4 max-w-5xl mx-auto">
        {/* Left checkered */}
        <div className="flex-1 flex items-center gap-0 overflow-hidden h-4">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`l-${i}`}
              className="w-4 h-4 flex-shrink-0"
              style={{
                background: i % 2 === 0
                  ? 'linear-gradient(135deg, #2a2a1e 50%, transparent 50%)'
                  : 'linear-gradient(135deg, transparent 50%, #333322 50%)',
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        {/* Center label */}
        {label && (
          <span className="font-label-caps text-[8px] text-on-surface-variant whitespace-nowrap px-2 border border-outline-variant bg-surface">
            {label}
          </span>
        )}

        {/* Right checkered */}
        <div className="flex-1 flex items-center gap-0 overflow-hidden h-4">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`r-${i}`}
              className="w-4 h-4 flex-shrink-0"
              style={{
                background: i % 2 === 0
                  ? 'linear-gradient(135deg, #333322 50%, transparent 50%)'
                  : 'linear-gradient(135deg, transparent 50%, #2a2a1e 50%)',
                opacity: 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
