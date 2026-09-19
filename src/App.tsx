import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <AnimatedBackground />
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="main-wrapper">
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Floating Action Controls on Bottom-Left */}
      <div className="floating-stack">
        <button
          className="floating-btn language"
          onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
          title="Switch Language (ID / EN)"
          aria-label="Switch Language"
        >
          {language.toUpperCase()}
        </button>
      </div>

      {/* Scroll To Top on Bottom-Right */}
      <ScrollToTop />
    </div>
  );
}

export default App;
