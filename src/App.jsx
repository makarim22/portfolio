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
          <SectionDivider label="LAP 01 — TECH SPECS" />
          <Skills />
          <SectionDivider label="LAP 02 — RACE LOG" />
          <Experience />
          <SectionDivider label="LAP 03 — GARAGE" />
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
