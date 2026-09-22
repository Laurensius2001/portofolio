
import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="portfolio-app-root">
        {/* Main Content Sections */}
        <main className="portfolio-main">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
