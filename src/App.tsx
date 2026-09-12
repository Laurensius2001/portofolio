import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="main-wrapper">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Education />
        <Skills />
        <Projects />
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

        <a
          href="https://wa.me/6281337383282?text=Halo%20Lorens,%20saya%20tertarik%20dengan%20portofolio%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp"
          title="Direct WhatsApp Chat"
          aria-label="Direct WhatsApp Chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9l4.7-1.3-1.3 4.7z" />
            <path d="M12 8l4 6-2 1-4-6" />
          </svg>
        </a>
      </div>

      {/* Scroll To Top on Bottom-Right */}
      <ScrollToTop />

      {/* Modern Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(5, 8, 20, 0.9)',
          padding: '48px 0 36px 0',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            textAlign: 'center'
          }}
        >
          {/* Brand Monogram */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--primary)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '900',
                fontSize: '16px',
                fontFamily: 'var(--font-heading)'
              }}
            >
              LA
            </div>
            <span style={{ fontSize: '16px', fontWeight: '800', letterSpacing: '-0.02em', color: '#ffffff' }}>
              Lorens Adonara
            </span>
          </div>

          {/* Nav Quick Links in Footer */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {[
              { label: t<string>('nav.home'), href: '#home' },
              { label: t<string>('nav.about'), href: '#about' },
              { label: t<string>('nav.services'), href: '#services' },
              { label: t<string>('nav.experience'), href: '#experience' },
              { label: t<string>('nav.skills'), href: '#skills' },
              { label: t<string>('nav.projects'), href: '#project' },
              { label: t<string>('nav.contact'), href: '#contact' }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright & Tech Stack */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '24px', width: '100%' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px' }}>
              © {new Date().getFullYear()} {t<string>('footer.rights')}
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', opacity: 0.7 }}>
              {t<string>('footer.builtWith')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
