import React, { useState, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import MouseSpotlight from './components/MouseSpotlight';
import ParticleField from './components/ParticleField';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SectionDivider from './components/SectionDivider';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import GitHubTelemetry from './components/GitHubTelemetry';
import KonamiEasterEgg from './components/KonamiEasterEgg';
import MusicToggle from './components/MusicToggle';
import ActiveProjects from './components/ActiveProjects';


import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Loading screen — engine start sequence */}
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Global ambient layers */}
      <CustomCursor />
      <KonamiEasterEgg />
      <MusicToggle />
      <MouseSpotlight />

      <ParticleField />
      <ScrollProgress />


      <div
        className="min-h-screen bg-surface transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <Header />

        <main>
          <Hero />
          <Stats />
          <GitHubTelemetry />
          <SectionDivider label="LAP 01 — TECH SPECS" />
          <Skills />
          <SectionDivider label="LAP 02 — RACE LOG" />
          <Experience />
          <SectionDivider label="LAP 03 — ACADEMY" />
          <Education />
          <SectionDivider label="LAP 04 — GARAGE" />
          <ActiveProjects />
          <SectionDivider label="FINISH LINE" />
          <Contact />
        </main>


        <Footer />
      </div>
    </>
  );
}


export default App;
