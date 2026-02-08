import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.education'), id: 'education' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.skills'), id: 'skills' },
    { label: t('nav.projects'), id: 'project' }
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          padding: isMobile ? (scrolled ? '12px 15px' : '20px 15px') : (scrolled ? '15px 0' : '25px 0'),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          background: scrolled ? 'rgba(0, 8, 17, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(15px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'relative' }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
            <div style={{
              background: 'var(--primary)',
              padding: isMobile ? '6px' : '8px',
              borderRadius: '8px',
              boxShadow: '0 0 15px var(--primary-glow)'
            }}>
              <svg width={isMobile ? "18" : "22"} height={isMobile ? "18" : "22"} viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <span style={{ fontWeight: '800', fontSize: isMobile ? '20px' : '24px', letterSpacing: '-0.5px', color: 'white', fontFamily: 'Outfit' }}>LorensAdonara</span>
          </div>

          {/* Desktop Links */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${item.id === 'home' ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Social Icons (Desktop) & Hamburger (Mobile) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {!isMobile && (
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { name: 'instagram', url: 'https://www.instagram.com/llaurensz?igsh=b3g2M2tlc3Z3aGp6&utm_source=qr' },
                  { name: 'linkedin', url: 'https://id.linkedin.com/in/laurensius-suban-a99732264' },
                  { name: 'twitter', url: 'https://x.com/kuduasik217804?s=21' },
                  { name: 'facebook', url: 'https://www.facebook.com/share/1BoS2k3fEF/?mibextid=wwXIfr' },
                  { name: 'whatsapp', url: 'https://wa.me/6281395445565' }
                ].map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon" style={{ width: '36px', height: '36px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div style={{ transform: 'scale(0.85)', color: 'var(--text-main)' }}>
                      {social.name === 'instagram' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>}
                      {social.name === 'linkedin' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>}
                      {social.name === 'twitter' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>}
                      {social.name === 'facebook' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>}
                      {social.name === 'whatsapp' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9l4.7-1.3-1.3 4.7z" /><path d="M12 8l4 6-2 1-4-6" /></svg>}
                    </div>
                  </a>
                ))}
              </div>
            )}

            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(true)}
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px var(--primary-glow)',
                  cursor: 'pointer'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 2000,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          opacity: isMenuOpen ? 1 : 0,
          transition: 'all 0.4s ease'
        }}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '320px',
            maxWidth: '85%',
            height: '100%',
            background: '#0a101e',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: 'var(--primary)', padding: '6px', borderRadius: '6px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <span style={{ fontWeight: '800', fontSize: '20px', color: 'white', fontFamily: 'Outfit' }}>LorensAdonara</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  padding: '12px 0',
                  color: item.id === 'home' ? 'var(--primary)' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'color 0.3s ease'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Footer Socials */}
          <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px', opacity: 0.6 }}>
              Find With Me
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { name: 'instagram', url: 'https://www.instagram.com/llaurensz?igsh=b3g2M2tlc3Z3aGp6&utm_source=qr' },
                { name: 'linkedin', url: 'https://id.linkedin.com/in/laurensius-suban-a99732264' },
                { name: 'twitter', url: 'https://x.com/kuduasik217804?s=21' },
                { name: 'facebook', url: 'https://www.facebook.com/share/1BoS2k3fEF/?mibextid=wwXIfr' },
                { name: 'whatsapp', url: 'https://wa.me/6281395445565' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ width: '44px', height: '44px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <div style={{ color: 'white' }}>
                    {social.name === 'instagram' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>}
                    {social.name === 'linkedin' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>}
                    {social.name === 'twitter' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>}
                    {social.name === 'facebook' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>}
                    {social.name === 'whatsapp' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9l4.7-1.3-1.3 4.7z" /><path d="M12 8l4 6-2 1-4-6" /></svg>}
                  </div>
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
