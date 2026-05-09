import React, { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: "TITAN ENGINE",
    desc: "A real-time data visualization platform for high-performance computing clusters.",
    tags: [{ label: "NEXT.JS", primary: true }, { label: "WEBGL", primary: false }],
    cta: "EXPLORE DATA",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBaqbY2zgJQv1rd-QHrd4kXXP1cAEenKdltnKhU-QELibM-dY4WVKkg_vwothB2LEap_1PHbNnrIwka_nXU1KUzGX09mZeXTJL6Qmjcmbr6gsRKiynVdCVx8RUviQs31UMqmlCVPRrb369cMNqjLl_VjPtudDQ6h1zAe47iN2gjU6TJdXKUYi2Ska1IPXp69aAdN-UYRRWX2xREXewYbnCV0HC7bGHmWR3obwy5EWs0LVAmaSTzywRs0utHfOgVt2ahRicl3AvpKUW"
  },
  {
    title: "KINETIC API",
    desc: "Low-latency backend architecture optimized for high-velocity transaction processing.",
    tags: [{ label: "TYPESCRIPT", primary: true }, { label: "AWS", primary: false }],
    cta: "INSPECT CORE",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpBV1_ePFDKVy2yHjvSTUXRTVhUThpJmqilA0CRvCecZPiMwzaouOPK0l_GXfURKW-mdDHOAWN2ibIpXIfIFilmUu1DebS4iXz7dZjZtVAo_aTXfqe9oo10lwaS5-hioaUmVeMccDFOBvgMUWeGoOpdiqmnj_SBz7vNr_8kZjhjscuP7l96Usy6njDawdD9IbV1VWXlFXc_5bexB5llOHncXizl28uWGtste7ipU4EfxcI1orkCr9QefGoHGsgymYUcFKeI_diC_Eo"
  },
];

const ActiveProjects = () => {
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
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low"
      id="projects"
    >
      {/* Section header */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
        <h2
          className="font-headline-xl text-headline-xl uppercase transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
          }}
        >
          ACTIVE PROJECTS
        </h2>
        <a
          className="font-label-caps text-primary-fixed hover:underline flex items-center gap-2 transition-all duration-700"
          href="#"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(40px)',
            transitionDelay: '200ms',
          }}
        >
          VIEW ALL WORK <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative bg-surface-container overflow-hidden border border-outline-variant hover:border-primary-fixed transition-all duration-500"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(60px)',
              transition: `opacity 0.7s ease ${i * 200}ms, transform 0.7s ease ${i * 200}ms, border-color 0.3s`,
            }}
          >
            {/* Image container */}
            <div className="h-80 w-full overflow-hidden relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              {/* Overlay scanlines on image */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)'
                }}
              />
              {/* Corner accent */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-8">
              {/* Tags */}
              <div className="flex gap-2 mb-6">
                {project.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className={`${tag.primary ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-highest text-primary'} px-3 py-0.5 font-label-caps text-[10px]`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <h3 className="font-headline-xl text-headline-xl uppercase group-hover:text-primary-fixed transition-colors duration-300 mb-4">
                {project.title}
              </h3>
              <p className="font-body-md text-on-surface-variant mb-8">{project.desc}</p>

              <button className="flex items-center gap-2 font-label-caps text-primary group-hover:gap-6 transition-all duration-300">
                {project.cta} <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>

              {/* Bottom lap bar that fills on hover */}
              <div className="mt-6 w-full h-[2px] bg-outline-variant overflow-hidden">
                <div
                  className="h-full bg-primary-fixed transition-all duration-700 w-0 group-hover:w-full"
                  style={{ boxShadow: '0 0 8px #c8f300' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveProjects;
