import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

function AppContent() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="main-wrapper">
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Services />
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </div>

      <div className="side-built" style={{ cursor: 'pointer' }}>
        Lorens Adonara
      </div>

      <div className="language-bubble" onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
        <span className="lang-text">{language.toUpperCase()}</span>
      </div>

      <a href="https://wa.me/6281395445565" target="_blank" rel="noopener noreferrer" className="messenger-bubble">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9l4.7-1.3-1.3 4.7z" /><path d="M12 8l4 6-2 1-4-6" /></svg>
      </a>

      <footer className="container" style={{ padding: '40px 0', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '12px' }}>
        <p>© 2026 LorensAdonara. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
