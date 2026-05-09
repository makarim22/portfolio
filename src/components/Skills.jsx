import React, { useEffect, useRef, useState } from 'react';

const specs = [
  {
    id: "01", category: "ENGINE",        title: "REACT.JS",
    desc: "Building reactive, lightning-fast component architectures for scalable applications.",
    icon: "settings_input_component"
  },
  {
    id: "02", category: "TRANSMISSION",  title: "TYPESCRIPT",
    desc: "Strictly typed systems to ensure zero-latency bugs and high-precision execution.",
    icon: "code"
  },
  {
    id: "03", category: "AERODYNAMICS", title: "TAILWIND CSS",
    desc: "Low-drag, high-utility styling systems designed for rapid iterative deployment.",
    icon: "air"
  },
  {
    id: "04", category: "TELEMETRY",    title: "NEXT.JS",
    desc: "Full-stack optimization with server-side rendering for peak SEO performance.",
    icon: "dynamic_form"
  },
];

/* Animated percentage bar that fills on mount */
const SpecBar = ({ value, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(value); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="w-full h-[2px] bg-outline-variant mt-auto">
      <div
        className="h-full bg-primary-fixed"
        style={{
          width: `${width}%`,
          transition: `width 1.2s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
          boxShadow: width > 0 ? '0 0 8px #c8f300' : 'none',
        }}
      />
    </div>
  );
};

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest" id="skills">
      {/* Header row */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-outline-variant pb-8">
        <h2
          className={`font-headline-xl text-headline-xl uppercase transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          TECHNICAL <br />SPECIFICATIONS
        </h2>
        <span
          className={`font-label-caps text-on-surface-variant transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          V8 ENGINE ARCHITECTURE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {specs.map((spec, i) => (
          <div
            key={spec.id}
            className="neo-border border-animate p-base flex flex-col gap-6 hover:bg-surface-container-high group transition-all duration-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms, border-color 0.3s, box-shadow 0.3s`,
              minHeight: '280px',
            }}
          >
            <span className="font-label-caps text-primary-fixed">{spec.id}. {spec.category}</span>
            <div className="flex-1">
              <h3 className="font-headline-lg text-headline-lg uppercase mb-2">{spec.title}</h3>
              <p className="font-body-md text-on-surface-variant group-hover:text-primary transition-colors text-sm">
                {spec.desc}
              </p>
            </div>
            <span className="material-symbols-outlined text-4xl text-primary-fixed group-hover:scale-110 transition-transform duration-300">
              {spec.icon}
            </span>
            {/* Animated progress bar fills on scroll into view */}
            <SpecBar value={75 + i * 5} delay={i * 120 + 400} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
