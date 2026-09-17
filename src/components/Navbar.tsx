import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // Simple active section detector
      const sections = ['home', 'about', 'services', 'experience', 'education', 'skills', 'project', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
      if (window.innerWidth > 960) setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: t<string>('nav.home'), id: 'home' },
    { label: t<string>('nav.about'), id: 'about' },
    { label: t<string>('nav.services'), id: 'services' },
    { label: t<string>('nav.experience'), id: 'experience' },
    { label: t<string>('nav.education'), id: 'education' },
    { label: t<string>('nav.skills'), id: 'skills' },
    { label: t<string>('nav.projects'), id: 'project' },
    { label: t<string>('nav.contact'), id: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://id.linkedin.com/in/laurensius-suban-a99732264',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/6281337383282',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9l4.7-1.3-1.3 4.7z" />
          <path d="M12 8l4 6-2 1-4-6" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/llaurensz?igsh=b3g2M2tlc3Z3aGp6&utm_source=qr',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Twitter / X',
      url: 'https://x.com/kuduasik217804?s=21',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: scrolled ? (isMobile ? '10px' : '14px') : (isMobile ? '16px' : '20px'),
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          pointerEvents: 'none',
          opacity: isMenuOpen ? 0 : 1,
          visibility: isMenuOpen ? 'hidden' : 'visible',
          padding: isMobile ? '0 14px' : '0 24px',
          boxSizing: 'border-box',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          className="navbar-pill"
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: isMobile ? '100%' : '1100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '0' : '6px 10px 6px 12px',
            borderRadius: isMobile ? '0' : 'var(--radius-full)',
            background: isMobile
              ? 'transparent'
              : (scrolled ? 'rgba(7, 12, 26, 0.88)' : 'rgba(7, 12, 26, 0.5)'),
            backdropFilter: isMobile ? 'none' : 'blur(20px)',
            WebkitBackdropFilter: isMobile ? 'none' : 'blur(20px)',
            border: isMobile
              ? 'none'
              : (scrolled ? '1px solid rgba(0, 180, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)'),
            boxShadow: isMobile
              ? 'none'
              : (scrolled
                ? '0 16px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px -5px rgba(0, 180, 255, 0.18)'
                : '0 8px 24px -8px rgba(0, 0, 0, 0.5)'),
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Brand Logo - Just the LA Icon */}
          <a
            href="#home"
            aria-label="Lorens Adonara - Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00b4ff 0%, #0077b6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px -2px rgba(0, 180, 255, 0.5)',
                position: 'relative',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '16px', fontFamily: 'var(--font-heading)' }}>
                LA
              </span>
              <span
                style={{
                  position: 'absolute',
                  top: '-1px',
                  right: '-1px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 8px var(--accent-emerald)'
                }}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="desktop-only"
            style={{
              alignItems: 'center',
              gap: '2px'
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={{
                  padding: '6px 12px',
                  fontSize: '13.5px'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Socials + Language Switcher + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* Desktop Actions */}
            <div className="desktop-only" style={{ alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                aria-label="Toggle language"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  padding: '6px 12px',
                  color: 'var(--text-main)',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>{language.toUpperCase()}</span>
              </button>

              <div style={{ display: 'flex', gap: '4px' }}>
                {socialLinks.slice(0, 2).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    title={social.name}
                    style={{ width: '34px', height: '34px', borderRadius: '50%' }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Actions: Language Switcher + Hamburger */}
            <div className="mobile-only" style={{ alignItems: 'center', gap: '8px' }}>
              {/* Language Switcher in Mobile Topbar (Left of Hamburger) */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                aria-label="Ganti Bahasa (ID / EN)"
                title="Ganti Bahasa (ID / EN)"
                style={{
                  height: '40px',
                  padding: '0 12px',
                  borderRadius: '12px',
                  background: 'rgba(11, 18, 34, 0.85)',
                  border: '1px solid rgba(0, 180, 255, 0.35)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4), 0 0 10px -2px var(--primary-glow)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '800',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 180, 255, 0.35)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span style={{ color: 'var(--primary)', letterSpacing: '0.04em' }}>
                  {language.toUpperCase()}
                </span>
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Navigation Menu"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(11, 18, 34, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {isMenuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(5, 8, 20, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          zIndex: 2000,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          opacity: isMenuOpen ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            maxWidth: '340px',
            height: '100%',
            background: '#070c1a',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.8)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00b4ff 0%, #0077b6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: '900',
                  fontSize: '16px',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                LA
              </div>
              <span style={{ fontWeight: '800', fontSize: '15px', color: '#ffffff', letterSpacing: '-0.01em' }}>
                Navigation
              </span>
            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  color: activeSection === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                  background: activeSection === item.id ? 'rgba(0, 180, 255, 0.1)' : 'transparent',
                  fontWeight: '600',
                  fontSize: '15px',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                )}
              </a>
            ))}
          </div>

          {/* Language Switcher in Drawer */}
          <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Language</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={() => setLanguage('id')}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: language === 'id' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)',
                    background: language === 'id' ? 'rgba(0, 180, 255, 0.15)' : 'transparent',
                    color: language === 'id' ? 'var(--primary)' : 'var(--text-muted)',
                    fontSize: '12px',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: language === 'en' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)',
                    background: language === 'en' ? 'rgba(0, 180, 255, 0.15)' : 'transparent',
                    color: language === 'en' ? 'var(--primary)' : 'var(--text-muted)',
                    fontSize: '12px',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  style={{ width: '40px', height: '40px' }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
