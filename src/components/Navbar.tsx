import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = [
    { id: 'home', label: t<string>('nav.home') || 'Home' },
    { id: 'projects', label: t<string>('nav.projects') || 'Projects' },
    { id: 'about', label: t<string>('nav.about') || 'About' },
    { id: 'skills', label: t<string>('nav.skills') || 'Skills' },
    { id: 'experience', label: t<string>('nav.experience') || 'Experience' },
    { id: 'contact', label: t<string>('nav.contact') || 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'projects', 'about', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo (Matching DIKSHANT. style) */}
        <button
          onClick={() => scrollToSection('home')}
          className="nav-brand"
          aria-label="Lorens Adonara - Home"
        >
          <div className="nav-brand-blob" />
          <span className="nav-brand-text">
            LORENS<span className="nav-brand-dot">.</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="nav-links-desktop">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link-btn ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions: Language Toggle & Purple Hamburger Menu Button */}
        <div className="nav-actions">
          <button
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className="btn-lang-toggle"
            title="Switch Language (EN / ID)"
          >
            <Globe style={{ width: '14px', height: '14px', color: '#ccff00' }} />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-purple-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X style={{ width: '20px', height: '20px' }} />
            ) : (
              <Menu style={{ width: '20px', height: '20px' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" onClick={() => setMobileMenuOpen(false)}>
          <ul className="mobile-nav-list" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span>✓</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
