import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const roles = t('hero.roles') as string[];
  const typingSpeed = 150;
  const backspaceSpeed = 80;
  const pauseDuration = 2500;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timerId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const fullText = roles[roleIndex];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, i - 1));
        i--;
      } else {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      }

      let delta = isDeleting ? backspaceSpeed : typingSpeed;

      if (!isDeleting && i === fullText.length) {
        delta = pauseDuration;
        isDeleting = true;
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      timerId = setTimeout(tick, delta);
    };

    timerId = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timerId);
  }, [roleIndex, language, roles]);

  return (
    <section
      id="home"
      style={{
        minHeight: isMobile ? 'auto' : '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: isMobile ? '100px' : '80px',
        paddingBottom: isMobile ? '60px' : '0',
        textAlign: 'left'
      }}
    >
      {/* Background Decorations */}
      <div className="bg-text-outline" style={{ top: '20%', right: '5%' }}>Full Stack</div>
      <div className="bg-text-solid" style={{ bottom: '20%', right: '30%' }}>Developer</div>

      <div className="container" style={{ transform: isMobile ? 'none' : 'translateY(-40px)', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
          alignItems: 'center',
          gap: isMobile ? '30px' : '60px'
        }}>

          {/* Left Column */}
          <div style={{ zIndex: 10, textAlign: 'left' }}>
            <p style={{ color: 'var(--primary)', letterSpacing: '4px', fontSize: isMobile ? '11px' : '13px', fontWeight: '800', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
              {t('hero.iam')}
            </p>
            <h1 style={{
              fontSize: isMobile ? '34px' : '64px',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '20px',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Lorens Adonara, <br />
              a <span style={{ color: 'var(--primary)' }} className="typing-cursor">
                {displayText}
              </span>
            </h1>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: isMobile ? '15px' : '20px',
              maxWidth: isMobile ? '100%' : '650px',
              marginBottom: '32px',
              lineHeight: '1.6',
              fontFamily: 'Poppins, sans-serif'
            }}>
              {t('hero.description')}
            </p>

            <a href="#about" className="btn-pill" style={{
              marginBottom: isMobile ? '50px' : '60px',
              marginTop: isMobile ? '24px' : '0',
              textDecoration: 'none',
              width: 'fit-content'
            }}>
              {t('hero.button')}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="19" y2="12" /><line x1="5" y1="12" x2="19" y2="12" /><line x1="12" y1="19" x2="19" y2="12" /></svg>
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: isMobile ? '20px' : '0' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '16px', fontWeight: '600' }}>{t('common.findMe')}</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { name: 'instagram', url: 'https://www.instagram.com/llaurensz?igsh=b3g2M2tlc3Z3aGp6&utm_source=qr' },
                  { name: 'linkedin', url: 'https://id.linkedin.com/in/laurensius-suban-a99732264' },
                  { name: 'twitter', url: 'https://x.com/kuduasik217804?s=21' },
                  { name: 'facebook', url: 'https://www.facebook.com/share/1BoS2k3fEF/?mibextid=wwXIfr' },
                  { name: 'whatsapp', url: 'https://wa.me/6281395445565' }
                ].map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon" style={{ background: 'rgba(255, 255, 255, 0.05)', width: '36px', height: '36px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    {social.name === 'instagram' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y2="6.5" y1="6.5" /></svg>}
                    {social.name === 'linkedin' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>}
                    {social.name === 'twitter' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>}
                    {social.name === 'facebook' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>}
                    {social.name === 'whatsapp' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9l4.7-1.3-1.3 4.7z" /><path d="M12 8l4 6-2 1-4-6" /></svg>}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', order: isMobile ? -1 : 1 }}>
            <div
              style={{
                position: 'absolute',
                width: '120%',
                height: '110%',
                background: 'radial-gradient(circle, rgba(0, 180, 255, 0.15) 0%, transparent 70%)',
                zIndex: -1,
                top: '-5%',
                animation: 'pulse-glow 5s infinite'
              }}
            />

            <div className="profile-blob" style={{
              width: isMobile ? '280px' : '480px',
              height: isMobile ? '280px' : '480px',
              background: '#222',
              overflow: 'hidden'
            }}>
              <img
                src="/profile.png"
                alt="Lorens Adonara"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
