import React, { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    period: "2025 - PRESENT", title: "KODA ACADEMY TRAINEE",  company: "KODA ACADEMY",
    desc: "Mastering Go, Node.js, and CI/CD workflows for high-performance backend systems."
  },
  {
    period: "2025 - 2025",   title: "SOFTWARE ENGINEER",       company: "PT SMOOETS TEKNOLOGI",
    desc: "Architecting immersive digital experiences and scalable API solutions."
  },
  {
    period: "2024 - 2024",   title: "PROJECT MANAGER",         company: "IYKRA",
    desc: "Managing high-impact data training programs and stakeholder communications."
  },
  {
    period: "2023 - 2023",   title: "RESEARCH ASSISTANT",      company: "OJK",
    desc: "Designing graph network architectures for financial relationship mapping."
  },
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisibleItems(prev => new Set([...prev, i]));
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop" id="experience">
      <h2 className="font-headline-xl text-headline-xl uppercase mb-16 text-center">RACE HISTORY</h2>

      <div className="max-w-5xl mx-auto space-y-0">
        {experiences.map((exp, i) => (
          <div
            key={i}
            ref={el => itemRefs.current[i] = el}
            className={`group border-t ${i === experiences.length - 1 ? 'border-b' : ''} border-outline-variant py-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-primary-fixed/5 transition-all duration-500 px-4`}
            style={{
              opacity: visibleItems.has(i) ? 1 : 0,
              transform: visibleItems.has(i) ? 'translateX(0)' : 'translateX(-50px)',
              transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, background-color 0.3s`,
            }}
          >
            <div className="flex flex-col">
              <span className="font-label-caps text-primary-fixed mb-2">{exp.period}</span>
              <h3 className="font-headline-lg text-headline-lg uppercase group-hover:text-primary-fixed transition-colors duration-300">
                {exp.title}
              </h3>
            </div>

            <div className="md:text-right mt-4 md:mt-0">
              <span className="font-label-caps block mb-1">{exp.company}</span>
              <p className="font-body-md text-on-surface-variant max-w-xs">{exp.desc}</p>

              {/* Lap bar reveals on hover */}
              <div className="mt-3 w-full h-[1px] bg-outline-variant overflow-hidden">
                <div
                  className="h-full bg-primary-fixed"
                  style={{
                    width: 0,
                    transition: 'width 0.5s ease',
                    boxShadow: '0 0 6px #c8f300',
                  }}
                  onMouseEnter={e => e.currentTarget.style.width = '100%'}
                  onMouseLeave={e => e.currentTarget.style.width = '0'}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
