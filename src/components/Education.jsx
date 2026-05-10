import React, { useEffect, useRef, useState } from 'react';

const Education = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 
            className={`font-headline-xl text-headline-xl uppercase transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            DRIVER ACADEMY
          </h2>
          <div className={`flex-1 h-[1px] bg-outline-variant transition-all duration-1000 delay-300 ${visible ? 'scale-x-100' : 'scale-x-0'} origin-left`} />
          <span className="font-label-caps text-on-surface-variant text-[10px] hidden md:block">ACADEMIC CREDENTIALS</span>
        </div>

        <div 
          className={`neo-border p-8 md:p-12 bg-surface-container-low transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <h3 className="font-headline-lg text-headline-lg uppercase mb-2 text-primary-fixed">
                Universitas Indonesia
              </h3>
              <p className="font-label-caps text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Depok, Indonesia
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-primary-fixed/10 border border-primary-fixed text-primary-fixed font-label-caps text-sm mb-2">
                AUG 2017 - AUG 2021
              </span>
              <p className="font-headline-sm text-headline-sm uppercase tracking-tight">Islamic Economics</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-outline-variant">
            <div className="space-y-6">
              <h4 className="font-label-caps text-primary-fixed text-xs tracking-[0.2em]">HONORS & RECOGNITION</h4>
              <ul className="space-y-4">
                {[
                  "2nd winner of UI Quranic Olympiad 2020",
                  "Represented Faculty in IESCO 2020",
                  "Represented Faculty in OIM UI 2020"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="mt-2 w-1.5 h-1.5 bg-primary-fixed group-hover:scale-150 transition-transform duration-300 shrink-0" />
                    <p className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-on-surface transition-colors">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-label-caps text-primary-fixed text-xs tracking-[0.2em]">RESEARCH & ACTIVITIES</h4>
              <ul className="space-y-4">
                {[
                  "Participated in The 2021 SMICIE International Conference",
                  "Active in various organizational leadership roles",
                  "Volunteered for multiple social impact programs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="mt-2 w-1.5 h-1.5 border border-primary-fixed group-hover:bg-primary-fixed transition-all duration-300 shrink-0" />
                    <p className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-on-surface transition-colors">{item}</p>
                  </li>
                ))}

              </ul>
            </div>
          </div>

          {/* Bottom decorative telemetry */}
          <div className="mt-12 pt-6 border-t border-outline-variant flex justify-between items-center opacity-30">
            <div className="flex gap-4">
              <div className="w-1 h-1 bg-on-surface-variant rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-on-surface-variant rounded-full animate-pulse delay-75" />
              <div className="w-1 h-1 bg-on-surface-variant rounded-full animate-pulse delay-150" />
            </div>
            <span className="font-label-caps text-[8px]">ACADEMY_SERIAL_UI_2021</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

